const setupBuyPage = () => {
  fetchDataAndRenderBuyPage();
};

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
      detailsElement.innerHTML = `<p>Typ av bostad: ${property.typeOfProperty}</p>
                                         <p>Antal rum: ${property.roomAmount}</p>
                                         <p>Byggår: ${property.creationYear}</p>
                                         <p>Hiss: ${property.elevator}</p>
                                         <p>Parkering: ${property.parking}</p>
                                         <p>Innegård: ${property.yard}</p>
                                         <p>Förråd: ${property.storage}</p>
                                         <p>Vind: ${property.attic}</p>`;
      propertyElement.appendChild(detailsElement);

      propertyElement.addEventListener('click', () => {
        propertyElement.classList.toggle('selected');
      });

      appContainer.appendChild(propertyElement);
    });
  } else {
    appContainer.innerHTML = '<p>No property data available</p>';
  }
};

export default setupBuyPage;
