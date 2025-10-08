import { books } from './data.js';

export function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `
    <div class="book-info">
        <img src="${book.imageUrl}" alt="Cover of ${book.title}" class="book-cover"> 
        <div>
      <div>
        <strong>${book.title}</strong><br>
        <small>${book.author}</small><br>
        ₹${book.price}
      </div>
      <div>
        ${book.availability === "in stock"
          ? `<button onclick="parent.addToCartHandler(${index})">Add</button>`
          : `<span style="color:red;">Out of Stock</span>`
        }
      </div>
    `;
    bookList.appendChild(bookDiv);
  });
}

// global handler
window.parent.addToCartHandler = (idx) => {
  import('./data.js').then(({ books }) => {
    parent.addToCart(books[idx]); 
  });
};
