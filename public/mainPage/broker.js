
// broker.js
export default function setupBrokerPage() {
  // Create container div
  const container = document.createElement('div');
  container.classList.add('container');

  // Create grid-container3 div
  const gridContainer3 = document.createElement('div');
  gridContainer3.classList.add('grid-container3');

  // Add content to grid-container3
  const content1 = document.createElement('div');
  content1.innerHTML = `
    <h2>Om Code Busters AB Mäklarna</h2>
    <h3>Erfarna Fastighetsmäklare som Skapar Trygga Hem:</h3>
    <p>Våra dedikerade fastighetsmäklare är här för att göra din resa genom fastighetsmarknaden så smidig som
      möjligt.
      Med års erfarenhet och en passion för att hitta de perfekta hemmen, är vårt team inriktat på att skapa trygga
      och
      lyckliga boendelösningar för dig.</p>`;

  const content2 = document.createElement('div');
  content2.innerHTML = `
    <h3>Personlig Service:</h3>
    <p>För oss är constje kund en viktig del av vår historia. Vi sträconst efter att skapa starka och långconstiga
      relationer,
      och vår personliga service speglar vår dedikation till ditt välbefinnande. Vi finns här för att lyssna, förstå
      och
      överträffa dina förväntningar.</p>`;

  const content3 = document.createElement('div');
  content3.innerHTML = `
    <h3>Ditt Hem, Vår Prioritet:</h3>
    <p>Oavsett om du säljer eller köper, är ditt hem vår prioritet. Vi arbetar hårt för att säkerställa att constje
      affär
      är framgångsrik och att constje kund lämnar oss med ett leende på läpparna. Välj oss som din fastighetspartner
      och
      låt oss skapa nästa kapitel av ditt liv tillsammans. Välkommen till code Busters AB - där erfarenhet möter
      engagemang
      för att göra fastighetsaffärer till en glädjefylld och minnesvärd upplevelse.</p>`;

  // Append content to grid-container3
  gridContainer3.appendChild(content1);
  gridContainer3.appendChild(content2);
  gridContainer3.appendChild(content3);

  // Append grid-container3 to container
  container.appendChild(gridContainer3);

  // Create line break
  const lineBreak = document.createElement('br');
  container.appendChild(lineBreak);

  // Create grid-container2 div
  const gridContainer2 = document.createElement('div');
  gridContainer2.classList.add('grid-container2');

  // Add content to grid-container2
  const brokerData = [
    { name: 'Albin Bjerghem', title: 'Mäklare', phone: '+46 734467783', email: 'albin.bjerhem@codebusters.se', image: 'bilder/Albin.png' },
    { name: 'Alexandra Filipsson', title: 'Mäklare', phone: '+46 732954383', email: 'alexandra.filipsson@codebusters.se', image: 'bilder/Alexandra.png' },
    { name: 'Karl Loe', title: 'Mäklare', phone: '+46 739045245', email: 'karl.loe@codebusters.se', image: 'bilder/Karl.png' },
    { name: 'Kira Popko', title: 'Mäklare', phone: '+46 731037843', email: 'kira.popko@codebusters.se', image: 'bilder/Kira.png' }
  ];

  for (let i = 0; i < brokerData.length; i++) {
    const businessCard = document.createElement('div');
    businessCard.classList.add('business-card', 'business-card-container');

    const leftSection = document.createElement('div');
    leftSection.classList.add('left-section');
    leftSection.innerHTML = `
      <div class="broker-name">${brokerData[i].name}</div>
      <div class="broker-title">${brokerData[i].title}</div>
      <div class="contact-info">
        Phone: ${brokerData[i].phone}<br>
        Email: ${brokerData[i].email}
      </div>
      <div class="website">
        Website: <a href="mainPage.html" target="_blank">www.codebusters.com</a>
      </div>`;

    const rightSection = document.createElement('div');
    rightSection.classList.add('right-section');

    const profilePicture = document.createElement('img');
    profilePicture.src = brokerData[i].image;
    profilePicture.alt = brokerData[i].name;
    profilePicture.classList.add('profile-picture');

    rightSection.appendChild(profilePicture);
    businessCard.appendChild(leftSection);
    businessCard.appendChild(rightSection);

    // Append business card to grid-container2
    gridContainer2.appendChild(businessCard);
  }

  // Append grid-container2 to container
  container.appendChild(gridContainer2);

  // Append container to the main section
  document.querySelector('main').appendChild(container);
}












