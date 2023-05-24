

"use strict";

const locationDataDropDown = document.getElementById("locationDataDopdown");
const ParkDataDropDown = document.getElementById("ParkDataDopdown");
const divRowParks = document.getElementById("divRowParks");


window.onload = () => {
    showLocationDrops();
    showParkDrops();
    locationDataDropDown.onchange = dropdownforLocation;
  };
  
  function showLocationDrops() {
    for (let locationVariable of locationsArray) {
      let newOption = new Option(locationVariable, locationVariable);
      locationDataDropDown.appendChild(newOption);
    }
  }
  
  function showParkDrops() {
    for (let parkdataVariable of parkTypesArray) {
      let newOption = new Option(parkdataVariable);
      ParkDataDropDown.appendChild(newOption);
    }
  }
  
  function dropdownforLocation() {
    let selectedLocation = locationDataDropDown.value;
    const parksFilter = nationalParksArray.filter(park => park.State == selectedLocation);
    let parkDetails = parksFilter;
    console.log(parkDetails);
    divRowParks.innerHTML = "";
  
    if (parkDetails.length > 0) {
      for (let park of parkDetails) {
        createNationalParkcard(park);
      }
    }
  }
function dropdownforParkType(){

}

// Show or hide the card based on selection
    function toggleCardVisibility(show) {
    let divCards = document.getElementsByClassName("card");
   
    }
  
  
  function createNationalParkcard(park) {
    let divCol = document.createElement("div");
    divCol.className = "col";
    divRowParks.appendChild(divCol); 
  
    let divCard = document.createElement("div");
    divCard.className = "card";
    divCol.appendChild(divCard);
  
    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody);
  
    let h5Name = document.createElement("h5");
    h5Name.className = "card-title";
    h5Name.innerHTML = park.LocationName;
    divCardBody.appendChild(h5Name);

    let unOrderedList = document.createElement("ul");
    unOrderedList.className = "card-list";
    h5Name.appendChild(unOrderedList);
  
    let listId = document.createElement("li");
    listId.className = "parkId";
    listId.innerHTML = park.LocationID;
    unOrderedList.appendChild(listId);
  }
  
