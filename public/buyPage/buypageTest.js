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


const tableFilterTable = document.createElement("table");
const tFTHead = document.createElement("thead");
let tFTBody = document.createElement("thead")
const tFTRowHead = document.createElement("tr");
const tFTProperty = document.createElement("th");
tFTProperty.innerText = "Property name";


tFTRowHead.appendChild(tFTProperty);
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
formFilterCriteria.appendChild(filterChBx2Label);
formFilterCriteria.appendChild(filterChbx2);
formFilterCriteria.appendChild(filterChBx3Label);
formFilterCriteria.appendChild(filterChbx3);
formFilterCriteria.appendChild(filterChBx4Label);
formFilterCriteria.appendChild(filterChbx4);
formFilterCriteria.appendChild(filterChBx5Label);
formFilterCriteria.appendChild(filterChbx5);
formFilterCriteria.appendChild(filterSubmit);
sectionFilterCriteria.appendChild(formFilterCriteria);
sectionFilterCriteria.appendChild(tableFilterTable);

function applyFilter(event) {
  event.preventDefault();
  let filteredList = listToFilter
  for (let i = 0; i < filteredList.length; i++) {
    if (filterChbx1.checked == true && filteredList[i].elevator == false) {
      filteredList.splice(i, 1);
      console.log("filtered list");
    }
    if (filterChbx2.checked == true && filteredList[i].garage == false) {
      filteredList.splice(i, 1);
      console.log("filtered list");
    }
    if (filterChbx3.checked == true && filteredList[i].garden == false) {
      filteredList.splice(i, 1);
      console.log("filtered list");
    }
    if (filterChbx4.checked == true && filteredList[i].storage == false) {
      filteredList.splice(i, 1);
      console.log("filtered list");
    }
    if (filterChbx5.checked == true && filteredList[i].atticstorage == false) {
      filteredList.splice(i, 1);
      console.log("filtered list");
    }
    // lägg till en if sats för varje filter
    // se till att kraven som jämförs är rätt
  }
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

document.body.appendChild(sectionFilterCriteria);
sectionFilterCriteria.addEventListener("submit", applyFilter)
//------ slut på Karls kod-------

