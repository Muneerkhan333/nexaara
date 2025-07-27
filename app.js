let products = [
  { id: 1, name: "Product A", price: 199 },
  { id: 2, name: "Product B", price: 299 },
  { id: 3, name: "Product C", price: 399 },
];
let cart = [];

window.onload = function () {
  const container = document.getElementById("products-container");
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Rs. ${product.price}</p>
      <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
};

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
  updateCartModal();
}

function updateCartModal() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - Rs. ${item.price}`;
    list.appendChild(li);
  });
}

function showCart() {
  document.getElementById("cart-modal").classList.add("show");
}

function hideCart() {
  document.getElementById("cart-modal").classList.remove("show");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
