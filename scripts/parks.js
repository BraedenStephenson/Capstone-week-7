"use strict";
//GET HTML ELEMENTS
const mountainsPageDropdown = document.querySelector("#mountainsPageDropdown");
const parkSearcherParkTypeTable = document.querySelector("#parkSearcherParkTypeTable");
const nationalParkSearherForm = document.querySelector("#nationalParkSearherForm");
const locationTypeRadioButton = document.querySelector("#locationTypeRadioButton");
const parkTypeRadioButton = document.querySelector("#parkTypeRadioButton");
const mountainPageCard = document.querySelector("#mountainPageCard");
const nationalParkSearcherDropdownList = document.querySelector("#nationalParkSearcherDropdownList");
const parkByTypeDrop = document.querySelector("#ParkByTypeDropdown");
const parkTableDisplay = document.querySelector("#parkTableDisplay");
const parkType = document.querySelector(".park-type");
const parkLocation = document.querySelector(".park-location");

//CREATE FUNCTIONS

//--------------------------------------------------------//
function loadLocationList() {
  parkLocation.style.display = "block";
  parkType.style.display = "none";

  locationTypeRadioButton.checked = true;
  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.textContent = location;
    nationalParkSearcherDropdownList.appendChild(option);
  }
}
locationTypeRadioButton.onclick = loadLocationList;
loadLocationList();

//--------------------------------------------------------//

function loadParksByLocationTable() {
  parkTableDisplay.innerHTML = "";
  let location = nationalParkSearcherDropdownList.value;
  for (const nationalPark of nationalParksArray) {
    if (nationalPark.State == location) {
      let row = parkTableDisplay.insertRow();

      let cell1 = row.insertCell();
      cell1.innerText = nationalPark.LocationName;

      let cell2 = row.insertCell();
      cell2.innerText = nationalPark.Address;

      let cell3 = row.insertCell();
      cell3.innerText = nationalPark.City;

      let cell4 = row.insertCell();
      cell4.innerText = nationalPark.State;

      let cell5 = row.insertCell();
      cell5.innerText = nationalPark.ZipCode;

      let cell6 = row.insertCell();
      cell6.innerText = nationalPark.Phone;

      let cell7 = row.insertCell();
      cell7.innerText = nationalPark.Fax;

      let cell8 = row.insertCell();
      cell8.innerText = nationalPark.Latitude;

      let cell9 = row.insertCell();
      cell9.innerText = nationalPark.Longitude;
    }
  }
}
nationalParkSearcherDropdownList.onchange = loadParksByLocationTable;

//--------------------------------------------------------//

function loadParkTypeList() {
  parkLocation.style.display = "none";
  parkType.style.display = "block";

  for (const park of parkTypesArray) {
    let option = new Option(park);
    option.value = park;

    parkByTypeDrop.appendChild(option);
  }
}
parkTypeRadioButton.onclick = loadParkTypeList;


//-------------------------------------------------------//

function loadParkTypeTable() {
  parkTableDisplay.innerHTML = "";
  let location = parkByTypeDrop.value;
  const selectedType = parkTypesArray.find((type) => location.includes(type));

  for (const nationalPark of nationalParksArray) {
    const islandState = location == "Rhode Island" || location == "Virgin Islands";
    if (nationalPark.State == location || (nationalPark.LocationName.includes(selectedType) && !islandState)) {
      let row = parkTableDisplay.insertRow(-1);

      let cell1 = row.insertCell(0);
      cell1.innerText = nationalPark.LocationName;

      let cell2 = row.insertCell(1);
      cell2.innerText = nationalPark.Address;

      let cell3 = row.insertCell(2);
      cell3.innerText = nationalPark.City;

      let cell4 = row.insertCell(3);
      cell4.innerText = nationalPark.State;

      let cell5 = row.insertCell(4);
      cell5.innerText = nationalPark.ZipCode;

      let cell6 = row.insertCell(5);
      cell6.innerText = nationalPark.Phone;

      let cell7 = row.insertCell(6);
      cell7.innerText = nationalPark.Fax;

      let cell8 = row.insertCell(7);
      cell8.innerText = nationalPark.Latitude;

      let cell9 = row.insertCell(8);
      cell9.innerText = nationalPark.Longitude;
    }
  }
}

parkByTypeDrop.onchange = function () {
  parkTableDisplay.innerHTML = "";
  loadParkTypeTable();
};

// -------------------------------------------------------//
