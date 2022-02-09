import "./src/toggleSidebar.js";
import "./src/toggleCart.js";
import "./src/setupCart.js";

//  filter imports
import setupSearch from "./src/setupSearch.js";
import setupCompanies from "./src/setupCompanies.js";
import setupPrice from "./src/setupPrice.js";

// specific imports
import { store } from "./src/store.js";
import display from "./src/display.js";
import { getElement } from "./src/utils.js";

const loading = getElement(".page-loading");

display(store, getElement(".products-container"));
setupSearch(store);
setupCompanies(store);
setupPrice(store);
loading.style.display = "none";
