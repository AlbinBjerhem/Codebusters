// JavaScript

export default function setupContactsPage() {
  // Create the main grid container
  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container';

  // Create FAQ container
  const faqContainer = document.createElement('div');
  faqContainer.className = 'faq-container';

  // FAQ items array
  const faqItems = [
    { question: 'Vad kostar en annons?', answer: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { question: 'Vad ingår när jag publicerar min bostad på CodeBusters?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { question: 'Är det möjligt sälja bostaden själv, utan mäklare?', answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.' },
    { question: 'Hittade du inte svar?', answer: 'Om du har specifika frågor gärna skriv till oss support@codebusters.se eller ring till en av våra mäklare:<a href="#broker">Mäklare</a>' }
  ];

  // Loop through FAQ items and create buttons and content
  faqItems.forEach(function (item) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'collapsible';
    button.textContent = item.question;

    const content = document.createElement('div');
    content.className = 'content';
    content.innerHTML = `<p>${item.answer}</p>`;

    button.addEventListener('click', function () {
      content.classList.toggle('active');
    });

    faqContainer.appendChild(button);
    faqContainer.appendChild(content);
  });

  // Append FAQ container to the grid container
  gridContainer.appendChild(faqContainer);

  // Create other sections
  const sectionsData = [
    { title: 'Besöksadress', content: 'Code Busters AB\nÅrstaängsvägen 33\n117 43 Stockholm' },
    { title: 'Besökstider', content: 'Tis, Ons, Torsd, Fre 8:00- 17:30\nMon, Lör, Sön - stängd' },
    { title: 'Vägbeskrivning', content: 'Bara 5 minuter från Liljeholmen station\nVi har egen parkering' },
    { title: 'Faktureringsadress', content: 'Code Busters AB\nFack 469\nBox 2087\n531 03 Stockholm' },
    { title: 'Organisationsnummer', content: '556644-7759' },
    { title: 'Styrelsens säte', content: 'Stockholm' },
    { title: 'VAT-nummer', content: 'SE556260008901' },
    { title: 'Kontakta våra medarbetare', content: 'besta.meklare@codebusters.se' },
    { title: 'Bannerannonsering och reklam', content: 'banner@codebusters.se' },
    { title: 'Allmänna frågor & Support', content: 'support@codebusters.se' }
  ];

  // Loop through sections and create div elements
  sectionsData.forEach(function (section) {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${section.title}</h3><p>${section.content.replace(/\n/g, '<br>')}</p>`;
    gridContainer.appendChild(div);
  });

  // Append the grid container to the main section of the body
  document.querySelector("main").appendChild(gridContainer);

  // Add a script for collapsible functionality
  const collapsibleButtons = document.querySelectorAll('.collapsible');

  collapsibleButtons.forEach(button => {
    button.addEventListener('click', function () {
      const content = this.nextElementSibling;
      content.classList.toggle('content');

      // Close other collapsibles
      collapsibleButtons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.nextElementSibling.classList.remove('active');
        }
      });
    });
  });
}

// Call the setupContactsPage function to initialize the page
setupContactsPage();





