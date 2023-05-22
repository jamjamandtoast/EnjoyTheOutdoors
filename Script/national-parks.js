"use scrict";

const locationDataDropDown = document.getElementById("locationDropDown");


window.onload = () => {
    for (let locationsArrays = locationsArray) { 
        let newOption = new Option(locationsArray);
        locationDataDropDown.appendChild(newOption);
    }
}

