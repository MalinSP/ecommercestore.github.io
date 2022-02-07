import formatPrice from "./priceFormat.js";
import addToCart from "./addToCart.js";

const display = (products, element) => {
  element.innerHTML = products
    .map((product) => {
      const { id, name, image, price } = product;
      return `<article class="product">
          <div class="product-container">
            <img src="${image}" class="product-img img" alt="${name}" />
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </article>`;
    })
    .join("");
  element.addEventListener("click", function (e) {
    const item = e.target.parentElement;
    if (item.classList.contains("product-cart-btn")) {
      addToCart(item.dataset.id);
    }
  });
};
export default display;
