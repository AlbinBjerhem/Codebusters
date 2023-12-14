// buyPage.js
const setupBuyPage = () => {
  // Use a function to fetch and render property information
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
    // Call a function to dynamically render the property information for the buy page
    renderBuyPage(bostadData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const renderBuyPage = (bostadData) => {
  // Render your property information dynamically
  // You can customize this based on your actual property data structure
  const appContainer = document.getElementById('myApp');
  appContainer.innerHTML = '<h1>Buy Page</h1>';

  if (bostadData && Array.isArray(bostadData)) {
    bostadData.forEach(property => {
      const propertyElement = document.createElement('div');
      propertyElement.innerHTML = `<p>${property.street}, ${property.houseNumber}, ${property.city}</p>`;
      appContainer.appendChild(propertyElement);
    });
  } else {
    // Handle the case where bostadData is not an array or is undefined
    appContainer.innerHTML = '<p>No property data available</p>';
  }
};
export default setupBuyPage;
