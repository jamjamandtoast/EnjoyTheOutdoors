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
  mountainRow.innerHTML = ""; // Clear existing content

  if (selectedMountain.length > 0) {
    for (let mountain of mountainsArray) {
      createMountainCard(mountain);
    }
  }
}

// this is where the output will be at
function createMountainCard(mountain) {
  let divCol = document.createElement("div");
  divCol.className = "col-4 mx-2 my-3 row";
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
  h5Name.appendChild(unOrderedList);

  let mounEle = document.createElement("li");
  mounEle.className = "mounEle";
  mounEle.innerHTML = mountain.elevation;
  unOrderedList.appendChild(mounEle);
};


/* //name: "Mt. Washington",
elevation: 6288,
effort: "Strenuous",
img: "Washington-StoryImage_2.jpg",
desc: "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.",
coords: {
    lat: 44.270403,
    lng: -71.303501 */
