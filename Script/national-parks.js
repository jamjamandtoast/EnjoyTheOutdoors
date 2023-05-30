"use strict";

//load element
const locationDataDropDown = document.getElementById("locationDataDopdown");

const ParkDataDropDown = document.getElementById("ParkDataDopdown");

const divRowParks = document.getElementById("divRowParks");

const OptionLocation = document.getElementById("OptionLocation");

const OptionPark = document.getElementById("OptionPark");

const selectLocationType = document.getElementById("selectLocationType");

const selectParkType = document.getElementById("selectParkType");

// load function to window!! 
window.onload = () => {
    showLocationDrops(); // Call the function to populate location dropdown options
    showParkDrops(); // Call the function to populate park dropdown options
    locationDataDropDown.onchange = dropdownforLocation;// Assign the function to the onchange event of locationDataDropDown
    ParkDataDropDown.onchange = dropdownforParkType; //// Assign the function to the onchange event of ParkDataDropDown
  

    
    OptionLocation.onchange = onOptionLocation;
    OptionPark.onchange = onOptionPark;
  };

// radio functions here ------------------

// Handle the change event for the OptionLocation radio button
  function onOptionLocation() {
    //checks if optionlocation radio button is checked
    if (OptionLocation.checked) {
    //if clocation option selected..
      selectLocationType.style.display = "block"; // makes visivle
      selectParkType.style.display = "none"; // Hide the selectParkType element
      divRowParks.innerHTML = ""; //clear 

      locationDataDropDown.selectedIndex = 0; // Reset the selected index of locationDataDropDown
    } 
    else {
      //location not checked
      selectLocationType.style.display = "block"; //selectLocationtype will not be visible
    }
  }
// Handle the change event for the OptionPark radio button
  function onOptionPark() {

    if (OptionPark.checked) {
      selectParkType.style.display = "block";
      selectLocationType.style.display = "none";
      divRowParks.innerHTML = "";
     ParkDataDropDown.selectedIndex = 0;
    } 
    else {
      selectParkType.style.display = "none";
    }
  }
  

  // responsible for populating locationdropdown
  function showLocationDrops() {

    //comments for me: function loops through locationarray, creates option for each element
  
    for (let locationVariable of locationsArray) {
      let newOption = new Option(locationVariable, locationVariable); // Create a new option element with the locationVariable 
      locationDataDropDown.appendChild(newOption); // Append  new option element to locationDataDropDown
    }
    }
  
  // responsible for populating parkdatadropdown
  function showParkDrops() {

  //comments for me: function loops throguh parksarray, creates option for each eleemnt

    for (let parkdataVariable of parkTypesArray) {
      let newOption = new Option(parkdataVariable); // create new option with parkdatavarible
      ParkDataDropDown.appendChild(newOption);// apend the new option to parkdatadropdown
    }
  }

  // checks if the selectedParkType exists in the parkTypesArray. If it does, the park will be included in the ParkTypeFilter array.
  function dropdownforParkType() {
    let selectedParkType = ParkDataDropDown.value;
    // Filter the nationalParksArray based on selectedLocation
    const ParkTypeFilter = nationalParksArray.filter(park => park.LocationName.includes(selectedParkType));
    // Assign the filtered parks to the parkDetails 
    let parktypedetails = ParkTypeFilter;
    console.log(parktypedetails);

    // Clear the innerHTML of the divRowParks element
    divRowParks.innerHTML = "";
  
     // If there are parkDetails available
    if (parktypedetails.length > 0) {
      // Create a national park card for each park
      for (let park of parktypedetails) {
        createNationalParkcard(park);
      }
    }
  }
  

  
  
  // Filter and display parks based on the selected location

  function dropdownforLocation() {
    let selectedLocation = locationDataDropDown.value;

    // Filter the nationalParksArray based on the selectedLocation
    const parksFilter = nationalParksArray.filter(park => park.State== selectedLocation);

    // Assign the filtered parks to the parkDetails variable
    let parkDetails = parksFilter;
    console.log(parkDetails);

    // Clear the innerHTML of the divRowParks element
    divRowParks.innerHTML = "";

  // If there are parkDetails available
    if (parkDetails.length > 0) {
      for (let park of parkDetails) {
    // Create a national park card for each park
      createNationalParkcard(park);
      }
    }
  }




    
  
  // create card here 


  function createNationalParkcard(park) {
    // creeate div
    let divCol = document.createElement("div");
    divCol.className = "col-4 mx-2 my-3 row";
    divRowParks.appendChild(divCol); // Append the column div to the parent container (divRowParks)
  // Create a div element for the card
    let divCard = document.createElement("div");
    divCard.className = "card";
    divCol.appendChild(divCard); // Append the card div to the column div

  // Create a div element for the card body
    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody); // Append the card body div to the card div

  // Create an h5 element for the card title
    let h5Name = document.createElement("h5");
    h5Name.className = "card-title";
    h5Name.innerHTML = park.LocationName; // Set the innerHTML of the h5 element to the park's LocationName
    divCardBody.appendChild(h5Name);  // Append the h5 element to the card body div

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
  