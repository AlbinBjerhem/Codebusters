/*export default function (press) {
  return (function (press) {

    document.addEventListener('DOMContentLoaded', function () {
      // Create main container
      const aboutContainer = document.createElement('div');
      aboutContainer.className = 'about';

      // Add press releases
      aboutContainer.appendChild(createPressRelease('[Stockholm, September, 2023] Code Busters AB Firar Fem Års Jubileum och Stark Tillväxt',
        'Code Busters AB grundades den 15 september 2018 med målet att erbjuda personlig och professionell mäklartjänst av hög kvalitet. Under de senaste fem åren har företaget konsekvent överträffat förväntningarna och etablerat sig som en pålitlig aktör på fastighetsmarknaden.'));

      aboutContainer.appendChild(createPressRelease('[Stockholm, April, 2023] Stark Tillväxt och Kundtillfredsställelse:',
        'Med en dedikerad grupp av fyra erfarna mäklare har Code Busters AB uppnått betydande tillväxt och har erhållit utmärkelser för hög kundtillfredsställelse. Bolaget är stolt över att ha hjälpt många kunder att hitta sina drömhem och maximera värdena för sina fastigheter.'));

      aboutContainer.appendChild(createPressRelease('[Stockholm, January, 2023] Vision för Framtiden',
        'Sam Nouman, VD för Code Busters AB, uttrycker sin entusiasm över företagets framgång och ser fram emot att fortsätta erbjuda högkvalitativa mäkleri-tjänster. Företaget planerar att expandera sitt verksamhetsområde och introducera innovativa lösningar för att möta de ständigt föränderliga behoven på fastighetsmarknaden.'));

      // Add company information
      aboutContainer.appendChild(createSection('Företagsinformation:',
        createInfoItem('Översikt av Code Busters AB', 'Grundades: 15 september 2018', 'Antal Mäklare: 4', 'VD: Sam Nouman', 'Företagets Mål: Att erbjuda personlig och professionell mäklartjänst av hög kvalitet.')));

      // Add contact information
      aboutContainer.appendChild(createSection('Kontaktinformation:',
        createContactItem('Presskontakt: Linus Lindbroth', 'E-post: press@codebusters.se', 'Telefon: +46 123 456 643')));

      // Add press events
      aboutContainer.appendChild(createSection('Presshändelser:',
        createPressEvent('Nästa Fastighetsvisning: Code Bustesrs AB Presenterar Exklusiva Bostäder', 'Datum: 10 February 2024', 'Tid: 14:00', 'Plats: Code Busters AB office, Årstaängsvägen 33 117 43, Stockholm')));

      // Add awards and recognitions
      aboutContainer.appendChild(createSection('Utmärkelser och Erkännanden:',
        createInfoItem('Code Busters AB Vinner Branschpriset för Bästa Kundtillfredsställelse', 'Alexandra Filipsson Nominerad Till Årets Mäklare')));

      // Add testimonials
      aboutContainer.appendChild(createSection('Vittnesmål och Kundframgångshistorier:',
        createTestimonial('Vi hade nöjet att köpa vårt drömhus med Code Busters AB. Deras team förstod verkligen våra behov och guidade oss genom constje steg av köpprocessen. Vi är så glada över att ha valt dem och ser fram emot att skapa många minnen i vårt nya hem.', '- Johan och Maria, köpare.'),
        createTestimonial('Att sälja mitt hem med Code Busters AB const en fantastisk upplevelse. Deras professionalism och dedikation gjorde hela processen smidig och stressfri. Jag är tacksam för deras engagemang och rekommenderar dem starkt till alla som letar efter pålitliga mäklare.', '- Anna, säljare.'),
        createTestimonial('Code Busters AB hjälpte oss att hitta det perfekta hemmet för vår familj. Deras personliga engagemang och förståelse för våra önskemål gjorde att vi kände oss trygga genom hela processen. Vi är evigt tacksamma för deras hjälp.', '- Familjen Andersson.')));

      // Add social media
      aboutContainer.appendChild(createSection('Sociala Medier:',
        createInfoItem('Instagram: CodeBustersAB', 'Linked In: linkedin.com/in/CodeBustersAB')));

      // Add news archive
      aboutContainer.appendChild(createSection('Nyhetsarkiv:',
        createCollapsibleButton('Arkiv',
          createNewsArchive('15 december 2022 - Årets Mäklare Nominering:', 'Karl Loe nomineras till Årets Mäklare och bidrar till företagets framstående rykte.',
            '2 oktober 2022 - Code Busters AB Vinner Hållbarhetspriset:', 'Företaget erkänns för sitt engagemang för hållbarhet och vinner ett branschpris inom detta område.',
            '20 januari 2021 - Digitala Innovationer inom Mäkleri:', 'Code Busters AB introducerar innovativa digitala lösningar för att förbättra kundupplevelsen.',
            '10 mars 2019 - Utmärkelse för Kundtillfredsställelse:', 'Code Busters AB belönas med branschpris för enastående kundtillfredsställelse.',
            '1 oktober 2018 - Första Framgångsrika Fastighetsförsäljningen:', 'Företagets första stora framgång med en snabb och framgångsrik fastighetsförsäljning.',
            '15 september 2018 - Företagets Grundande:', 'Code Busters AB officiellt grundat med visionen att erbjuda personlig och professionell mäklartjänst.'))));

      // Append the aboutContainer to the body
      document.body.appendChild(aboutContainer);

      // Function to create a press release element
      function createPressRelease(title, content) {
        const pressRelease = document.createElement('div');
        pressRelease.innerHTML = `< h4 > ${title}</h4 > <p>${content}</p>`;
        return pressRelease;
      }

      // Function to create a section with information items
      function createSection(sectionTitle, ...items) {
        const section = document.createElement('div');
        section.innerHTML = `< h3 > ${sectionTitle}</h3 > `;
        items.forEach(item => section.appendChild(item));
        return section;
      }

      // Function to create an information item
      function createInfoItem(...info) {
        const infoItem = document.createElement('div');
        info.forEach(item => {
          const p = document.createElement('p');
          p.textContent = item;
          infoItem.appendChild(p);
        });
        return infoItem;
      }

      // Function to create a contact information item
      function createContactItem(...info) {
        return createInfoItem(...info);
      }

      // Function to create a press event item
      function createPressEvent(...info) {
        return createInfoItem(...info);
      }

      // Function to create a testimonial item
      function createTestimonial(testimonial, author) {
        const testimonialItem = document.createElement('div');
        const p = document.createElement('p');
        p.innerHTML = `"${testimonial}" - ${author} `;
        testimonialItem.appendChild(p);
        return testimonialItem;
      }

      // Function to create a collapsible button
      function createCollapsibleButton(buttonText, content) {
        const collapsibleButton = document.createElement('button');
        collapsibleButton.type = 'button';
        collapsibleButton.className = 'collapsible';
        collapsibleButton.textContent = buttonText;

        const collapsibleContent = document.createElement('div');
        collapsibleContent.className = 'content';
        collapsibleContent.appendChild(content);

        collapsibleButton.addEventListener('click', function () {
          this.classList.toggle('active');
          if (collapsibleContent.style.maxHeight) {
            collapsibleContent.style.maxHeight = null;
          } else {
            collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
          }
        });

        const collapsibleContainer = document.createElement('div');
        collapsibleContainer.appendChild(collapsibleButton);
        collapsibleContainer.appendChild(collapsibleContent);

        return collapsibleContainer;
      }

      // Function to create a news archive
      function createNewsArchive(...entries) {
        const newsArchive = document.createElement('div');
        for (const i = 0; i < entries.length; i += 2) {
          const h4 = document.createElement('h4');
          h4.textContent = entries[i];
          const p = document.createElement('p');
          p.textContent = entries[i + 1];
          newsArchive.appendChild(h4);
          newsArchive.appendChild(p);
        }
        return newsArchive;
      }
    });
    return (press)
  })
};
*/

