import { getAllBostader, addNewBostader } from "./servertest";
console.log("Startar inne i test.js");

const allBostader = await getAllBostader()
console.log("inne i test.js - ", allBostader);

const h2 = document.createElement("h2")
h2.innerText = `${getAllBostader.adress}`;

document.querySelector("body").appendChild(h2)

await addNewBostader()