var years = [2023, 1990, 1980];

function displayList(dataList, containerId) {
  var displayElement = document.getElementById(containerId);
  displayElement.innerHTML = "";

  dataList.forEach(function (data) {
    var listItem = document.createElement("div");
    listItem.textContent = data;
    displayElement.appendChild(listItem);
  });
}

function sortList(sortOrder, containerId) {
  var sortedYears = years.slice();

  if (sortOrder === "asc") {
    sortedYears.sort((a, b) => a - b);
  } else {
    sortedYears.sort((a, b) => b - a);
  }

  displayList(sortedYears, containerId);
}

function updateLists() {
  var sortOrderDesc = document.getElementById("sortOrderDesc").value;
  var sortOrderNewest = document.getElementById("sortOrderNewest").value;
  var sortOrderAsc = document.getElementById("sortOrderAsc").value;

  sortList(sortOrderDesc, "descList");
  sortList(sortOrderNewest, "newestList");
  sortList(sortOrderAsc, "ascList");
}

// Initiera listorna vid sidöppning
updateLists();

