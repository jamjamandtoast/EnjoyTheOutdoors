"use strict";

const locationDataDropDown = document.getElementById("locationDataDopdown");
const ParkDataDropDown = document.getElementById("ParkDataDopdown");
//define parkdetails row element id in national park html
const parkDetailRow = document.getElementById("parkDetailRow");


const parkName = document.getElementById("parkName");

const parkDetails = document.getElementById("parkDetails");

const parkId = document.getElementById("parkId");

const parkCity = document.getElementById("parkCity");

const parkState = document.getElementById("parkState");



const parkZipCode = document.getElementById("parkZipCode");

const parkFax = document.getElementById("parkFax");

//make sure to load up function on window.onload
window.onload = () => {
    showLocationDrops();
    showParkDrops();

    locationDataDropDown.onchange = dropdownforLocation;

}
//this function loads from location array to show options on the 
//dropdown
function showLocationDrops() {
    for (let locationVariable of locationsArray) {
      let newOption = new Option(locationVariable, locationVariable);
      locationDataDropDown.appendChild(newOption);
    }
  }


 //this funtion loads from park type array to show options on the dropdown 
function showParkDrops() {
    for (let parkdataVariable of parkTypesArray) {
        let newOption = new Option(parkdataVariable);
        ParkDataDropDown.appendChild(newOption);
        
    }
}
// filter out for locations
function dropdownforLocation() {
    let selectedState =locationDataDropDown.Value;
    console.log(selectedState);
    const parksFilter = nationalParksArray.filter(park => park.State == selectedState);
    console.log(parksFilter);
}




if (parksFilter.length > 0) {
    
    for (let park of parksFilter) {
        createNationalParkcard(park);
    }
    divRowParks.innerHTML =  "";

       
    }




function createNationalParkcard(park) {

    let divCol = document.createElement("div");
    divCol.className = "col" ;
    parkDetailRow.appendChild(divCol);

   
    let divCard = document.createElement("div");
    divCard.className = "card" ;
    divCol.appendChild(divCard);

    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body" ;
    divCard.appendChild(divCardBody);

    let h5Name = document.createElement("h5");
    h5Name.className = "card-title" ;
    h5Name.innerHTML = park.LocationName;
    divCardBody.appendChild(h5Name);

    console.log(divCard);
}