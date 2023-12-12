document.addEventListener("DOMContentLoaded", function () {
  let form = document.createElement("form");

  let streetInput = createInput("text", "Gatunamn");
  let houseNumberInput = createInput("text", "Husnummer");
  let cityInput = createDropdown("Stadsdel", ["", "Djurgården", "Fredhäll", "Gamla stan", "Gärdet", "Hjorthagen", "Kristineberg", "Kungsholmen", "Lilla Essingen", "Långholmen", "Marieberg", "Norra Djurgården", "Norrmalm", "Reimersholme", "Riddarholmen", "Skeppsholmen", "Södermalm", "Stadshagen", "Stora Essingen", "Vasastaden", "Östermalm"]);
  let zipCodeInput = createInput("text", "Postkod");
  zipCodeInput.pattern = "\\d{5}";
  let typeOfPropertyInput = createDropdown("Typ av bostad", ["", "Lägenhet", "Radhus", "Villa"]);
  let roomAmountInput = createDropdown("Antal rum", [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15]);
  let areaInput = createInput("number", "Boarea (m²)");
  let creationYearInput = createYearDropdown("Byggår");

  //------------------------------Alexandras kod -------------------------

  let elevatorOptionsInput = createDropdown("Hiss", ["", "Ja", "Nej"]);
  let parkingOptionsInput = createDropdown("Parkering", ["", "Ja", "Nej"]);
  let yardOptionInput = createDropdown("Innergård", ["", "Ja", "Nej"]);
  let storageOptionInput = createDropdown("Förråd", ["", "Ja", "Nej"]);
  let atticOptionInput = createDropdown("Vind", ["", "Ja", "Nej"]);

  //------------------ Kontaktuppgifter ---------------------------

  let contactNameInput = createInput("text", "Ditt namn");
  let contactEmailInput = createInput("email", "Din e-post");
  let contactPhoneInput = createInput("tel", "Ditt telefonnummer");
  contactPhoneInput.pattern = "\\d{10}";

  let displayDiv = document.createElement("div");
  displayDiv.id = "displayData";

  function createLabelInputPair(labelText, inputElement) {
    let container = document.createElement("div");
    let label = document.createElement("label");
    label.textContent = labelText;
    container.appendChild(label);
    container.appendChild(inputElement);
    form.appendChild(container);
  }

  createLabelInputPair("Gatunamn:", streetInput);
  createLabelInputPair("Husnummer:", houseNumberInput);
  createLabelInputPair("Stadsdel:", cityInput);
  createLabelInputPair("Postkod:", zipCodeInput);
  createLabelInputPair("Typ av bostad:", typeOfPropertyInput);
  createLabelInputPair("Antal rum:", roomAmountInput);
  createLabelInputPair("Boarea (m²):", areaInput);
  createLabelInputPair("Byggår:", creationYearInput);

  //------------------------------Alexandras kod -------------------------

  createLabelInputPair("Hiss", elevatorOptionsInput);
  createLabelInputPair("Parkering", parkingOptionsInput);
  createLabelInputPair("Trädgård", yardOptionInput);
  createLabelInputPair("Förråd", storageOptionInput);
  createLabelInputPair("Vind", atticOptionInput);


  //------------------ Kontaktuppgifter ---------------------------

  createLabelInputPair("Ditt namn:", contactNameInput);
  createLabelInputPair("Din e-post:", contactEmailInput);
  createLabelInputPair("Ditt telefonnummer:", contactPhoneInput);


  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.textContent = "Skicka in";

  form.appendChild(submitButton);

  document.getElementById("myApp").appendChild(form);
  document.getElementById("myApp").appendChild(displayDiv);


  submitButton.addEventListener("click", function () {
    let streetValue = streetInput.value.trim();
    let houseNumberValue = houseNumberInput.value.trim();
    let cityValue = cityInput.value.trim();
    let zipCodeValue = zipCodeInput.value.trim();
    let typeOfPropertyValue = typeOfPropertyInput.value.trim();
    let roomAmountValue = roomAmountInput.value.trim();
    let areaValue = parseFloat(areaInput.value.trim());
    let creationYearValue = creationYearInput.value.trim();

    //------------------------------Alexandras kod -------------------------

    let elevatorValue = elevatorOptionsInput.value.trim();
    let parkingValue = parkingOptionsInput.value.trim();
    let yardValue = yardOptionInput.value.trim();
    let storageValue = storageOptionInput.value.trim();
    let atticValue = atticOptionInput.value.trim();

    //------------------ Kontaktuppgifter ---------------------------

    let contactNameValue = contactNameInput.value.trim();
    let contactEmailValue = contactEmailInput.value.trim();
    let contactPhoneValue = contactPhoneInput.value.trim();

    const fullNameWords = contactNameValue.split(/\s+/);

    if (isNaN(areaValue) || areaValue < 0) {
      alert("Vänligen ange en giltig boarea.");
      return;
    }

    if (fullNameWords.length < 2) {
      alert("Vänligen ange för och efternamn.");
      return;
    }

    if (!isValidEmail(contactEmailValue)) {
      alert("Vänligen ange en giltig e-postadress.");
      return;
    }

    if (!/^\d{5}$/.test(zipCodeValue)) {
      alert("Vänligen skriv in ett 5 siffrigt postnummer.")
      return;
    }

    if (!/^\d{10}$/.test(contactPhoneValue)) {
      alert("Vänligen använd enbart siffror i ditt 10 siffriga mobilnummer")
      return;
    }

    if (
      !streetValue ||
      !houseNumberValue ||
      !cityValue ||
      !zipCodeValue ||
      !typeOfPropertyValue ||
      !roomAmountValue ||
      !areaValue ||
      !creationYearValue ||
      !elevatorValue ||
      !parkingValue ||
      !yardValue ||
      !storageValue ||
      !atticValue
    ) {
      alert("Vänligen fyll i alla fält.");
      return;
    }

    const formData = {
      street: streetValue,
      houseNumber: houseNumberValue,
      city: cityValue,
      zipCode: zipCodeValue,
      typeOfProperty: typeOfPropertyValue,
      roomAmount: roomAmountValue,
      area: areaValue,
      creationYear: creationYearValue,
      elevator: elevatorValue,
      parking: parkingValue,
      yard: yardValue,
      storage: storageValue,
      attic: atticValue,
      contact: {
        name: contactNameValue,
        email: contactEmailValue,
        phone: contactPhoneValue,
      },
    }

    fetch('http://localhost:3000/bostad',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success', data);
      })

      .catch(error => {
        console.error('error', error)
      })


    displayDiv.innerHTML = `
      <p>Gatunamn: ${streetValue}</p>
      <p>Husnummer: ${houseNumberValue}</p>
      <p>Stadsdel: ${cityValue}</p>
      <p>Postkod: ${zipCodeValue}</p>
      <p>Typ av bostad: ${typeOfPropertyValue}</p>
      <p>Antal rum: ${roomAmountValue}</p>
      <p>Boarea: ${areaValue} m²</p>
      <p>Byggår: ${creationYearValue}</p>
      <p>Hiss: ${elevatorValue}</p>
      <p>Parkering: ${parkingValue}</p>
      <p>Innergård: ${yardValue}</p>
      <p>Förråd: ${storageValue}</p>
      <p>Vind: ${atticValue}</p>
      <p>Namn: ${contactNameValue}</p>
      <p>Email: ${contactEmailValue}</p>
      <p>Telefonnummer: ${contactPhoneValue}</p>
    `;
  });
});

function createInput(type, placeholder) {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  return input;
};

function createDropdown(placeholder, options) {
  const select = document.createElement("select");
  select.placeholder = placeholder;

  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText;
    option.text = optionText;
    select.appendChild(option);
  });

  return select;

}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function createYearDropdown(placeholder) {
  const select = document.createElement("select");
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.text = placeholder;
  select.appendChild(defaultOption);

  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1850; year--) {
    const option = document.createElement("option");
    option.value = year.toString();
    option.text = year.toString();
    select.appendChild(option);
  }

  return select;
}

