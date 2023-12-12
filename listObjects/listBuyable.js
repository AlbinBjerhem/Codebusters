// Sample data
var numbers = [5, 2, 8, 1, 9];

// Function to create and display the sorted list
function createAndDisplayList() {
  // Get the reference to the <div> element with id "myApp"
  var myAppDiv = document.getElementById('myApp');

  // Create an <ul> element
  var ulElement = document.createElement('ul');

  // Iterate through the numbers and create <li> elements
  numbers.forEach(function (number) {
    var liElement = document.createElement('li');
    liElement.textContent = number;
    ulElement.appendChild(liElement);
  });

  // Append the <ul> element to the <div>
  myAppDiv.appendChild(ulElement);

  // Create a list of buttons dynamically
  createButtonList([
    { text: 'Sort Ascending', clickHandler: function () { sortList('asc'); } },
    { text: 'Sort Descending', clickHandler: function () { sortList('desc'); } }
  ]);
}

// Function to create a list of buttons dynamically
function createButtonList(buttons) {
  var ulElement = document.createElement('ul');

  buttons.forEach(function (button) {
    var liElement = document.createElement('li');
    var buttonElement = document.createElement('button');
    buttonElement.textContent = button.text;
    buttonElement.addEventListener('click', button.clickHandler);
    liElement.appendChild(buttonElement);
    ulElement.appendChild(liElement);
  });

  var myAppDiv = document.getElementById('myApp');
  myAppDiv.appendChild(ulElement);
}
// Function to sort the list and update the display
function sortList(order) {
  // Sort the array based on the order
  if (order === 'asc') {
    numbers.sort(function (a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    numbers.sort(function (a, b) {
      return b - a;
    });
  }

  // Clear the existing list
  var myAppDiv = document.getElementById('myApp');
  myAppDiv.innerHTML = '';

  // Call the function to create and display the sorted list
  createAndDisplayList();
}

// Call the function to create and display the initial list
createAndDisplayList();
// Sample data
var numbers = [5, 2, 8, 1, 9];

// Function to create and display the sorted list
function createAndDisplayList() {
  // Get the reference to the <div> element with id "myApp"
  var myAppDiv = document.getElementById('myApp');

  // Create an <ul> element
  var ulElement = document.createElement('ul');

  // Iterate through the numbers and create <li> elements
  numbers.forEach(function (number) {
    var liElement = document.createElement('li');
    liElement.textContent = number;
    ulElement.appendChild(liElement);
  });

  // Append the <ul> element to the <div>
  myAppDiv.appendChild(ulElement);

  // Create a dropdown with sorting options
  createDropdown();
}
// Function to create a dropdown with sorting options
function createDropdown() {
  var sortingOptions = [
    { value: 'asc', text: 'Sort Ascending' },
    { value: 'desc', text: 'Sort Descending' }
  ];

  var selectElement = document.createElement('select');

  sortingOptions.forEach(function (option) {
    var optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    selectElement.appendChild(optionElement);
  });

  var buttonElement = document.createElement('button');
  buttonElement.textContent = 'Sort';
  buttonElement.addEventListener('click', function () {
    var selectedOption = selectElement.value;
    sortList(selectedOption);
  });

  var myAppDiv = document.getElementById('myApp');
  myAppDiv.appendChild(selectElement);
  myAppDiv.appendChild(buttonElement);
}

// Function to sort the list and update the display
function sortList(order) {
  // Sort the array based on the order
  if (order === 'asc') {
    numbers.sort(function (a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    numbers.sort(function (a, b) {
      return b - a;
    });
  }

  // Clear the existing list
  var myAppDiv = document.getElementById('myApp');
  myAppDiv.innerHTML = '';

  // Call the function to create and display the sorted list
  createAndDisplayList();
}

// Call the function to create and display the initial list
createAndDisplayList();