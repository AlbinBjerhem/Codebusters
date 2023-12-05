document.addEventListener("DOMContentLoaded", function () {
  let form = document.createElement("form");

  let streetInput = createInput("text", "Gatunamn");
  let houseNumberInput = createInput("text", "Husnummer");
  let cityInput = createDropdown("Stadsdel", ["Djurgården", "Fredhäll", "Gamla stan", "Gärdet", "Hjorthagen", "Kristineberg", "Kungsholmen", "Lilla Essingen", "Långholmen", "Marieberg", "Norra Djurgården", "Norrmalm", "Reimersholme", "Riddarholmen", "Skeppsholmen", "Södermalm", "Stadshagen", "Stora Essingen", "Vasastaden", "Östermalm"]);
  let zipCodeInput = createInput("text", "Postkod");
  let typeOfPropertyInput = createDropdown("Typ av bostad", ["Lägenhet", "Radhus", "Villa"]);

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.textContent = "Submit";

  let displayDiv = document.createElement("div");
  displayDiv.id = "displayData";

  form.appendChild(streetInput);
  form.appendChild(houseNumberInput);
  form.appendChild(cityInput);
  form.appendChild(zipCodeInput);
  form.appendChild(typeOfPropertyInput);
  form.appendChild(submitButton);

  document.getElementById("myApp").appendChild(form);
  document.getElementById("myApp").appendChild(displayDiv);

  submitButton.addEventListener("click", function () {
    let streetValue = streetInput.value;
    let houseNumberValue = houseNumberInput.value;
    let cityValue = cityInput.value;
    let zipCodeValue = zipCodeInput.value;
    let typeOfPropertyValue = typeOfPropertyInput.value;

    displayDiv.innerHTML = `
      <p>Gatunamn: ${streetValue}</p>
      <p>Husnummer: ${houseNumberValue}</p>
      <p>Stadsdel: ${cityValue}</p>
      <p>Postkod: ${zipCodeValue}</p>
      <p>Typ av bostad: ${typeOfPropertyValue}</p>
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
