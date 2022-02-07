import { getElement } from "./getElement.js";
import { allProductsUrl, singleProductUrl, fetchProducts } from "../fetch.js";
import { store, setupStore } from "./setupStore.js";
import display from "./display.js";

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement(".featured-center"));
  }
};
export default init;
