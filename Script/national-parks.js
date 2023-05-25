

"use strict";

const locationDataDropDown = document.getElementById("locationDataDopdown");
const ParkDataDropDown = document.getElementById("ParkDataDopdown");
const divRowParks = document.getElementById("divRowParks");


window.onload = () => {
    showLocationDrops();
    showParkDrops();
    locationDataDropDown.onchange = dropdownforLocation;
    ParkDataDropDown.onchange = dropdownforParkType;
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
  // checks if the selectedParkType exists in the parkTypesArray. If it does, the park will be included in the ParkTypeFilter array.
  function dropdownforParkType() {
    let selectedParkType = ParkDataDropDown.value;
    const ParkTypeFilter = nationalParksArray.filter(park => park.LocationName.includes(selectedParkType));
    let parktypedetails = ParkTypeFilter;
    console.log(parktypedetails);
    divRowParks.innerHTML = "";
  
    if (parktypedetails.length > 0) {
      for (let park of parktypedetails) {
        createNationalParkcard(park);
      }
    }
  }
  

  
  
  
  function dropdownforLocation() {
    let selectedLocation = locationDataDropDown.value;
    const parksFilter = nationalParksArray.filter(park => park.State== selectedLocation);
    let parkDetails = parksFilter;
    console.log(parkDetails);
    divRowParks.innerHTML = "";
  
    if (parkDetails.length > 0) {
      for (let park of parkDetails) {
        createNationalParkcard(park);
      }
    }
  }




    
  
  
  function createNationalParkcard(park) {
    let divCol = document.createElement("div");
    divCol.className = "col-4 mx-2 my-3 row";
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

    let parkAdd = document.createElement("li");
    parkAdd.className = "parkAddy";
    parkAdd.innerHTML = park.Address;
    listId.appendChild(parkAdd);

    let parkCity = document.createElement("li");
    parkCity.className = "parkdaCity";
    parkCity.innerHTML = park.City;
    parkAdd.appendChild(parkCity);

    let parkState = document.createElement("li");
    parkState.className = "parkdaState";
    parkState.innerHTML = park.State;
    parkCity.appendChild(parkState);

    let parkZip = document.createElement("li");
    parkZip.className = "parkdaZip";
    parkZip.innerHTML = park.ZipCode;
    parkState.appendChild(parkZip);

    let parkPhone = document.createElement("li");
    parkPhone.className = "parkdaPhone";
    parkPhone.innerHTML = park.Phone;
    parkZip.appendChild(parkPhone);


  }
  
