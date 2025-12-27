/* ===== CART (GLOBAL & SAFE) ===== */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.innerText = cart.length;
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart!");
}

updateCartCount();

/* ===== PRODUCTS DATA ===== */
const products = [
  { name: "Stress Ball", price: 50, category: "Stress Relief" },
  { name: "Fidget Spinner", price: 60, category: "Focus" },
  { name: "Infinity Cube", price: 80, category: "Focus" },
  { name: "Pop It Toy", price: 40, category: "Anxiety" },
  { name: "Sensory Bottle", price: 70, category: "Calming" },
  { name: "Magnetic Balls", price: 90, category: "Stress Relief" }
];

/* ===== RENDER PRODUCTS (ONLY IF PAGE HAS THEM) ===== */
const productList = document.getElementById("product-list");

function renderProducts(items) {
  if (!productList) return;

  productList.innerHTML = "";
  items.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>${p.category}</p>
        <p>₹${p.price}</p>
        <button onclick="addToCart('${p.name}', ${p.price})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

if (productList) {
  renderProducts(products);

  document.getElementById("search").addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    renderProducts(products.filter(p =>
      p.name.toLowerCase().includes(value)
    ));
  });

  document.getElementById("category").addEventListener("change", e => {
    const cat = e.target.value;
    if (cat === "all") renderProducts(products);
    else renderProducts(products.filter(p => p.category === cat));
  });
}
