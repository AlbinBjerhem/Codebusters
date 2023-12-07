const listToFilter = [
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

formFilterCriteria.appendChild(filterChBx1Label);
formFilterCriteria.appendChild(filterChbx1);
formFilterCriteria.appendChild(filterSubmit);
sectionFilterCriteria.appendChild(formFilterCriteria);
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
  console.log("Filter Applied");
  let filteredList = []
  listToFilter.forEach(element => {
    if (filterChbx1.value == "Elevator" && element.elevator == true) {
      filteredList.push(element);
      console.log("filtered list");
      readListTest(filteredList)
    }
    // Fler Filter kan sättas här    
  });
  filteringList == true;
}

function presentResults(list) {
  for (let object of list) {
    
  }
}

//  function readListTest(list) /* denna function ska raderas sen*/{
//   for (let object of list) {
//     console.log(object);
//   }
// } 