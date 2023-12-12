document.addEventListener("DOMContentLoaded", function () {
  let form = document.createElement("form");

  let streetInput = createInput("text", "Gatunamn");
  let houseNumberInput = createInput("text", "Husnummer");
  let cityInput = createDropdown("Stadsdel", ["", "Djurgården", "Fredhäll", "Gamla stan", "Gärdet", "Hjorthagen", "Kristineberg", "Kungsholmen", "Lilla Essingen", "Långholmen", "Marieberg", "Norra Djurgården", "Norrmalm", "Reimersholme", "Riddarholmen", "Skeppsholmen", "Södermalm", "Stadshagen", "Stora Essingen", "Vasastaden", "Östermalm"]);
  let zipCodeInput = createInput("text", "Postkod");
  zipCodeInput.pattern = "\\d{5}";
  let typeOfPropertyInput = createDropdown("Typ av bostad", ["Lägenhet", "Radhus", "Villa"]);
  let roomAmountInput = createDropdown("Antal rum", [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15]);
  let areaInput = createInput("number", "Boarea (m²)");
  let creationYearInput = createYearDropdown("Byggår");


  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.textContent = "Submit";

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

  createDropdownMenu("Hiss:", "hissOptions");
  createDropdownMenu("Parkering:", "parkeringOptions");
  createDropdownMenu("Innergård:", "innergardOptions");
  createDropdownMenu("Förråd:", "forradOptions");
  createDropdownMenu("Vind:", "vindOptions");

  form.appendChild(submitButton);

  document.getElementById("myApp").appendChild(form);
  document.getElementById("myApp").appendChild(displayDiv);


  submitButton.addEventListener("click", function () {
    let streetValue = streetInput.value;
    let houseNumberValue = houseNumberInput.value;
    let cityValue = cityInput.value;
    let zipCodeValue = zipCodeInput.value;
    let typeOfPropertyValue = typeOfPropertyInput.value;
    let roomAmountValue = roomAmountInput.value;
    let areaValue = areaInput.value;
    let creationYearValue = creationYearInput.value;

    //------------------------------Alexandras kod -------------------------
    let hissValue = document.getElementById("hissOptions").value;
    let parkeringValue = document.getElementById("parkeringOptions").value;
    let innergardValue = document.getElementById("innergardOptions").value;
    let forradValue = document.getElementById("forradOptions").value;
    let vindValue = document.getElementById("vindOptions").value;

    if (
      !streetValue ||
      !houseNumberValue ||
      !cityValue ||
      !zipCodeValue ||
      !typeOfPropertyValue ||
      !roomAmountValue ||
      !areaValue ||
      !creationYearValue ||
      !hissValue ||
      !parkeringValue ||
      !innergardValue ||
      !forradValue ||
      !vindValue
    ) {
      alert("Vänligen fyll i alla fält.");
      return;
    }

    if (!/^\d{5}$/.test(zipCodeValue)) {
      alert("Vänligen skriv in ett 5 siffrigt postnummer.")
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
      hiss: hissValue,
      parkering: parkeringValue,
      innergard: innergardValue,
      forrad: forradValue,
      vind: vindValue,
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
      <p>Hiss: ${hissValue}</p>
      <p>Parkering: ${parkeringValue}</p>
      <p>Innergård: ${innergardValue}</p>
      <p>Förråd: ${forradValue}</p>
      <p>Vind: ${vindValue}</p>
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

//----------------------------------------------- Alexandras kod ----------------------------------------------------------

function createDropdownMenu(labelText, id) {
  var container = document.createElement("div");
  var label = document.createElement("label");
  label.textContent = labelText;
  container.appendChild(label);

  var select = document.createElement("select");
  select.id = id;
  select.onchange = function () {
    selectOption(id);
  };

  var options = ["", "Ja", "Nej"];
  for (var i = 0; i < options.length; i++) {
    var option = document.createElement("option");
    option.value = options[i];
    option.textContent = options[i];
    select.appendChild(option);
  }

  container.appendChild(select);
  document.body.appendChild(container);
  document.body.appendChild(document.createElement("br"));
}