/*export default function () {
  return 
  document.addEventListener('DOMContentLoaded', function () {
    // Create main container
    const aboutContainer = document.createElement('div');
    aboutContainer.className = 'about';

    // Add press releases
    aboutContainer.appendChild(createPressRelease('[Stockholm, September, 2023] Code Busters AB Firar Fem Års Jubileum och Stark Tillväxt',
      'Code Busters AB grundades den 15 september 2018 med målet att erbjuda personlig och professionell mäklartjänst av hög kvalitet. Under de senaste fem åren har företaget konsekvent överträffat förväntningarna och etablerat sig som en pålitlig aktör på fastighetsmarknaden.'));

    aboutContainer.appendChild(createPressRelease('[Stockholm, April, 2023] Stark Tillväxt och Kundtillfredsställelse:',
      'Med en dedikerad grupp av fyra erfarna mäklare har Code Busters AB uppnått betydande tillväxt och har erhållit utmärkelser för hög kundtillfredsställelse. Bolaget är stolt över att ha hjälpt många kunder att hitta sina drömhem och maximera värdena för sina fastigheter.'));

    aboutContainer.appendChild(createPressRelease('[Stockholm, January, 2023] Vision för Framtiden',
      'Sam Nouman, VD för Code Busters AB, uttrycker sin entusiasm över företagets framgång och ser fram emot att fortsätta erbjuda högkvalitativa mäkleri-tjänster. Företaget planerar att expandera sitt verksamhetsområde och introducera innovativa lösningar för att möta de ständigt föränderliga behoven på fastighetsmarknaden.'));

    // Add company information
    aboutContainer.appendChild(createSection('Företagsinformation:',
      createInfoItem('Översikt av Code Busters AB', 'Grundades: 15 september 2018', 'Antal Mäklare: 4', 'VD: Sam Nouman', 'Företagets Mål: Att erbjuda personlig och professionell mäklartjänst av hög kvalitet.')));

    // Add contact information
    aboutContainer.appendChild(createSection('Kontaktinformation:',
      createContactItem('Presskontakt: Linus Lindbroth', 'E-post: press@codebusters.se', 'Telefon: +46 123 456 643')));

    // Add press events
    aboutContainer.appendChild(createSection('Presshändelser:',
      createPressEvent('Nästa Fastighetsvisning: Code Bustesrs AB Presenterar Exklusiva Bostäder', 'Datum: 10 February 2024', 'Tid: 14:00', 'Plats: Code Busters AB office, Årstaängsvägen 33 117 43, Stockholm')));

    // Add awards and recognitions
    aboutContainer.appendChild(createSection('Utmärkelser och Erkännanden:',
      createInfoItem('Code Busters AB Vinner Branschpriset för Bästa Kundtillfredsställelse', 'Alexandra Filipsson Nominerad Till Årets Mäklare')));

    // Add testimonials
    aboutContainer.appendChild(createSection('Vittnesmål och Kundframgångshistorier:',
      createTestimonial('Vi hade nöjet att köpa vårt drömhus med Code Busters AB. Deras team förstod verkligen våra behov och guidade oss genom constje steg av köpprocessen. Vi är så glada över att ha valt dem och ser fram emot att skapa många minnen i vårt nya hem.', '- Johan och Maria, köpare.'),
      createTestimonial('Att sälja mitt hem med Code Busters AB const en fantastisk upplevelse. Deras professionalism och dedikation gjorde hela processen smidig och stressfri. Jag är tacksam för deras engagemang och rekommenderar dem starkt till alla som letar efter pålitliga mäklare.', '- Anna, säljare.'),
      createTestimonial('Code Busters AB hjälpte oss att hitta det perfekta hemmet för vår familj. Deras personliga engagemang och förståelse för våra önskemål gjorde att vi kände oss trygga genom hela processen. Vi är evigt tacksamma för deras hjälp.', '- Familjen Andersson.')));

    // Add social media
    aboutContainer.appendChild(createSection('Sociala Medier:',
      createInfoItem('Instagram: CodeBustersAB', 'Linked In: linkedin.com/in/CodeBustersAB')));

    // Add news archive
    aboutContainer.appendChild(createSection('Nyhetsarkiv:',
      createCollapsibleButton('Arkiv',
        createNewsArchive('15 december 2022 - Årets Mäklare Nominering:', 'Karl Loe nomineras till Årets Mäklare och bidrar till företagets framstående rykte.',
          '2 oktober 2022 - Code Busters AB Vinner Hållbarhetspriset:', 'Företaget erkänns för sitt engagemang för hållbarhet och vinner ett branschpris inom detta område.',
          '20 januari 2021 - Digitala Innovationer inom Mäkleri:', 'Code Busters AB introducerar innovativa digitala lösningar för att förbättra kundupplevelsen.',
          '10 mars 2019 - Utmärkelse för Kundtillfredsställelse:', 'Code Busters AB belönas med branschpris för enastående kundtillfredsställelse.',
          '1 oktober 2018 - Första Framgångsrika Fastighetsförsäljningen:', 'Företagets första stora framgång med en snabb och framgångsrik fastighetsförsäljning.',
          '15 september 2018 - Företagets Grundande:', 'Code Busters AB officiellt grundat med visionen att erbjuda personlig och professionell mäklartjänst.'))));

    // Append the aboutContainer to the body
    document.querySelector('main').innerHTML = '';
    document.querySelector('main').appendChild(aboutContainer);

    // Function to create a press release element
    function createPressRelease(title, content) {
      const pressRelease = document.createElement('div');
      pressRelease.innerHTML = `< h4 > ${ title }</h4 > <p>${content}</p>`;
      return pressRelease;
    }

    // Function to create a section with information items
    function createSection(sectionTitle, ...items) {
      const section = document.createElement('div');
      section.innerHTML = `< h3 > ${ sectionTitle }</h3 > `;
      items.forEach(item => section.appendChild(item));
      return section;
    }

    // Function to create an information item
    function createInfoItem(...info) {
      const infoItem = document.createElement('div');
      info.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        infoItem.appendChild(p);
      });
      return infoItem;
    }

    // Function to create a contact information item
    function createContactItem(...info) {
      return createInfoItem(...info);
    }

    // Function to create a press event item
    function createPressEvent(...info) {
      return createInfoItem(...info);
    }

    // Function to create a testimonial item
    function createTestimonial(testimonial, author) {
      const testimonialItem = document.createElement('div');
      const p = document.createElement('p');
      p.innerHTML = `"${testimonial}" - ${ author } `;
      testimonialItem.appendChild(p);
      return testimonialItem;
    }

    // Function to create a collapsible button
    function createCollapsibleButton(buttonText, content) {
      const collapsibleButton = document.createElement('button');
      collapsibleButton.type = 'button';
      collapsibleButton.className = 'collapsible';
      collapsibleButton.textContent = buttonText;

      const collapsibleContent = document.createElement('div');
      collapsibleContent.className = 'content';
      collapsibleContent.appendChild(content);

      collapsibleButton.addEventListener('click', function () {
        this.classList.toggle('active');
        if (collapsibleContent.style.maxHeight) {
          collapsibleContent.style.maxHeight = null;
        } else {
          collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
        }
      });

      const collapsibleContainer = document.createElement('div');
      collapsibleContainer.appendChild(collapsibleButton);
      collapsibleContainer.appendChild(collapsibleContent);

      return collapsibleContainer;
    }

    // Function to create a news archive
    function createNewsArchive(...entries) {
      const newsArchive = document.createElement('div');
      for (let i = 0; i < entries.length; i += 2) {
        const h4 = document.createElement('h4');
        h4.textContent = entries[i];
        const p = document.createElement('p');
        p.textContent = entries[i + 1];
        newsArchive.appendChild(h4);
        newsArchive.appendChild(p);
      }
      return newsArchive;
    }
  });
  
}*/

