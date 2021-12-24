export default async function fetchCountries(BASE_URL, countryName) {
  try {
    const response = await fetch(`${BASE_URL}${countryName}`);
    if (!response.ok) {
      throw new Error("ERROR >>>>>");
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}
