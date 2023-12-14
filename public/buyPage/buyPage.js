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

export default setupBuyPage;