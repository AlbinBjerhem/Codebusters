console.log('Before fetch');
fetch('http://localhost:3000/bostad')
  .then(response => response.json())
  .then(data => {
    console.log('Data fetched:', data);


  })
  .catch(error => console.error('Error fetching and sorting data:', error))


document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/bostad')
    .then(response => response.json())
    .then(data => {
      console.log('Data fetched:', data);

      const myAppElement = document.getElementById('myApp');
      const sortSelect = createSortDropdown();


      function createSortDropdown() {
        const dropdown = document.createElement('select');
        dropdown.id = 'sortSelect';

        const sortOptions = ['Boarea', 'Antal rum', 'Byggår'];

        sortOptions.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.textContent = option.charAt(0).toUpperCase() + option.slice(1);
          dropdown.appendChild(optionElement);
        });



        dropdown.addEventListener('change', sortData);

        const labelText = document.createElement('span');
        labelText.textContent = 'Sortera på:'

        document.body.appendChild(labelText);
        document.body.appendChild(dropdown);

        return dropdown;
      }


      function sortData() {
        const selectedCriterion = sortSelect.value;

        data.sort((a, b) => {
          if (a[selectedCriterion] < b[selectedCriterion]) return -1;
          if (a[selectedCriterion] > b[selectedCriterion]) return 1;
          return 0;
        });


        renderData();
      }


      function renderData() {
        myAppElement.innerHTML = '';

        const ulElement = document.createElement('ul');
        data.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `Boarea: ${item.area}, Antal rum : ${item.roomAmount}, Byggår: ${item.creationYear}, Adress: ${item.street}, ${item.houseNumber}, ${item.city}, ${item.zipCode}`;
          ulElement.appendChild(listItem);
        });

        myAppElement.appendChild(ulElement);

        console.log('Data displayed successfully.');
      }


      document.body.appendChild(sortSelect);


      sortData();
    })
    .catch(error => console.error('Error fetching data:', error));
});
