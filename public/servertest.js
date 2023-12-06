import { application } from "express";

export async function getAllBostader() {
  const response = await fetch("/bostader");
  console.log("Respons - ", response)
  const result = response.json()
  console.log("Result - ", result)
  return result
}

export async function addNewBostader() {
  const response = await fetch("/bostader", {
    method: "post",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({
      "id": 1,
      "pris": 50,
      "adress": "Götgatan 85"
    })
  })

  console.log("Respons - ", response)
  const result = await response.json()
  console.log("Result - ", result)
  return result
}