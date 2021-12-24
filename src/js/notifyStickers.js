import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { alert } from "@pnotify/core";

function tooMuch() {
  alert({
    text: "Too many matches found! Please enter a more specific query!",
  });
}

function nothingToShow() {
  alert({
    text: "No matches found! Please try again!",
  });
}

export { tooMuch, nothingToShow };