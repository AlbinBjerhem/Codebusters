
import { getAllBostader } from "../servertest.js"
import { getUsers } from "../servertest.js";

let loggedIn = false;
let currentSelectedProperty = null;

export default function setupLogInPage() {



  const tempUsersPromise = getUsers();
  const initializeLoginPage = async () => {
    try {
      const tempUsers = await tempUsersPromise;

    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  initializeLoginPage();


  const mainList = getAllBostader();
  sortLists(mainList);

  const tempHousesForSale = [

  ]

  const tempHousesSuggested = [

  ]

  let currentUser = "";
  // Login Sida
  const sectionLogin = document.createElement("section");
  sectionLogin.id = "loginEstateAgent";
  const sectionloginH2 = document.createElement("h2");
  sectionloginH2.innerText = "Code Busters Mäklare Login";
  sectionLogin.appendChild(sectionloginH2);

  const loginForm = document.createElement("form");
  loginForm.id = "loginForm";
  const loginFormUsernameLabel = document.createElement("label");
  loginFormUsernameLabel.innerText = "Username: ";
  const loginUsernameInput = document.createElement("input");
  loginUsernameInput.type = "text";
  loginUsernameInput.id = "usernameInput";
  loginUsernameInput.required = true;
  const loginFormPasswordLabel = document.createElement("label");
  loginFormPasswordLabel.innerText = "Password: ";
  const loginPasswordInput = document.createElement("input");
  loginPasswordInput.type = "text";
  loginPasswordInput.id = "passwordInput";
  loginPasswordInput.required = true;
  const loginInputSubmit = document.createElement("input");
  loginInputSubmit.type = "submit";
  loginInputSubmit.value = "Log In";

  loginForm.appendChild(loginFormUsernameLabel);
  loginForm.appendChild(loginUsernameInput);
  loginForm.appendChild(loginFormPasswordLabel);
  loginForm.appendChild(loginPasswordInput);
  loginForm.appendChild(loginInputSubmit);
  sectionLogin.appendChild(loginForm);
  document.body.appendChild(sectionLogin);

  document.querySelector("#loginForm").addEventListener("submit", userLogin)

  // In-Loggad Sida
  const sectionLoggedIn = document.createElement("section");
  sectionLoggedIn.id = "sectionEstateAgent";
  const sectionLoggedInh2 = document.createElement("h2");
  sectionLoggedInh2.innerText = "hej"
  const logOutForm = document.createElement("form")
  logOutForm.id = "logOut"
  const logOut = document.createElement("input");
  logOut.type = "submit";
  logOut.value = "Log Out";

  // Föreslagna lägenheter/object
  const unclaimedPropertiesTable = document.createElement("table");
  const uPTHead = document.createElement("thead");
  const uPTBody = document.createElement("thead");
  const uPTRowHead = document.createElement("tr");
  const uPThAdress = document.createElement("th");
  const uPThInfo = document.createElement("th"); // Knapp för att få ut mer info?

  uPThAdress.innerText = "Property Adress"
  uPThInfo.innerText = "More Info"

  uPTRowHead.appendChild(uPThAdress);
  uPTRowHead.appendChild(uPThInfo);
  uPTHead.appendChild(uPTRowHead);
  unclaimedPropertiesTable.appendChild(uPTHead);
  unclaimedPropertiesTable.appendChild(uPTBody);


  logOutForm.appendChild(logOut)
  sectionLoggedIn.appendChild(logOutForm);
  document.body.appendChild(sectionLoggedIn);

  document.querySelector("#logOut").addEventListener("submit", userLogOut)
  sectionLoggedIn.style.display = "none";

  //Login Function
  async function userLogin(event) {
    event.preventDefault();
    const inputUsername = document.getElementById("usernameInput").value;
    const inputPassword = document.getElementById("passwordInput").value;

    try {
      const tempUsers = await tempUsersPromise;

      const loginCorrect = tempUsers.some(tempUser =>
        tempUser.password == inputPassword && tempUser.username == inputUsername);

      if (loginCorrect) {
        sectionLoggedIn.style.display = "block";
        sectionLogin.style.display = "none";
        currentUser = inputUsername;
        loggedIn = true;
        fetchDataAndRenderBuyPage();
      } else {
        console.log('Incorrect username or password');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  // accept Suggestion
  // function acceptSuggestedHouse(event) {
  //   event.preventDefault();
  //   const tempSuggestion = suggestedSelector.options[suggestedSelector.selectedIndex].value;
  //   const claimedProperty = findPropety(tempSuggestion);
  //   claimedProperty.Agent = currentUser;
  //   tempHousesForSale.push(claimedProperty);
  //   tempHousesSuggested.splice(suggestedSelector.selectedIndex, 1)
  //   console.log("did something")
  //   UpdateTables();
  //   /*Behöver göra om hur tabellen skapas så att den kan laddas om här  */
  // }

  function findPropety(searchAdress) {
    for (let property of tempHousesSuggested) {
      if (property.Address === searchAdress) {
        return property;
      }
    }
  }

  function sortLists(list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].Agent == "") {
        tempHousesSuggested.push(list[i]);
      }
      else {
        tempHousesForSale.push(list[i]);
      }
    }
  }

  // LogOut Function
  function userLogOut(event) {
    event.preventDefault();
    //Kod för att visa och dölja
    sectionLoggedIn.style.display = "none";
    sectionLogin.style.display = "block";
    currentUser = "";
    //Kod för att visa och dölja
  }

  return sectionLogin;
}

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
  if (loggedIn == true) {
    appContainer.innerHTML = '<h1>Våra listade bostäder för försäljning!</h1>';
    if (bostadData && Array.isArray(bostadData)) {
      bostadData.forEach(property => {
        const propertyElement = document.createElement('div');
        propertyElement.classList.add('property');
        propertyElement.id = `property-${property.id}`;
        const addressElement = document.createElement('div');
        addressElement.classList.add('address');
        addressElement.innerHTML = `<p>${property.street}, ${property.houseNumber}, ${property.city}, ${property.zipCode}</p>`;
        propertyElement.appendChild(addressElement);
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
        detailsElement.style.display = 'none';
        propertyElement.appendChild(detailsElement);

        const additionalDetailsElement = document.createElement('div');
        additionalDetailsElement.classList.add('additional-details');
        additionalDetailsElement.innerHTML = `
          <label for="pris">Pris:</label>
          <input type="text" id="pris" name="pris" placeholder="Enter Pris">

          <label for="maklare">Mäklare:</label>
          <select id="maklare" name="maklare">
            <option value="">Select Mäklare</option>
            <option value="Albin Bjerhem">Albin Bjerhem</option>
            <option value="Alexandra Filipsson">Alexandra Filipsson</option>
            <option value="Karl Loe">Karl Loe</option>
            <option value="Kira Popko">Kira Popko</option>
          </select>

          <button class="lanseraButton">Lansera bostad</button>
        `;
        additionalDetailsElement.style.display = 'none';
        propertyElement.appendChild(additionalDetailsElement);

        const lanseraButton = additionalDetailsElement.querySelector('.lanseraButton');
        lanseraButton.addEventListener('click', async () => {
          const selectedPris = document.getElementById('pris').value;
          const selectedMaklare = document.getElementById('maklare').value;

          try {
            await updatePropertyDetails(property, selectedPris, selectedMaklare);

            addressElement.innerHTML = `<p>${property.street}, ${property.houseNumber}, ${property.city}, ${property.zipCode}</p>`;
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
        <p>Pris: ${property.pris}</p> <!-- Display the Pris -->
        <p>Mäklare: ${property.maklare}</p> <!-- Display the Mäklare -->
      </div>
    `;
          } catch (error) {
            console.error('Error updating property:', error);
          }
        });

        propertyElement.addEventListener('click', () => {
          if (currentSelectedProperty) {
            currentSelectedProperty.classList.remove('selected');
            currentSelectedProperty.querySelector('.details').style.display = 'none';
            currentSelectedProperty.querySelector('.additional-details').style.display = 'none';
          }

          propertyElement.classList.toggle('selected');
          const details = propertyElement.querySelector('.details');
          details.style.display = details.style.display === 'none' ? 'block' : 'none';

          const additionalDetails = propertyElement.querySelector('.additional-details');
          additionalDetails.style.display = additionalDetails.style.display === 'none' ? 'block' : 'none';

          currentSelectedProperty = propertyElement;
        });

        appContainer.appendChild(propertyElement);
      });
    } else {
      appContainer.innerHTML = '<p>No property data available</p>';
    }
  } else {
    appContainer.innerHTML = '<p>User is not logged in. Redirect or show login page.</p>';
  }
};

function updatePropertyDetails(property, selectedPris, selectedMaklare) {
  property.pris = selectedPris;
  property.maklare = selectedMaklare;

  console.log(`Bostad launched with Pris: ${selectedPris}, Mäklare: ${selectedMaklare}`);

  fetch(`http://localhost:3000/bostad/${property.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(property),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Update successful:', data);

      const propertyElement = document.querySelector(`#property-${property.id}`);

      if (propertyElement) {
        const detailsElement = propertyElement.querySelector('.details');

        if (detailsElement) {
          detailsElement.innerHTML = `
            <!-- ... Your HTML ... -->
          `;

          propertyElement.style.backgroundColor = 'lightgreen';
        } else {
          console.error(`detailsElement is null for property with id ${property.id}. Element might not be found.`);
        }
      } else {
        console.error(`propertyElement is null for property with id ${property.id}. Element might not be found.`);
      }
    })
    .catch(error => {
      console.error('Error updating property:', error);
    });
}










// // Föreslagna Objekt
// for (let suggested of tempHousesSuggested) {
//   const suggestedRow = document.createElement("tr");
//   const suggestedAdress = document.createElement("td");
//   const suggestedInfo = document.createElement("td");

//   suggestedAdress.innerText = suggested.Address;
//   suggestedInfo.innerText = "placeholder";

//   suggestedRow.appendChild(suggestedAdress);
//   suggestedRow.appendChild(suggestedInfo);
//   uPTBody.appendChild(suggestedRow);

// }


// //arbeta med sälj lägenheter/object här
// const sellPropertiesTable = document.createElement("table");
// const sPTHead = document.createElement("thead");
// const sPTBody = document.createElement("thead");
// const sPTRowHead = document.createElement("tr");
// const sPThAdress = document.createElement("th");
// const sPTAgent = document.createElement("th");

// sPThAdress.innerText = "Property Adress";
// sPTAgent.innerText = "Current Agent";

// sPTRowHead.appendChild(sPThAdress);
// sPTRowHead.appendChild(sPTAgent);
// sPTHead.appendChild(sPTRowHead);
// sellPropertiesTable.appendChild(sPTHead);
// sellPropertiesTable.appendChild(sPTBody);

// //Objekt som Säljs
// for (let house of tempHousesForSale) {
//   const houseRow = document.createElement("tr");
//   const houseAdress = document.createElement("td");
//   const houseAgent = document.createElement("td");

//   houseAdress.innerText = house.Address;
//   houseAgent.innerText = house.Agent;

//   houseRow.appendChild(houseAdress);
//   houseRow.appendChild(houseAgent);
//   sPTBody.appendChild(houseRow);
// }

// const suggestedSelectorForm = document.createElement("form");
// const suggestedSelector = document.createElement("select");
// suggestedSelector.id = "selectorSuggest"
// tempHousesSuggested.forEach(house => {
//   const option = document.createElement("option");
//   option.value = house.Address;
//   option.textContent = house.Address;
//   suggestedSelector.appendChild(option)
// })
// const acceptSuggestion = document.createElement("input")
// acceptSuggestion.type = "submit";
// acceptSuggestion.id = "acceptButton";
// acceptSuggestion.value = "Accept Suggestion"

// suggestedSelectorForm.appendChild(suggestedSelector);
// suggestedSelectorForm.appendChild(acceptSuggestion);

// suggestedSelectorForm.addEventListener("submit", acceptSuggestedHouse)

// sectionLoggedIn.appendChild(sectionLoggedInh2);
// sectionLoggedIn.appendChild(unclaimedPropertiesTable);
// sectionLoggedIn.appendChild(suggestedSelectorForm);
// sectionLoggedIn.appendChild(sellPropertiesTable);
// // function för att updatera Selector och tabller, kommer behöva anpassas för JSON
// function UpdateTables() {
//   let newSPTBody = document.createElement("thead")
//   let newUPTBody = document.createElement("thead")
//   for (let house of tempHousesForSale) {
//     const houseRow = document.createElement("tr");
//     const houseAdress = document.createElement("td");
//     const houseAgent = document.createElement("td");

//     houseAdress.innerText = house.Address;
//     houseAgent.innerText = house.Agent;

//     houseRow.appendChild(houseAdress);
//     houseRow.appendChild(houseAgent);
//     newSPTBody.appendChild(houseRow);
//   }
//   for (let suggested of tempHousesSuggested) {
//     const suggestedRow = document.createElement("tr");
//     const suggestedAdress = document.createElement("td");
//     const suggestedInfo = document.createElement("td");

//     suggestedAdress.innerText = suggested.Address;
//     suggestedInfo.innerText = "placeholder";

//     suggestedRow.appendChild(suggestedAdress);
//     suggestedRow.appendChild(suggestedInfo);
//     newUPTBody.appendChild(suggestedRow);
//   }
//   const newSuggestedSelector = document.createElement("select");
//   newSuggestedSelector.id = "selectorSuggest"
//   tempHousesSuggested.forEach(house => {
//     const option = document.createElement("option");
//     option.value = house.Address;
//     option.textContent = house.Address;
//     newSuggestedSelector.appendChild(option)
//   })
//   suggestedSelectorForm.replaceChild(newSuggestedSelector, suggestedSelector)
//   unclaimedPropertiesTable.replaceChild(newUPTBody, uPTBody)
//   sellPropertiesTable.replaceChild(newSPTBody, sPTBody)
// }