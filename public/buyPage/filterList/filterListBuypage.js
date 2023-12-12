//------------Karls Kod----------------
let listToFilter = [
  {
    adress: "1 hissvägen",
    elevator: true
  },
  {
    adress: "1 trappvägen",
    elevator: false
  }
]

const filteringList = false;

const sectionFilterCriteria = document.createElement("section");
sectionFilterCriteria.id = "filterCriteria";
const formFilterCriteria = document.createElement("form");
formFilterCriteria.id = "filterForm";
const filterChBx1Label = document.createElement("label")
filterChBx1Label.innerText = "Elevator Access: "
const filterChbx1 = document.createElement("input")
filterChbx1.id = "filterElevator"
filterChbx1.type = "checkbox";
filterChbx1.name = "Elevator Access";
filterChbx1.value = "Elevator";
const filterSubmit = document.createElement("input");
filterSubmit.type ="submit"
filterSubmit.value = "Filter List"

const tableFilterTable = document.createElement("table");
const tFTHead = document.createElement("thead");
let tFTBody = document.createElement("thead")
const tFTRowHead = document.createElement("tr");
const tFTProperty = document.createElement("th");
//const tFTMoreinfo = document.createElement("th");

tFTProperty.innerText = "Property name";
//tFTMoreinfo.innerText = "More Info";

tFTRowHead.appendChild(tFTProperty);
//tFTRowHead.appendChild(tFTMoreinfo);
tFTHead.appendChild(tFTRowHead);
tableFilterTable.appendChild(tFTHead);
tableFilterTable.appendChild(tFTBody);

for (const house of listToFilter) {
  const filteredRow = document.createElement("tr");
  const filterAdress = document.createElement("td");
  //const filterMoreInfo = document.createElement("td");

  filterAdress.innerText = house.adress;
  //filterMoreInfo.innerText = "More Info";

  filteredRow.appendChild(filterAdress);
  //filteredRow.appendChild(filterMoreInfo);
  tFTBody.appendChild(filteredRow);
}

formFilterCriteria.appendChild(filterChBx1Label);
formFilterCriteria.appendChild(filterChbx1);
formFilterCriteria.appendChild(filterSubmit);
sectionFilterCriteria.appendChild(formFilterCriteria);
sectionFilterCriteria.appendChild(tableFilterTable)

document.body.appendChild(sectionFilterCriteria);

document.querySelector("#filterCriteria").addEventListener("submit",applyFilter)



function changeElementVisibility(elementID) {
  if (elementID.style.display == "none") {
    elementID.style.display = "block";
  }
  else if (elementID.style.display == "block") {
    elementID.style.display = "none";
  }
  else {
    console.log(`cannot change the display type of ${elementID}`)
  }
}

function applyFilter(event) {
  event.preventDefault();
  let filteredList = listToFilter
  for (let i = 0; i < filteredList.length; i++)
  {
    if (filterChbx1.checked == true && filteredList[i].elevator == false) {
      filteredList.splice(i, 1);
      console.log("filtered list");
    }
    // lägg till en if sats för varje filter
  }
  filteringList == true;
  UpdateTable(filteredList);
  resetList();
}
 
function UpdateTable(list) {
  let newtFTBody = document.createElement("thead")
  for (let house of list) {
    const filteredRow = document.createElement("tr");
    const filterAdress = document.createElement("td");
    //const filterMoreInfo = document.createElement("td");

    filterAdress.innerText = house.adress;
    //filterMoreInfo.innerText = "More Info";

    filteredRow.appendChild(filterAdress);
    //filteredRow.appendChild(filterMoreInfo);
    newtFTBody.appendChild(filteredRow);
  }
  console.log("table updated");
  tableFilterTable.replaceChild(newtFTBody, tFTBody)
  tFTBody = newtFTBody;
}

function resetList() {
  listToFilter = [
    {
      adress: "1 hissvägen",
      elevator: true
    },
    {
      adress: "1 trappvägen",
      elevator: false
    }
  ]
}