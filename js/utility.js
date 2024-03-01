function elementByID(id) {
    const element = document.getElementById(id);
    return element;
}
if (data?.weather[0].main === "Clear") {
    weatherIcon.innerHTML = `
            <img class="filter invert w-3/5 p-5" src="images/sunny.png" alt="images">
        `
    weatherUpdateHeader.innerText = "কর্দমাক্ত আকাশ,মেঘমুক্ত মাঠ !!";
} else if (data?.weater[0].main === "Clouds") {
    weatherIcon.innerHTML = `
            <img class="filter invert w-3/5 p-5" src="images/sun-cloud.png" alt="images">
        `
    weatherUpdateHeader.innerText = "মেঘ মেঘ করছে,ছাতা নিও।";
} else if (data?.weater[0].main === "Rain") {
    weatherIcon.innerHTML = `
            <img class="filter invert w-3/5 p-5" src="images/heavy-rain.png" alt="images">
        `
    weatherUpdateHeader.innerText = "কি বৃষ্টি!! খিচুড়ি হোক?";
} else if (data?.weater[0].main === "Snow") {
    weatherIcon.innerHTML = `
            <img class="filter invert w-3/5 p-5" src="images/snow.png" alt="images">
        `
    weatherUpdateHeader.innerText = "কানটুপি পরেছ?";
} else {
    weatherUpdateHeader.innerText = "এই আবহাওয়ার ভাব বুঝছি না। ";
}