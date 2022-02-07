import { getElement } from "./src/getElement.js";
import { store, setupStore } from "./src/setupStore.js";
import { getStorageItem, setLocalStorage } from "./src/getStorage.js";
import init from "./src/init.js";

const toggleNav = getElement(".toggle-nav");
const sidebarOverlay = getElement(".sidebar-overlay");
const closeBtn = getElement(".sidebar-close");

toggleNav.addEventListener("click", () => {
  sidebarOverlay.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
});

//DOM
window.addEventListener("DOMContentLoaded", init);

// Cart
const cartOverlay = getElement(".cart-overlay");
const closeBtnCart = getElement(".cart-close");
const toggleCartBtn = getElement(".toggle-cart");

toggleCartBtn.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});
closeBtnCart.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});

const openCart = () => {
  cartOverlay.classList.add("show");
};
