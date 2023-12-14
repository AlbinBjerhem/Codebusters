const setupBuyPage = () => {
  fetchDataAndRenderBuyPage();
};

let currentSelectedProperty = null;

const fetchDataAndRenderBuyPage = async () => {
  try {
    const response = await fetch('http://localhost:3000/bostad');
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const bostadData = data;
    renderBuyPage(bostadData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const renderBuyPage = (bostadData) => {
  
  const appContainer = document.getElementById('myApp');
  appContainer.innerHTML = '<h1>Våra listade bostäder för försäljning!</h1>';
  appContainer.appendChild(createFilterForm());  
    if (bostadData && Array.isArray(bostadData)) {
    bostadData.forEach(property => {
      const propertyElement = document.createElement('div');
      propertyElement.classList.add('property');
      propertyElement.innerHTML = `<p>${property.street}, ${property.houseNumber}, ${property.city}, ${property.zipCode}</p>`;

      const detailsElement = document.createElement('div');
      detailsElement.classList.add('details');
      detailsElement.innerHTML = `
        <div class="property-details">
          <p>Typ av bostad: ${property.typeOfProperty}</p>
          <p>Antal rum: ${property.roomAmount}</p>
          <p>Byggår: ${property.creationYear}</p>
          <p>Hiss: ${property.elevator}</p>
        </div>
        <div class="property-details">
          <p>Parkering: ${property.parking}</p>
          <p>Innegård: ${property.yard}</p>
          <p>Förråd: ${property.storage}</p>
          <p>Vind: ${property.attic}</p>
        </div>
      `;
      propertyElement.appendChild(detailsElement);

      const interestButton = document.createElement('button');
      interestButton.textContent = 'Intresseanmälan';
      interestButton.addEventListener('click', () => {
        showInterestForm(property);
      });

      interestButton.style.display = 'none';

      propertyElement.appendChild(interestButton);

      propertyElement.addEventListener('click', () => {
        if (currentSelectedProperty) {
          currentSelectedProperty.classList.remove('selected');

          currentSelectedProperty.querySelector('button').style.display = 'none';
        }

        propertyElement.classList.toggle('selected');

        propertyElement.querySelector('button').style.display = 'block';

        currentSelectedProperty = propertyElement;
      });

      appContainer.appendChild(propertyElement);
    });
  } else {
    appContainer.innerHTML = '<p>No property data available</p>';
  }
};

const showInterestForm = (property) => {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const interestForm = document.createElement('form');
  interestForm.innerHTML = `
    <div>
      <label for="name">Namn:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="phone">Telefon:</label>
      <input type="tel" id="phone" name="phone" required>
    </div>
    <button type="submit">Skicka in!</button>
    <button type="button" id="cancelButton">Avbryt</button>
  `;

  interestForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;

    updatePropertyInfo(property, { name, email, phone });

    modalContainer.remove();
  });

  const cancelButton = interestForm.querySelector('#cancelButton');
  cancelButton.addEventListener('click', () => {
    modalContainer.remove();
  });

  modalContainer.appendChild(interestForm);

  document.body.appendChild(modalContainer);
};


const updatePropertyInfo = async (property, newInfo) => {
  const newInterest = {
    name: newInfo.name,
    email: newInfo.email,
    phone: newInfo.phone
  };

  if (!property.interests) {
    property.interests = [];
  }

  property.interests.push(newInterest);

  try {
    const response = await fetch(`http://localhost:3000/bostad/${property.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(property),
    });

    if (!response.ok) {
      throw new Error(`Failed to update property data: ${response.status} ${response.statusText}`);
    }

    console.log('Updated property data:', property);
  } catch (error) {
    console.error('Error updating property data:', error);
  }
};
//--------Karls Kod----------
// Filter function
function applyFilter(event) {
  event.preventDefault();
  let filteredList = bostadData
  for (let i = 0; i < filteredList.length; i++) {
    if (filterChbx1.checked == true && filteredList[i].elevator == false) {
      filteredList.splice(i, 1);
      console.log("filtered list");
    }
    if (filterChbx2.checked == true && filteredList[i].parking == false) {
      filteredList.splice(i, 1);
      console.log("filtered list");
    }
    if (filterChbx3.checked == true && filteredList[i].yard == false) {
      filteredList.splice(i, 1);
      console.log("filtered list");
    }
    if (filterChbx4.checked == true && filteredList[i].storage == false) {
      filteredList.splice(i, 1);
      console.log("filtered list");
    }
    if (filterChbx5.checked == true && filteredList[i].attic == false) {
      filteredList.splice(i, 1);
      console.log("filtered list");
    }
    // if (Number(filterPriceInput) < filteredList[i].price) {
    //   filteredList.splice(i, 1);
    //   console.log("filtered list");
    //}
    // lägg till en if sats för varje filter
    // se till att kraven som jämförs är rätt
  }
  UpdateTable(filteredList);
  resetList();
}
//updatera innehållet
function UpdateTable(list) {
  list.forEach(property => {
    const propertyElement = document.createElement('div');
    propertyElement.classList.add('property');
    propertyElement.innerHTML = `<p>${property.street}, ${property.houseNumber}, ${property.city}, ${property.zipCode}</p>`;

    const detailsElement = document.createElement('div');
    detailsElement.classList.add('details');
    detailsElement.innerHTML = `
        <div class="property-details">
          <p>Typ av bostad: ${property.typeOfProperty}</p>
          <p>Antal rum: ${property.roomAmount}</p>
          <p>Byggår: ${property.creationYear}</p>
          <p>Hiss: ${property.elevator}</p>
        </div>
        <div class="property-details">
          <p>Parkering: ${property.parking}</p>
          <p>Innegård: ${property.yard}</p>
          <p>Förråd: ${property.storage}</p>
          <p>Vind: ${property.attic}</p>
        </div>
      `;
    propertyElement.appendChild(detailsElement);

    const interestButton = document.createElement('button');
    interestButton.textContent = 'Intresseanmälan';
    interestButton.addEventListener('click', () => {
      showInterestForm(property);
    });

    interestButton.style.display = 'none';

    propertyElement.appendChild(interestButton);

    propertyElement.addEventListener('click', () => {
      if (currentSelectedProperty) {
        currentSelectedProperty.classList.remove('selected');

        currentSelectedProperty.querySelector('button').style.display = 'none';
      }

      propertyElement.classList.toggle('selected');

      propertyElement.querySelector('button').style.display = 'block';

      currentSelectedProperty = propertyElement;
    });

    appContainer.appendChild(propertyElement);
  });
}

function resetList() {
  listToFilter = []
}

function createFilterForm() {
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
  filterChBx2Label.innerText = "Parking Access: "
  const filterChbx2 = document.createElement("input")
  filterChbx2.id = "filterParking"
  filterChbx2.type = "checkbox";
  filterChbx2.name = "Parking Access";
  filterChbx2.value = "Parking";
  const filterChBx3Label = document.createElement("label")
  filterChBx3Label.innerText = "Yard Access: "
  const filterChbx3 = document.createElement("input")
  filterChbx3.id = "filterYard"
  filterChbx3.type = "checkbox";
  filterChbx3.name = "Yard Access";
  filterChbx3.value = "Yard";
  const filterChBx4Label = document.createElement("label")
  filterChBx4Label.innerText = "Storage Access: "
  const filterChbx4 = document.createElement("input")
  filterChbx4.id = "filterStorage"
  filterChbx4.type = "checkbox";
  filterChbx4.name = "Storage Access";
  filterChbx4.value = "Storage";
  const filterChBx5Label = document.createElement("label")
  filterChBx5Label.innerText = "Attic Access: "
  const filterChbx5 = document.createElement("input")
  filterChbx5.id = "filterAttic";
  filterChbx5.type = "checkbox";
  filterChbx5.name = "Attic Access";
  filterChbx5.value = "Attic";
  const filterPriceInputLabel = document.createElement("label")
  filterPriceInputLabel.innerText = "Highest Price";
  const filterPriceInput = document.createElement("input");
  filterPriceInput.id = "filterPrice";
  filterPriceInput.type = "text";
  filterPriceInput.name = "Filter Price";
  filterPriceInput.value = "MaxPrice"
  const filterSubmit = document.createElement("input");
  filterSubmit.type = "submit"
  filterSubmit.value = "Filter List"

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
  sectionFilterCriteria.addEventListener("submit", applyFilter)
  return formFilterCriteria
}
//--------Karls Kod slut----------

export default setupBuyPage;