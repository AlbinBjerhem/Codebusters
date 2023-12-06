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