/*
export default function setupPressPage() {
  return (function () {

    document.addEventListener('DOMContentLoaded', function () {
      // Create main container
      const aboutContainer = document.createElement('div');
      aboutContainer.className = 'about';

      // Add press releases
      aboutContainer.appendChild(createPressRelease('[Stockholm, September, 2023] Code Busters AB Firar Fem Års Jubileum och Stark Tillväxt',
        'Code Busters AB grundades den 15 september 2018 med målet att erbjuda personlig och professionell mäklartjänst av hög kvalitet. Under de senaste fem åren har företaget konsekvent överträffat förväntningarna och etablerat sig som en pålitlig aktör på fastighetsmarknaden.'));

      aboutContainer.appendChild(createPressRelease('[Stockholm, April, 2023] Stark Tillväxt och Kundtillfredsställelse:',
        'Med en dedikerad grupp av fyra erfarna mäklare har Code Busters AB uppnått betydande tillväxt och har erhållit utmärkelser för hög kundtillfredsställelse. Bolaget är stolt över att ha hjälpt många kunder att hitta sina drömhem och maximera värdena för sina fastigheter.'));

      aboutContainer.appendChild(createPressRelease('[Stockholm, January, 2023] Vision för Framtiden',
        'Sam Nouman, VD för Code Busters AB, uttrycker sin entusiasm över företagets framgång och ser fram emot att fortsätta erbjuda högkvalitativa mäkleri-tjänster. Företaget planerar att expandera sitt verksamhetsområde och introducera innovativa lösningar för att möta de ständigt föränderliga behoven på fastighetsmarknaden.'));

      // Add company information
      aboutContainer.appendChild(createSection('Företagsinformation:',
        createInfoItem('Översikt av Code Busters AB', 'Grundades: 15 september 2018', 'Antal Mäklare: 4', 'VD: Sam Nouman', 'Företagets Mål: Att erbjuda personlig och professionell mäklartjänst av hög kvalitet.')));

      // Add contact information
      aboutContainer.appendChild(createSection('Kontaktinformation:',
        createContactItem('Presskontakt: Linus Lindbroth', 'E-post: press@codebusters.se', 'Telefon: +46 123 456 643')));

      // Add press events
      aboutContainer.appendChild(createSection('Presshändelser:',
        createPressEvent('Nästa Fastighetsvisning: Code Bustesrs AB Presenterar Exklusiva Bostäder', 'Datum: 10 February 2024', 'Tid: 14:00', 'Plats: Code Busters AB office, Årstaängsvägen 33 117 43, Stockholm')));

      // Add awards and recognitions
      aboutContainer.appendChild(createSection('Utmärkelser och Erkännanden:',
        createInfoItem('Code Busters AB Vinner Branschpriset för Bästa Kundtillfredsställelse', 'Alexandra Filipsson Nominerad Till Årets Mäklare')));

      // Add testimonials
      aboutContainer.appendChild(createSection('Vittnesmål och Kundframgångshistorier:',
        createTestimonial('Vi hade nöjet att köpa vårt drömhus med Code Busters AB. Deras team förstod verkligen våra behov och guidade oss genom constje steg av köpprocessen. Vi är så glada över att ha valt dem och ser fram emot att skapa många minnen i vårt nya hem.', '- Johan och Maria, köpare.'),
        createTestimonial('Att sälja mitt hem med Code Busters AB const en fantastisk upplevelse. Deras professionalism och dedikation gjorde hela processen smidig och stressfri. Jag är tacksam för deras engagemang och rekommenderar dem starkt till alla som letar efter pålitliga mäklare.', '- Anna, säljare.'),
        createTestimonial('Code Busters AB hjälpte oss att hitta det perfekta hemmet för vår familj. Deras personliga engagemang och förståelse för våra önskemål gjorde att vi kände oss trygga genom hela processen. Vi är evigt tacksamma för deras hjälp.', '- Familjen Andersson.')));

      // Add social media
      aboutContainer.appendChild(createSection('Sociala Medier:',
        createInfoItem('Instagram: CodeBustersAB', 'Linked In: linkedin.com/in/CodeBustersAB')));

      // Add news archive
      aboutContainer.appendChild(createSection('Nyhetsarkiv:',
        createCollapsibleButton('Arkiv',
          createNewsArchive('15 december 2022 - Årets Mäklare Nominering:', 'Karl Loe nomineras till Årets Mäklare och bidrar till företagets framstående rykte.',
            '2 oktober 2022 - Code Busters AB Vinner Hållbarhetspriset:', 'Företaget erkänns för sitt engagemang för hållbarhet och vinner ett branschpris inom detta område.',
            '20 januari 2021 - Digitala Innovationer inom Mäkleri:', 'Code Busters AB introducerar innovativa digitala lösningar för att förbättra kundupplevelsen.',
            '10 mars 2019 - Utmärkelse för Kundtillfredsställelse:', 'Code Busters AB belönas med branschpris för enastående kundtillfredsställelse.',
            '1 oktober 2018 - Första Framgångsrika Fastighetsförsäljningen:', 'Företagets första stora framgång med en snabb och framgångsrik fastighetsförsäljning.',
            '15 september 2018 - Företagets Grundande:', 'Code Busters AB officiellt grundat med visionen att erbjuda personlig och professionell mäklartjänst.'))));

      // Append the aboutContainer to the body
      document.body.appendChild(aboutContainer);

      // Function to create a press release element
      function createPressRelease(title, content) {
        const pressRelease = document.createElement('div');
        pressRelease.innerHTML = `<h4>${title}</h4><p>${content}</p>`;
        return pressRelease;
      }

      // Function to create a section with information items
      function createSection(sectionTitle, ...items) {
        const section = document.createElement('div');
        section.innerHTML = `<h3>${sectionTitle}</h3>`;
        items.forEach(item => section.appendChild(item));
        return section;
      }

      // Function to create an information item
      function createInfoItem(...info) {
        const infoItem = document.createElement('div');
        info.forEach(item => {
          const p = document.createElement('p');
          p.textContent = item;
          infoItem.appendChild(p);
        });
        return infoItem;
      }

      // Function to create a contact information item
      function createContactItem(...info) {
        return createInfoItem(...info);
      }

      // Function to create a press event item
      function createPressEvent(...info) {
        return createInfoItem(...info);
      }

      // Function to create a testimonial item
      function createTestimonial(testimonial, author) {
        const testimonialItem = document.createElement('div');
        const p = document.createElement('p');
        p.innerHTML = `"${testimonial}" - ${author} `;
        testimonialItem.appendChild(p);
        return testimonialItem;
      }

      // Function to create a collapsible button
      function createCollapsibleButton(buttonText, content) {
        const collapsibleButton = document.createElement('button');
        collapsibleButton.type = 'button';
        collapsibleButton.className = 'collapsible';
        collapsibleButton.textContent = buttonText;

        const collapsibleContent = document.createElement('div');
        collapsibleContent.className = 'content';
        collapsibleContent.appendChild(content);

        collapsibleButton.addEventListener('click', function () {
          this.classList.toggle('active');
          if (collapsibleContent.style.maxHeight) {
            collapsibleContent.style.maxHeight = null;
          } else {
            collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
          }
        });

        const collapsibleContainer = document.createElement('div');
        collapsibleContainer.appendChild(collapsibleButton);
        collapsibleContainer.appendChild(collapsibleContent);

        return collapsibleContainer;
      }

      // Function to create a news archive
      function createNewsArchive(...entries) {
        const newsArchive = document.createElement('div');
        for (let i = 0; i < entries.length; i += 2) {
          const h4 = document.createElement('h4');
          h4.textContent = entries[i];
          const p = document.createElement('p');
          p.textContent = entries[i + 1];
          newsArchive.appendChild(h4);
          newsArchive.appendChild(p);
        }
        return newsArchive;
      }
    });
  })();
}

// Call the setupPressPage function to initialize the press page
setupPressPage();

*/

