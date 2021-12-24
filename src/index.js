import onInputChange from "./js/onInputChange";
import { debounce } from "lodash";
import { searchForm } from "./js/refs";

const onInputChangeDebounced = debounce(onInputChange, 1000);

searchForm.addEventListener("input", onInputChangeDebounced);