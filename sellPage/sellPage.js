
function selectOption(category) {
  var dropdown = document.getElementById(category);
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  console.log(category + ": " + selectedOption);
}

function createDropdown(labelText, id) {
  var container = document.createElement("div");
  var label = document.createElement("label");
  label.textContent = labelText;
  container.appendChild(label);

  var select = document.createElement("select");
  select.id = id;
  select.onchange = function () {
    selectOption(id);
  };

  var options = ["Ja", "Nej"];
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


createDropdown("Hiss:", "hissOptions");
createDropdown("Parkering:", "parkeringOptions");
createDropdown("Innergård:", "innergardOptions");
createDropdown("Förråd:", "forradOptions");
createDropdown("Vind:", "vindOptions");

