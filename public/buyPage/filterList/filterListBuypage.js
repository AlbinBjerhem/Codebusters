export default function filterList() {
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
  const filterChBx2Label = document.createElement("label")
  filterChBx2Label.innerText = "Garage Access: "
  const filterChbx2 = document.createElement("input")
  filterChbx2.id = "filterGarage"
  filterChbx2.type = "checkbox";
  filterChbx2.name = "Garage Access";
  filterChbx2.value = "Garage";
  const filterChBx3Label = document.createElement("label")
  filterChBx3Label.innerText = "Garden Access: "
  const filterChbx3 = document.createElement("input")
  filterChbx3.id = "filterGarden"
  filterChbx3.type = "checkbox";
  filterChbx3.name = "Garden Access";
  filterChbx3.value = "Garden";
  const filterChBx4Label = document.createElement("label")
  filterChBx4Label.innerText = "Storage Access: "
  const filterChbx4 = document.createElement("input")
  filterChbx4.id = "filterStorage"
  filterChbx4.type = "checkbox";
  filterChbx4.name = "Storage Access";
  filterChbx4.value = "Storage";
  const filterChBx5Label = document.createElement("label")
  filterChBx5Label.innerText = "Attic Storage Access: "
  const filterChbx5 = document.createElement("input")
  filterChbx5.id = "filterAtticStorage"
  filterChbx5.type = "checkbox";
  filterChbx5.name = "Attic Storage Access";
  filterChbx5.value = "AtticStorage";
  const filterSubmit = document.createElement("input");
  filterSubmit.type = "submit"
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
  sectionFilterCriteria.appendChild(tableFilterTable)
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
}

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


 
