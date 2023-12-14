console.log('Before fetch');
fetch('http://localhost:3000/bostad')
  .then(response => response.json())
  .then(data => {
    console.log('Data fetched:', data);
  })
  .catch(error => console.error('Error fetching and sorting data:', error));

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

        const sortOptions = [];

        sortOptions.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.textContent = option.charAt(0).toUpperCase() + option.slice(1);
          dropdown.appendChild(optionElement);
        });

        const antalRumOptions = ['Antal rum - högt till lågt', 'Antal rum - lågt till högt'];

        antalRumOptions.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = 'antalRum';
          optionElement.textContent = option;
          dropdown.appendChild(optionElement);
        });

        const byggArOptions = ['Byggår - nytt till gammalt', 'Byggår - gammalt till nytt'];

        byggArOptions.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = 'byggAr';
          optionElement.textContent = option;
          dropdown.appendChild(optionElement);
        });

        const boareaOptions = ['Boarea - stor till liten', 'Boarea - liten till stor'];

        boareaOptions.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = 'boarea';
          optionElement.textContent = option;
          dropdown.appendChild(optionElement);
        });

        dropdown.addEventListener('change', sortData);

        const labelText = document.createElement('span');
        labelText.textContent = 'Sortera på:';
        document.body.appendChild(labelText);
        document.body.appendChild(dropdown);

        return dropdown;
      }

      function sortData() {
        const selectedCriterion = sortSelect.value;

        if (selectedCriterion === 'antalRum') {
          if (sortSelect.selectedIndex === 3) {
            data.sort((a, b) => b.roomAmount - a.roomAmount);
          } else {
            data.sort((a, b) => a.roomAmount - b.roomAmount);
          }
        } else if (selectedCriterion === 'byggAr') {
          if (sortSelect.selectedIndex === 2) {
            data.sort((a, b) => a.creationYear - b.creationYear);
          } else {
            data.sort((a, b) => b.creationYear - a.creationYear);
          }
        } else if (selectedCriterion === 'boarea') {
          if (sortSelect.selectedIndex === 5) {
            data.sort((a, b) => a.area - b.area);
          } else {
            data.sort((a, b) => b.area - a.area);
          }
        } else {
          data.sort((a, b) => {
            if (a[selectedCriterion] < b[selectedCriterion]) return -1;
            if (a[selectedCriterion] > b[selectedCriterion]) return 1;
            return 0;
          });
        }

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
