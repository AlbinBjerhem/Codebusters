document.addEventListener("DOMContentLoaded", function () {
  let form = document.createElement("form");

  let streetInput = createInput("text", "Gatunamn");
  let houseNumberInput = createInput("text", "Husnummer");
  let cityInput = createInput("text", "Stadsdel");
  let zipCodeInput = createInput("text", "Postkod");

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.textContent = "Submit";

  let displayDiv = document.createElement("div");
  displayDiv.id = "displayData";

  form.appendChild(streetInput);
  form.appendChild(houseNumberInput);
  form.appendChild(cityInput);
  form.appendChild(zipCodeInput);
  form.appendChild(submitButton);

  document.getElementById("myApp").appendChild(form);
  document.getElementById("myApp").appendChild(displayDiv);

  submitButton.addEventListener("click", function () {
    let streetValue = streetInput.value;
    let houseNumberValue = houseNumberInput.value;
    let cityValue = cityInput.value;
    let zipCodeValue = zipCodeInput.value;

    displayDiv.innerHTML = `
      <p>Gatunamn: ${streetValue}</p>
      <p>Husnummer: ${houseNumberValue}</p>
      <p>Stadsdel: ${cityValue}</p>
      <p>Postkod: ${zipCodeValue}</p>
    `;
  });
});

function createInput(type, placeholder) {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  return input;
};
