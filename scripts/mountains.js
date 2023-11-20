//declare variables
const mountainsPageDropdown = document.querySelector("#mountainsPageDropdown");
const mountainName = document.querySelector("#mountainName");
const mountainElevation = document.querySelector("#mountainElevation");
const mountainEffort = document.querySelector("#mountainEffort");
const mountainDescription = document.querySelector("#mountainDescription");
const mountainLongitude = document.querySelector("#mountainLongitude");
const mountainLatitude = document.querySelector("#mountainLatitude");
const mountainsCard = document.querySelector(".mountainsCard");
const mountainsImage = document.querySelector("#mountainsImage");

let mountainDataArray = [
  mountainsPageDropdown,
  mountainName,
  mountainElevation,
  mountainEffort,
  mountainDescription,
  mountainLongitude,
  mountainLatitude,
];



//--------------------------------create functions----------------------------------//

function displayMountainData() {
  mountainsCard.style.display = "block";
  mountainsImage.src = "";
  mountainName.innerText = "";
  mountainElevation.innerText = "";
  mountainEffort.innerText = "";
  mountainDescription.innerText = "";
  mountainLongitude.innerText = "";
  mountainLatitude.innerText = "";
  for (const mountainData of mountainsArray) {
    if ((mountainsPageDropdown.value === mountainData.name)) {
      mountainsImage.src = `images/${mountainData.img}`;
      mountainName.innerText = mountainData.name;
      mountainElevation.innerText = mountainData.elevation;
      mountainEffort.innerText = mountainData.effort;
      mountainDescription.innerText = mountainData.desc;
      mountainLongitude.innerText = mountainData.coords.lng;
      mountainLatitude.innerText = mountainData.coords.lat;
    }
  }
}

function displayDrop() {
  for (const mountainData of mountainsArray) {
    let option = document.createElement("option");
    option.value = mountainData.name;
    option.innerText = mountainData.name;
    mountainsPageDropdown.appendChild(option);
  }
}
window.onload = displayDrop;
mountainsPageDropdown.onchange = displayMountainData;


