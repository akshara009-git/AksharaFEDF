import { calculateTotal, removeFromCart, cart } from './cart.js';

export function updateCartUI(cartData) {
  const cartItemsDiv = document.getElementById("cartItems");
  const cartTotalDiv = document.getElementById("cartTotal");
  cartItemsDiv.innerHTML = "";

  cartData.forEach((book, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <span>${book.title} - ₹${book.price}</span>
      <button onclick="removeItemHandler(${index})">Remove</button>
    `;
    cartItemsDiv.appendChild(itemDiv);
  });

  cartTotalDiv.textContent = `Total: ₹${calculateTotal()}`;
}

window.removeItemHandler = (idx) => {
  import('./cart.js').then(({ removeFromCart }) => {
    removeFromCart(idx);
  });
};
