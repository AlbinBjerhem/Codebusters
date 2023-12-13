

// about.js
export default function setupAboutPage() {
  // Create main container
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('about');

  // Add header
  mainContainer.appendChild(createHeading('Om Code Busters AB'));

  // Add line break
  mainContainer.appendChild(document.createElement('br'));

  // Add images
  mainContainer.appendChild(createImage('bilder/house.png', 'House', 205, 200));
  mainContainer.appendChild(createImage('bilder/family.png', 'Family', 205, 200));
  mainContainer.appendChild(createImage('bilder/design.png', 'Design', 205, 200));
  mainContainer.appendChild(createImage('bilder/design2.png', 'Design 2', 205, 200));

  // Add subheading
  mainContainer.appendChild(createHeading('Code Busters AB - En Framstående Fastighetsmäklarfirma', 'h3'));

  // Add paragraph
  mainContainer.appendChild(createParagraph(
    "Code Busters AB, grundat 2018 och fört av VD Sam Nouman, har etablerat sig som en framstående aktör inom " +
    "fastighetsmäkleri på den svenska marknaden. Med sitt huvudkontor i [Ort] och ett dedikerat team av fyra erfarna " +
    "mäklare strävar företaget efter att erbjuda personlig och professionell service av högsta kvalitet. Sam Nouman och " +
    "hans team är stolta över att ha skapat ett varaktigt intryck och haft äran att assistera sina kunder i att hitta sina " +
    "drömhem och maximera värdet av sina fastigheter. Genom att skapa transparenta och tillitsfulla relationer strävar " +
    "Code Busters AB alltid efter att överträffa förväntningarna och skapa positiva och smidiga fastighetsaffärer."
  ));

  // Add subheading
  mainContainer.appendChild(createHeading('Code Busters AB - En Innovativ Pionjär inom Mäklarbranschen', 'h3'));

  // Add paragraph
  mainContainer.appendChild(createParagraph(
    "Code Busters AB tar en aktiv roll i att vara en drivande kraft för innovation inom mäklarbranschen. Med ett fokus " +
    "på digitala lösningar och hållbara metoder strävar Sam Nouman och hans team ständigt efter att ligga i framkant " +
    "av utvecklingen, samtidigt som de bevarar den personliga och varma atmosfären som kännetecknar företaget."
  ));

  // Add subheading
  mainContainer.appendChild(createHeading('Code Busters AB - Skräddarsydda Fastighetslösningar för Varje Klient', 'h3'));

  // Add paragraph
  mainContainer.appendChild(createParagraph(
    "Sam Nouman och Code Busters AB är övertygade om att varje fastighetsaffär är unik och kräver en skräddarsydd " +
    "strategi. Deras vision sträcker sig bortom affärer; det handlar om att skapa hem och möjligheter för deras kunder. " +
    "Med passion och engagemang förser Sam Nouman och Code Busters AB samhället med nyckeln till nya kapitel och " +
    "spännande framtidsperspektiv. Välkommen till Code Busters AB, där varje fastighetsaffär blir en berättelse om " +
    "framgång och hemkänsla."
  ));

  // Return the main container
  return mainContainer;

  // Function to create a heading element
  function createHeading(text, headingType = 'h2') {
    const heading = document.createElement(headingType);
    heading.textContent = text;
    return heading;
  }

  // Function to create an image element
  function createImage(src, alt, width, height) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    image.width = width;
    image.height = height;
    return image;
  }

  // Function to create a paragraph element
  function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
  }
}

