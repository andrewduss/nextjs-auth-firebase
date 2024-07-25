export async function getZipcodes() {
  return await fetch(`/api/zipcodes`).then(
    (resp) => resp.json()
  ).catch((err) => {
    console.log(err)
  })
}