export default function setupPressPage() {
  // Create main container
  const aboutContainer = document.createElement('div');
  aboutContainer.className = 'about';

  // Add press releases
  aboutContainer.appendChild(createPressRelease('[Stockholm, September, 2023] Code Busters AB Firar Fem Års Jubileum och Stark Tillväxt',
    'Code Busters AB grundades den 15 september 2018 med målet att erbjuda personlig och professionell mäklartjänst av hög kvalitet. Under de senaste fem åren har företaget konsekvent överträffat förväntningarna och etablerat sig som en pålitlig aktör på fastighetsmarknaden.'));

  aboutContainer.appendChild(createPressRelease('[Stockholm, April, 2023] Stark Tillväxt och Kundtillfredsställelse:',
    'Med en dedikerad grupp av fyra erfarna mäklare har Code Busters AB uppnått betydande tillväxt och har erhållit utmärkelser för hög kundtillfredsställelse. Bolaget är stolt över att ha hjälpt många kunder att hitta sina drömhem och maximera värdena för sina fastigheter.'));

  aboutContainer.appendChild(createPressRelease('[Stockholm, January, 2023] Vision för Framtiden',
    'Sam Nouman, VD för Code Busters AB, uttrycker sin entusiasm över företagets framgång och ser fram emot att fortsätta erbjuda högkvalitativa mäkleri-tjänster. Företaget planerar att expandera sitt verksamhetsområde och introducera innovativa lösningar för att möta de ständigt föränderliga behoven på fastighetsmarknaden.'));

  // Add company information
  aboutContainer.appendChild(createSection('Företagsinformation:',
    createInfoItem('Översikt av Code Busters AB', 'Grundades: 15 september 2018', 'Antal Mäklare: 4', 'VD: Sam Nouman', 'Företagets Mål: Att erbjuda personlig och professionell mäklartjänst av hög kvalitet.')));

  // Add contact information
  aboutContainer.appendChild(createSection('Kontaktinformation:',
    createContactItem('Presskontakt: Linus Lindbroth', 'E-post: press@codebusters.se', 'Telefon: +46 123 456 643')));

  // Add press events
  aboutContainer.appendChild(createSection('Presshändelser:',
    createPressEvent('Nästa Fastighetsvisning: Code Bustesrs AB Presenterar Exklusiva Bostäder', 'Datum: 10 February 2024', 'Tid: 14:00', 'Plats: Code Busters AB office, Årstaängsvägen 33 117 43, Stockholm')));

  // Add awards and recognitions
  aboutContainer.appendChild(createSection('Utmärkelser och Erkännanden:',
    createInfoItem('Code Busters AB Vinner Branschpriset för Bästa Kundtillfredsställelse', 'Alexandra Filipsson Nominerad Till Årets Mäklare')));

  // Add testimonials
  aboutContainer.appendChild(createSection('Vittnesmål och Kundframgångshistorier:',
    createTestimonial('Vi hade nöjet att köpa vårt drömhus med Code Busters AB. Deras team förstod verkligen våra behov och guidade oss genom constje steg av köpprocessen. Vi är så glada över att ha valt dem och ser fram emot att skapa många minnen i vårt nya hem.', '- Johan och Maria, köpare.'),
    createTestimonial('Att sälja mitt hem med Code Busters AB const en fantastisk upplevelse. Deras professionalism och dedikation gjorde hela processen smidig och stressfri. Jag är tacksam för deras engagemang och rekommenderar dem starkt till alla som letar efter pålitliga mäklare.', '- Anna, säljare.'),
    createTestimonial('Code Busters AB hjälpte oss att hitta det perfekta hemmet för vår familj. Deras personliga engagemang och förståelse för våra önskemål gjorde att vi kände oss trygga genom hela processen. Vi är evigt tacksamma för deras hjälp.', '- Familjen Andersson.')));

  // Add social media
  aboutContainer.appendChild(createSection('Sociala Medier:',
    createInfoItem('Instagram: CodeBustersAB', 'Linked In: linkedin.com/in/CodeBustersAB')));

  // Add news archive
  aboutContainer.appendChild(createSection('Nyhetsarkiv:',
    createCollapsibleButton('Arkiv',
      createNewsArchive('15 december 2022 - Årets Mäklare Nominering:', 'Karl Loe nomineras till Årets Mäklare och bidrar till företagets framstående rykte.',
        '2 oktober 2022 - Code Busters AB Vinner Hållbarhetspriset:', 'Företaget erkänns för sitt engagemang för hållbarhet och vinner ett branschpris inom detta område.',
        '20 januari 2021 - Digitala Innovationer inom Mäkleri:', 'Code Busters AB introducerar innovativa digitala lösningar för att förbättra kundupplevelsen.',
        '10 mars 2019 - Utmärkelse för Kundtillfredsställelse:', 'Code Busters AB belönas med branschpris för enastående kundtillfredsställelse.',
        '1 oktober 2018 - Första Framgångsrika Fastighetsförsäljningen:', 'Företagets första stora framgång med en snabb och framgångsrik fastighetsförsäljning.',
        '15 september 2018 - Företagets Grundande:', 'Code Busters AB officiellt grundat med visionen att erbjuda personlig och professionell mäklartjänst.'))));

  // Append the aboutContainer to the body
  document.querySelector("main").appendChild(aboutContainer);

  // Function to create a press release element
  function createPressRelease(title, content) {
    const pressRelease = document.createElement('div');
    pressRelease.innerHTML = `<h4>${title}</h4><p>${content}</p>`;
    return pressRelease;
  }

  // Function to create a section with information items
  function createSection(sectionTitle, ...items) {
    const section = document.createElement('div');
    section.innerHTML = `<h3>${sectionTitle}</h3>`;
    items.forEach(item => section.appendChild(item));
    return section;
  }

  // Function to create an information item
  function createInfoItem(...info) {
    const infoItem = document.createElement('div');
    info.forEach(item => {
      const p = document.createElement('p');
      p.textContent = item;
      infoItem.appendChild(p);
    });
    return infoItem;
  }

  // Function to create a contact information item
  function createContactItem(...info) {
    return createInfoItem(...info);
  }

  // Function to create a press event item
  function createPressEvent(...info) {
    return createInfoItem(...info);
  }

  // Function to create a testimonial item
  function createTestimonial(testimonial, author) {
    const testimonialItem = document.createElement('div');
    const p = document.createElement('p');
    p.innerHTML = `"${testimonial}" - ${author} `;
    testimonialItem.appendChild(p);
    return testimonialItem;
  }

  // ...

  // Function to create a collapsible button
  function createCollapsibleButton(buttonText, content) {
    const collapsibleButton = document.createElement('button');
    collapsibleButton.type = 'button';
    collapsibleButton.className = 'collapsible';
    collapsibleButton.textContent = buttonText;

    const collapsibleContent = document.createElement('div');
    collapsibleContent.className = 'content';
    collapsibleContent.appendChild(content);

    collapsibleButton.addEventListener('click', function () {
      this.classList.toggle('active');
      if (collapsibleContent.style.maxHeight) {
        collapsibleContent.style.maxHeight = null;
      } else {
        collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
      }
    });

    const collapsibleContainer = document.createElement('div');
    collapsibleContainer.appendChild(collapsibleButton);
    collapsibleContainer.appendChild(collapsibleContent);

    return collapsibleContainer;
  }

  // ...

  // Function to create a news archive
  function createNewsArchive(...entries) {
    const newsArchive = document.createElement('div');
    for (let i = 0; i < entries.length; i += 2) {
      const h4 = document.createElement('h4');
      h4.textContent = entries[i];
      const p = document.createElement('p');
      p.textContent = entries[i + 1];
      newsArchive.appendChild(h4);
      newsArchive.appendChild(p);
    }
    return newsArchive;
  }
}


