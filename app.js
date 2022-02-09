// global imports
import "./src/toggleSidebar.js";
import "./src/toggleCart.js";
import "./src/setupCart.js";
// specific imports
import fetchProducts from "./src/fetch.js";
import { setupStore, store } from "./src/store.js";
import display from "./src/display.js";
import { getElement } from "./src/utils.js";

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement(".featured-center"));
  }
};

window.addEventListener("DOMContentLoaded", init);
