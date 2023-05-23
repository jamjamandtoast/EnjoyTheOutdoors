"use strict";

const mountainlocationDataDopdown = document.getElementById("mountainlocationDataDopdown");

window.onload = () => {
    showmountainnameFirst();
}



// this will load the function name only from mountianarray
function showmountainnameFirst(){
    for (let mountainVariable of mountainsArray) {
        let newOption = new Option(mountainVariable.name);
        mountainlocationDataDopdown.appendChild(newOption);
    }
}
// this is where the output will be at