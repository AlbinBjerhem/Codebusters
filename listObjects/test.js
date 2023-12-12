console.log('Before fetch');
fetch('http://localhost:3000/bostad')
  .then(response => response.json())
  .then(data => {
    console.log('Data fetched:', data);

    // ... rest of the code

  })
  .catch(error => console.error('Error fetching and sorting data:', error))

/*document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/bostad')
    .then(response => response.json())
    .then(data => {
      console.log('Data fetched:', data);

      // Sort data by a property (e.g., name)
      data.sort((a, b) => a.street.localeCompare(b.street));

      // Display sorted data
      const myAppElement = document.getElementById('myApp');
      myAppElement.innerHTML = '';

      const ulElement = document.createElement('ul');
      data.forEach(item => {
        const listItem = document.createElement('li');
        // Adjust this based on what information you want to display
        listItem.textContent = `${item.street}, ${item.houseNumber}, ${item.city}, ${item.zipCode}`;
        ulElement.appendChild(listItem);
      });

      myAppElement.appendChild(ulElement);

      console.log('Data displayed successfully.');

    })
    .catch(error => console.error('Error fetching and sorting data:', error));
});


document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/bostad')
    .then(response => response.json())
    .then(data => {
      console.log('Data fetched:', data);

      // Sort data by multiple properties (area, roomAmount, creationYear)
      data.sort((a, b) => {
        // Compare by area
        if (a.area !== b.area) {
          return a.area - b.area;
        }

        // If areas are equal, compare by roomAmount
        if (a.roomAmount !== b.roomAmount) {
          return parseFloat(a.roomAmount) - parseFloat(b.roomAmount);
        }

        // If roomAmounts are equal, compare by creationYear
        return parseInt(a.creationYear, 10) - parseInt(b.creationYear, 10);
      });

      // Display sorted data
      const myAppElement = document.getElementById('myApp');
      myAppElement.innerHTML = '';

      const ulElement = document.createElement('ul');
      data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.street}, ${item.houseNumber}, ${item.city}, ${item.zipCode}`;
        ulElement.appendChild(listItem);
      });

      myAppElement.appendChild(ulElement);

      console.log('Data displayed successfully.');

    })
    .catch(error => console.error('Error fetching and sorting data:', error));
});


*/

/* document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/bostad')
    .then(response => response.json())
    .then(data => {
      console.log('Data fetched:', data);

      const myAppElement = document.getElementById('myApp');
      const sortSelect = createSortDropdown();

      // Function to create the dropdown and sort the data
      function createSortDropdown() {
        const dropdown = document.createElement('select');
        dropdown.id = 'sortSelect';

        const sortOptions = ['area', 'roomAmount', 'creationYear'];

        sortOptions.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.textContent = option.charAt(0).toUpperCase() + option.slice(1);
          dropdown.appendChild(optionElement);
        });

        dropdown.addEventListener('change', sortData);

        return dropdown;
      }
      // Function to sort data based on the selected criterion
      function sortData() {
        const selectedCriterion = sortSelect.value;

        // Sort data based on the selected criterion
        data.sort((a, b) => {
          if (a[selectedCriterion] < b[selectedCriterion]) return -1;
          if (a[selectedCriterion] > b[selectedCriterion]) return 1;
          return 0;
        });

        // Display sorted data
        myAppElement.innerHTML = '';

        const ulElement = document.createElement('ul');
        data.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.street}, ${item.houseNumber}, ${item.city}, ${item.zipCode}`;
          ulElement.appendChild(listItem);
        });

        myAppElement.appendChild(ulElement);

        console.log('Data displayed successfully.');
      }

      // Append the dropdown to the page
      document.body.appendChild(sortSelect);

      // Initial display (you may choose a default sorting criterion)
      sortData();
    })
    .catch(error => console.error('Error fetching data:', error));
});

*/

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/bostad')
    .then(response => response.json())
    .then(data => {
      console.log('Data fetched:', data);

      const myAppElement = document.getElementById('myApp');
      const sortSelect = createSortDropdown();

      // Function to create the dropdown and sort the data
      function createSortDropdown() {
        const dropdown = document.createElement('select');
        dropdown.id = 'sortSelect';

        const sortOptions = ['area', 'roomAmount', 'creationYear'];

        sortOptions.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.textContent = option.charAt(0).toUpperCase() + option.slice(1);
          dropdown.appendChild(optionElement);
        });

        dropdown.addEventListener('change', sortData);

        return dropdown;
      }

      // Function to sort data based on the selected criterion
      function sortData() {
        const selectedCriterion = sortSelect.value;
        // Sort data based on the selected criterion
        data.sort((a, b) => {
          if (a[selectedCriterion] < b[selectedCriterion]) return -1;
          if (a[selectedCriterion] > b[selectedCriterion]) return 1;
          return 0;
        });

        // Display sorted data
        renderData();
      }

      // Function to render the sorted data
      function renderData() {
        myAppElement.innerHTML = '';

        const ulElement = document.createElement('ul');
        data.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `Area: ${item.area}, Room Amount: ${item.roomAmount}, CreationYear: ${item.creationYear}, Address: ${item.street}, ${item.houseNumber}, ${item.city}, ${item.zipCode}`;
          ulElement.appendChild(listItem);
        });

        myAppElement.appendChild(ulElement);

        console.log('Data displayed successfully.');
      }

      // Append the dropdown to the page
      document.body.appendChild(sortSelect);

      // Initial display (you may choose a default sorting criterion)
      sortData();
    })
    .catch(error => console.error('Error fetching data:', error));
});
