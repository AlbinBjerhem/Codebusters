/*export default function () {
  return `
   <h1>Welcome to Code Busters</h1>
    <p>This is the main content of your home page.</p>
  `

}*/
export default function setupMainPage() {
  // Create a container for the main content
  const mainContainer = document.createElement('div');
  mainContainer.className = 'main-container';

  // Add your main content here
  // For example:
  const mainTitle = document.createElement('h1');
  mainTitle.textContent = 'Welcome to Code Busters';
  mainContainer.appendChild(mainTitle);

  const mainParagraph = document.createElement('p');
  mainParagraph.textContent = 'This is the main content of your home page.';
  mainContainer.appendChild(mainParagraph);

  // Return the container with main content
  return mainContainer;
}






