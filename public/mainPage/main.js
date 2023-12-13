
document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");

  const links = document.querySelectorAll(".header a");


  function loadContent(target) {
    const filePath = target.getAttribute("href").substring(1);


    if (filePath === "mainPage") {
      content.innerHTML = '<h1>Welcome to Code Busters</h1><p>This is the main content of your home page.</p>';
    } else {

      fetch(filePath + ".html")
        .then(response => response.text())
        .then(html => {
          content.innerHTML = html;
        });
    }
  }

  function changePage() {
    console.log('my page will be', location.hash);

    if (location.hash === "#contacts") {
      loadContent(document.querySelector(".footer a[href='#contacts']"));
    } else if (location.hash === "#aboutCodeBusters") {
      loadContent(document.querySelector(".footer a[href='#aboutCodeBusters']"));
    } else if (location.hash === "#press") {
      loadContent(document.querySelector(".footer a[href='#press']"));
    } else if (location.hash === "#broker") {
      loadContent(document.querySelector(".header a[href='#broker']"));
    } else {

      loadContent(document.querySelector(".header a[href='#mainPage']"));
    }
  }


  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      loadContent(link);
    });
  });

  window.addEventListener("hashchange", changePage);

  changePage();
});
