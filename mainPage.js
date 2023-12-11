export default function setupMainPage() {
  // Create a container for the main content
  const mainContainer = document.createElement('div');
  mainContainer.className = 'main-container';

  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';
  // Add your main content here
  // For example:
  const mainTitle = document.createElement('h1');
  mainTitle.textContent = 'Välkommen till Code Busters';
  mainContainer.appendChild(mainTitle);

  const secondTitle = document.createElement('h2');
  secondTitle.textContent = 'Ditt Drömhem är Bara Steg Bort! Just do it!';
  mainContainer.appendChild(secondTitle);

  // Divide the text into three paragraphs using 'p' elements
  const paragraph1 = document.createElement('p');
  paragraph1.innerHTML = 'Code Busters är inte bara en mäklarbyrå; vi är era partners i er resa mot det perfekta hemmet. ' +
    'Vi förstår att köp eller försäljning av ett hem är en av de viktigaste besluten i ert liv, och vårt mål är att göra denna process så smidig och minnesvärd som möjligt.';

  const paragraph2 = document.createElement('p');
  paragraph2.innerHTML = 'Vad skiljer oss från andra mäklare? För det första är det vår passion för att förstå era unika behov och önskemål. Varje hem är en berättelse, och vi tror på att skräddarsy varje transaktion för att passa just er.' +
    ' Vi lyssnar uppmärksamt och arbetar nära er för att förstå era drömmar och mål.';

  const paragraph3 = document.createElement('p');
  paragraph3.innerHTML = 'För oss är integritet och ärlighet hörnstenarna i varje affär. Vi strävar efter att skapa en atmosfär av förtroende och trygghet för er som kunder. Ni kan vara säkra på att varje steg i processen kommer att ' +
    'hanteras professionellt och med respekt för ert val och er tid.';

  const paragraph4 = document.createElement('p');
  paragraph4.innerHTML = 'Och sist men inte minst, Code Busters är inte bara en byrå - vi är en familj. Vårt engagemang sträcker sig bortom affärer. Vi är här för att bygga långvariga relationer och stödja er genom alla era fastighetsbehov,' +
    'oavsett om det är det första hemmet, drömhuset eller en investering för framtiden.';

  const paragraph5 = document.createElement('p');
  paragraph5.innerHTML = 'Så, om ni letar efter en personlig och professionell partner för er nästa fastighetsresa, tveka inte att välja Code Busters. Ert drömhem är bara några steg bort, och vi ser fram emot att vara er guide på den resan.';


  // Append paragraphs to the textContainer
  textContainer.appendChild(paragraph1);
  textContainer.appendChild(paragraph2);
  textContainer.appendChild(paragraph3);
  textContainer.appendChild(paragraph4);
  textContainer.appendChild(paragraph5);

  // Add an image to the mainContainer
  const imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';
  const img = createImage('bilder/dreamHouse.png', 'imgDream');
  imgContainer.appendChild(img);

  // Append text and image containers to the main container
  mainContainer.appendChild(textContainer);
  mainContainer.appendChild(imgContainer);

  // Append the main container to the main section of the body
  document.querySelector("main").appendChild(mainContainer);
}

// Function to create an image element
function createImage(src, className) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Dream House';
  img.className = className;

  return img;
}

// Call the setupMainPage function to initialize the page
setupMainPage();





