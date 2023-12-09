
export async function getAllBostader() {
  const response = await fetch("/bostad");
  console.log("Respons - ", response)
  const result = await response.json()
  console.log("Result - ", result)
  return result
}

export async function addNewBostader(newBostad) {
  const response = await fetch("/bostad", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBostad)
  })

  console.log("Respons - ", response)
  const result = await response.json()
  console.log("Result - ", result)
  return result
}