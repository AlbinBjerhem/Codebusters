// import users stuff here

const tempUsers = [
  {
    username: "admin",
    password: "admin",
    loggedIn: false
  }
]

const tempHousesForSale = [
  {

  }
]

const tempHousesSuggested = [
  
]

// Login Sida

const sectionLogin = document.createElement("section");
sectionLogin.id = "loginEstateAgent";
const sectionloginH2 = document.createElement("h2");
sectionloginH2.innerText = "Estate Agent Login";
sectionLogin.appendChild(sectionloginH2);

const loginForm = document.createElement("form");
loginForm.id = "loginForm";
const loginFormUsernameLabel = document.createElement("label");
loginFormUsernameLabel.innerText = "Username: ";
const loginUsernameInput = document.createElement("input");
loginUsernameInput.type = "text";
loginUsernameInput.id = "usernameInput";
loginUsernameInput.required = true;
const loginFormPasswordLabel = document.createElement("label");
loginFormPasswordLabel.innerText = "Password: ";
const loginPasswordInput = document.createElement("input");
loginPasswordInput.type = "text";
loginPasswordInput.id = "passwordInput";
loginPasswordInput.required = true;
const loginInputSubmit = document.createElement("input");
loginInputSubmit.type = "submit";
loginInputSubmit.value = "Log In";

loginForm.appendChild(loginFormUsernameLabel);
loginForm.appendChild(loginUsernameInput);
loginForm.appendChild(loginFormPasswordLabel);
loginForm.appendChild(loginPasswordInput);
loginForm.appendChild(loginInputSubmit);
sectionLogin.appendChild(loginForm);
document.body.appendChild(sectionLogin);

document.querySelector("#loginForm").addEventListener("submit",userLogin)
// In-Loggad Sida

const sectionLoggedIn = document.createElement("section");
sectionLoggedIn.id = "sectionEstateAgent";
const sectionLoggedInh2 = document.createElement("h2");
sectionLoggedInh2.innerText = "hej"
sectionLoggedIn.appendChild(sectionLoggedInh2);
document.body.appendChild(sectionLoggedIn);
sectionLoggedIn.style.display = "none";


//Login Function
function userLogin(event){
  event.preventDefault();
  const inputUsername = document.getElementById("usernameInput").value;
  const inputPassword = document.getElementById("passwordInput").value;
  const loginCorrect = tempUsers.some(tempUsers =>
    tempUsers.password == inputPassword && tempUsers.username == inputUsername)
  if (loginCorrect == true) {
    sectionLoggedIn.style.display = "block";
    sectionLogin.style.display = "none";
  }

}