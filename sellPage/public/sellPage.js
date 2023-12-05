import { getAllhissOptions } from "./server-request";
console.log("startar SellPage.js")
const getAllhissOptions = await getAllhissOptions()
console.log("inne i server-request filen - ", await AllhissOptions[0])


function selectOption(category) {
  var dropdown = document.getElementById(category);
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  console.log(category + ": " + selectedOption);
}

function createDropdown(labelText, id, options) {
  var container = document.createElement("div");
  var label = document.createElement("label");
  label.textContent = labelText;
  container.appendChild(label);

  var select = document.createElement("select");
  select.id = id;
  select.onchange = function () {
    selectOption(id);
  };

  for (var i = 0; i < options.length; i++) {
    var option = document.createElement("option");
    option.value = options[i];
    option.textContent = options[i];
    select.appendChild(option);
  }

  container.appendChild(select);
  document.getElementById("myApp").appendChild(container);
  document.getElementById("myApp").appendChild(document.createElement("br"));
}

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    createDropdown("Hiss:", "hissOptions", data.hissOptions);
    createDropdown("Parkering:", "parkeringOptions", data.parkeringOptions);
    createDropdown("Innergård:", "innergardOptions", data.innergardOptions);
    createDropdown("Förråd:", "forradOptions", data.forradOptions);
    createDropdown("Vind:", "vindOptions", data.vindOptions);
  })
  .catch(error => console.error('Error fetching options:', error));