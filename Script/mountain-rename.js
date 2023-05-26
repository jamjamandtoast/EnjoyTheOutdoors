"use strict";

const mountainlocationDataDopdown = document.getElementById("mountainlocationDataDopdown");
const mountainRow = document.getElementById("mountainRow");


window.onload = () => {
  showMountainNameFirst();
  mountainlocationDataDopdown.onchange = DisplayMountainInfo;
}

// this will load the function name only from mountainsArray
function showMountainNameFirst() {
  for (let mountainVariable of mountainsArray) {
    let newOption = new Option(mountainVariable.name);
    mountainlocationDataDopdown.appendChild(newOption);
  }
}

function DisplayMountainInfo() {
  let selectedMountain = mountainlocationDataDopdown.value;
  const mountainChoice = mountainsArray.find(mountain => mountain.name === selectedMountain); 
  console.log(mountainChoice);
  mountainRow.innerHTML = ""; // Clear existing content

  if (mountainChoice) {
    createMountainCard(mountainChoice);
  }
}

// this is where the output will be at
function createMountainCard(mountain) {
  let divCol = document.createElement("div");
  divCol.className = "col mx-2 my-3 row";
  mountainRow.appendChild(divCol);

  let divCard = document.createElement("div");
  divCard.className = "card";
  divCol.appendChild(divCard);

  let divCardBody = document.createElement("div");
  divCardBody.className = "card-body";
  divCard.appendChild(divCardBody);

  let h5Name = document.createElement("h5");
  h5Name.className = "card-title";
  h5Name.innerText = mountain.name;
  divCardBody.appendChild(h5Name);

  let unOrderedList = document.createElement("ul");
  unOrderedList.className = "card-list";
  divCardBody.appendChild(unOrderedList);

  let mounImg = document.createElement("img");
  mounImg.className = "mounImg";
  mounImg.src = "images/" + mountain.img;
  unOrderedList.appendChild(mounImg);

  let mounEle = document.createElement("li");
  mounEle.className = "mounEle";
  mounEle.innerHTML = "Elevation: " + mountain.elevation;
  unOrderedList.appendChild(mounEle);

  let mounEffort = document.createElement("li");
  mounEffort.className = "mounEffort";
  mounEffort.innerHTML = "Effort: " + mountain.effort;
  unOrderedList.appendChild(mounEffort);

  let mounDescription = document.createElement("li");
  mounDescription.className = "mounDescription";
  mounDescription.innerHTML = "Description: " + mountain.desc;
  unOrderedList.appendChild(mounDescription);
};



/* //name: "Mt. Washington",
elevation: 6288,
effort: "Strenuous",
img: "Washington-StoryImage_2.jpg",
desc: "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.",
coords: {
    lat: 44.270403,
    lng: -71.303501 */
