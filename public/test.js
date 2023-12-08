import { getAllBostader, addNewBostader } from "./servertest.js";

const bostader = await getAllBostader()
console.log(bostader)
console.log(bostader[1])
console.log(bostader[1].adress)


const bostad = {
  "id": 5,
  "pris": 50,
  "adress": "Götgatan 85"
}

await addNewBostader(bostad)














/*console.log(" Ska starta i test.js");

const allBostader = await getAllBostader()
console.log("inne i test.js - ", allBostader);

const h2 = document.createElement("h2")
h2.innerText = `${getAllBostader[0].adress}`;
console.log("Adress för första bostaden:", allBostader[0].adress);

document.querySelector("body").appendChild(h2)

await addNewBostader()
*/