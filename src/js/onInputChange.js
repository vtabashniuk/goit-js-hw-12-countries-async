import { BASE_URL, countryRef } from "./refs";
import countryCard from "../templates/country-card.hbs";
import countryList from "../templates/country-list.hbs";
import * as notifyStickers from "./notifyStickers";
import fetchCountries from "./fetchCountries.js";

export default async function onInputChange(event) {
  const countryName = event.target.value;
  const country = await fetchCountries(BASE_URL, countryName);
  try {
    if (country.length > 10) {
      notifyStickers.tooMuch();
    } else if (country.length < 11 && country.length > 1) {
      countryRef.innerHTML = "";
      countryRef.insertAdjacentHTML("afterbegin", countryList(country));
    } else if (country.length === 1) {
      countryRef.innerHTML = "";
      countryRef.insertAdjacentHTML("afterbegin", countryCard(country));
    } else {
      throw new Error();
    }
  } catch (error) {
    countryRef.innerHTML = "";
    notifyStickers.nothingToShow();
  }
}
