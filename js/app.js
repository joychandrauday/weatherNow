const weatherIcon = elementByID('weatherImg');
const weatherUpdateHeader = elementByID('weatherUpdate');
const weatherDetails = elementByID('weatherDetails');
const SearchInput = elementByID('SearchInput');
const cityNameTop = elementByID('cityName');


const apiKey = '39525018ce507ad6047d5292f584c942';
const city = 'patuakhali';
function searchData() {
    const SearchInputText=SearchInput.value;
    cityNameTop.innerText=SearchInputText;
    showWeatherData(SearchInputText);
}
const showWeatherData = (cityName) => {
    weatherDetails.innerHTML="";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(apiUrl)
        
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the data here
            console.log(data);
            const temperature = parseInt(data?.main.temp - 273);
            const temperatureMax = parseInt(data?.main.temp_max - 273);
            console.log(data?.weather[0].main);
            const weatherCondition=data?.weather[0].main;
            if (weatherCondition === "Clear") {
                weatherIcon.innerHTML = `
                        <img class="filter invert w-3/5 p-5" src="images/sunny.png" alt="images">
                    `
                weatherUpdateHeader.innerText = "কর্দমাক্ত আকাশ,মেঘমুক্ত মাঠ !!";
                weatherDetails.innerHTML = `

                <div class="font-bold">
                    <p>আজকের তাপমাত্রা: ${temperature} ডিগ্রি সে.</p>
                    <p>সর্বোচ্চ তাপমাত্রা: ${temperatureMax} ডিগ্রি সে.</p>
                    <p>আর্দ্রতা: ${data?.main.humidity}</p>
                    <p>বায়ুচাপ: ${data?.main.pressure / 1000} বার</p>
                </div>
    
                `
            } else if (weatherCondition === "Clouds") {
                weatherIcon.innerHTML = `
                        <img class="filter invert w-3/5 p-5" src="images/sun-cloud.png" alt="images">
                    `
                weatherUpdateHeader.innerText = "মেঘ মেঘ করছে,ছাতা নিও।";
                weatherDetails.innerHTML = `

                <div class="font-bold">
                    <p>আজকের তাপমাত্রা: ${temperature} ডিগ্রি সে.</p>
                    <p>সর্বোচ্চ তাপমাত্রা: ${temperatureMax} ডিগ্রি সে.</p>
                    <p>আর্দ্রতা: ${data?.main.humidity}</p>
                    <p>বায়ুচাপ: ${data?.main.pressure / 1000} বার</p>
                </div>
    
                `
            } else if (weatherCondition === "Rain") {
                weatherIcon.innerHTML = `
                        <img class="filter invert w-3/5 p-5" src="images/heavy-rain.png" alt="images">
                    `
                weatherUpdateHeader.innerText = "কি বৃষ্টি!! খিচুড়ি হোক?";
                weatherDetails.innerHTML = `

                <div class="font-bold">
                    <p>আজকের তাপমাত্রা: ${temperature} ডিগ্রি সে.</p>
                    <p>সর্বোচ্চ তাপমাত্রা: ${temperatureMax} ডিগ্রি সে.</p>
                    <p>আর্দ্রতা: ${data?.main.humidity}</p>
                    <p>বায়ুচাপ: ${data?.main.pressure / 1000} বার</p>
                </div>
    
                `
            } else if (weatherCondition === "Snow") {
                weatherIcon.innerHTML = `
                        <img class="filter invert w-3/5 p-5" src="images/snow.png" alt="images">
                    `
                weatherUpdateHeader.innerText = "কানটুপি পরেছ?";
                weatherDetails.innerHTML = `

                <div class="font-bold">
                    <p>আজকের তাপমাত্রা: ${temperature} ডিগ্রি সে.</p>
                    <p>সর্বোচ্চ তাপমাত্রা: ${temperatureMax} ডিগ্রি সে.</p>
                    <p>আর্দ্রতা: ${data?.main.humidity}</p>
                    <p>বায়ুচাপ: ${data?.main.pressure / 1000} বার</p>
                </div>
    
                `
            } else {
                weatherUpdateHeader.innerText = "এই আবহাওয়ার ভাব বুঝছি না। ";
                weatherDetails.innerHTML = `

                <div class="font-bold">
                    <p>আজকের তাপমাত্রা: ${temperature} ডিগ্রি সে.</p>
                    <p>সর্বোচ্চ তাপমাত্রা: ${temperatureMax} ডিগ্রি সে.</p>
                    <p>আর্দ্রতা: ${data?.main.humidity}</p>
                    <p>বায়ুচাপ: ${data?.main.pressure / 1000} বার</p>
                </div>
    
                `
            }
            
        })
        .catch(error => {
            // Handle errors here
            console.error('There was a problem with the fetch operation:', error);
        });


}
showWeatherData("patuakhali");
showWeatherData(cityName);