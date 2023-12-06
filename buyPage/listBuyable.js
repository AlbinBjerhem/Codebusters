
var years = [2023, 1990, 1980];

function displayYears(dataList) {
  var displayElement = document.getElementById("myAppList");
  displayElement.innerHTML = "";

  dataList.forEach(function (data) {
    var listItem = document.createElement("div");
    listItem.textContent = data;
    displayElement.appendChild(listItem);
  });
}

function sortList() {
  var sortOrder = document.getElementById("sortOrder").value;


  var sortedYears = years.slice();

  if (sortOrder === "asc") {
    sortedYears.sort((a, b) => a - b);
  } else {
    sortedYears.sort((a, b) => b - a);
  }


  displayYears(sortedYears);

  console.log("Listan sorterad:", sortedYears);
}

displayYears(years);
sortList();
