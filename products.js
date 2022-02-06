import { getElement } from "./src/getElement.js";
import {
  toggleCartBtn,
  display,
  store,
  setupStore,
  fetchProducts,
} from "./app.js";

const loading = getElement(".page-loading");
display(store, getElement(".products-container"));
loading.style.display = "none";
