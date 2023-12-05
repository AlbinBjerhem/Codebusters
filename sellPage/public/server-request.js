export async function getAllVindOptions() {

  const response = await fetch("/hissOptions")
  console.log("Respons - ", response)
  const result = response.json()
  console.log("Result -", result)
  return result
}