import { getElement } from "./src/getElement.js";
import display from "./src/display.js";
import { store, setupStore } from "./src/setupStore.js";

const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");
  form.addEventListener("keyup", function () {
    const value = nameInput.value;
  });
};

// //
const loading = getElement(".page-loading");
display(store, getElement(".products-container"));
setupStore(store);
loading.style.display = "none";
