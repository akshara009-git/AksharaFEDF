export let cart = [];

export function addToCart(book) {
  cart.push(book);
  parent.cartFrame.location.reload(); // refresh cart frame
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  parent.cartFrame.location.reload(); // refresh cart frame
}

export function calculateTotal() {
  return cart.reduce((sum, book) => sum + book.price, 0);
}
