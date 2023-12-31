


export default function setupSellPage() {

  document.addEventListener("DOMContentLoaded", function () {
    // let form = document.createElement("form");
    let titleContainer = document.createElement("div");
    titleContainer.id = "titleContainer";

    // Title
    let title = document.createElement("h2");
    title.textContent = "Vi är glada att ni säljer bostäder med oss!";
    titleContainer.appendChild(title);

    // Rules
    let rules = document.createElement("h3");
    rules.textContent = "Vänligen läs igenom informationen om hur du fyller i formuläret och vad som händer därefter.";
    titleContainer.appendChild(rules);

    let text = document.createElement("p");
    text.textContent = "Fyll i ALLA fält i formuläret. Dubbelkolla informationen och klicka på 'Skicka In'. Efter det kommer en kopia av ditt formulär, där du kan göra en ytterligare kontroll. Om du upptäcker några fel är du välkommen att kontakta oss via e-post: basta.meklare@codebusters.se";
    titleContainer.appendChild(text);

    let text1 = document.createElement("p");
    text1.textContent = "När du har skickat in ditt formulär kommer det till oss. Vi kommer att gå igenom det och om allt stämmer kommer vi att godkänna din ansökan och kontakta dig inom 3 dagar.";
    titleContainer.appendChild(text1);

    // Append the title container to the main content
    document.getElementById("myApp").appendChild(titleContainer);

    let streetInput = createInput("text", "Gatunamn");
    let houseNumberInput = createInput("text", "Husnummer");
    let cityInput = createDropdown("Stadsdel", ["", "Djurgården", "Fredhäll", "Gamla stan", "Gärdet", "Hjorthagen", "Kristineberg", "Kungsholmen", "Lilla Essingen", "Långholmen", "Marieberg", "Norra Djurgården", "Norrmalm", "Reimersholme", "Riddarholmen", "Skeppsholmen", "Södermalm", "Stadshagen", "Stora Essingen", "Vasastaden", "Östermalm"]);
    let zipCodeInput = createInput("text", "Postkod");
    zipCodeInput.pattern = "\\d{5}";
    let typeOfPropertyInput = createDropdown("Typ av bostad", ["", "Lägenhet", "Radhus", "Villa"]);
    let roomAmountInput = createDropdown("Antal rum", ["", 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15]);
    let areaInput = createInput("number", "Boarea (m²)");
    let creationYearInput = createYearDropdown("Byggår");

    //------------------------------Alexandras kod -------------------------

    let elevatorOptionsInput = createDropdown("Hiss", ["", "Ja", "Nej"]);
    let parkingOptionsInput = createDropdown("Parkering", ["", "Ja", "Nej"]);
    let yardOptionInput = createDropdown("Innergård", ["", "Ja", "Nej"]);
    let storageOptionInput = createDropdown("Förråd", ["", "Ja", "Nej"]);
    let atticOptionInput = createDropdown("Vind", ["", "Ja", "Nej"]);

    //------------------ Kontaktuppgifter ---------------------------

    let contactNameInput = createInput("text", "För och efternamn");
    let contactEmailInput = createInput("email", "Din e-post");
    let contactPhoneInput = createInput("tel", "Ditt mobiltelefonnummer");
    contactPhoneInput.pattern = "\\d{10}";

    let displayDiv = document.createElement("div");
    displayDiv.id = "displayData";



    let formContainer = document.createElement("div");
    formContainer.id = "formContainer";

    function createLabelInputPair(labelText, inputElement) {
      let container = document.createElement("div");
      let label = document.createElement("label");
      label.textContent = labelText;

      container.appendChild(label);
      container.appendChild(inputElement);

      formContainer.appendChild(container);

    }

    createLabelInputPair("Gatunamn:", streetInput, formContainer);
    createLabelInputPair("Husnummer:", houseNumberInput, formContainer);
    createLabelInputPair("Stadsdel:", cityInput, formContainer);
    createLabelInputPair("Postkod:", zipCodeInput, formContainer);
    createLabelInputPair("Typ av bostad:", typeOfPropertyInput, formContainer);
    createLabelInputPair("Antal rum:", roomAmountInput, formContainer);
    createLabelInputPair("Boarea (m²):", areaInput, formContainer);
    createLabelInputPair("Byggår:", creationYearInput, formContainer);

    //------------------------------Alexandras kod -------------------------

    createLabelInputPair("Hiss", elevatorOptionsInput, formContainer);
    createLabelInputPair("Parkering", parkingOptionsInput, formContainer);
    createLabelInputPair("Trädgård", yardOptionInput, formContainer);
    createLabelInputPair("Förråd", storageOptionInput, formContainer);
    createLabelInputPair("Vind", atticOptionInput, formContainer);


    //------------------ Kontaktuppgifter ---------------------------

    createLabelInputPair("Ditt namn:", contactNameInput, formContainer);
    createLabelInputPair("Din e-post:", contactEmailInput, formContainer);
    createLabelInputPair("Ditt telefonnummer:", contactPhoneInput, formContainer);


    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.textContent = "Skicka in";

    formContainer.appendChild(submitButton);

    //document.querySelector("main").innerHTML = "";

    document.getElementById("myApp").appendChild(formContainer);
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
        !atticValue ||
        !contactNameValue ||
        !contactEmailValue ||
        !contactPhoneInput
      ) {
        alert("Vänligen fyll i alla fält.");
        return;
      }

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
      <p><bold>"Tack för att du valt Code Busters som din mäklare! Kontrollera nedanstående information och återkom om något inte är korrekt (basta.meklare@codebusters.se).</bold></p>
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


}
setupSellPage();