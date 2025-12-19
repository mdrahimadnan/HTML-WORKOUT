let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addtocart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added!");
}

function showCart() {
  let box = document.getElementById("cart-items");
  if (!box) return;

  let total = 0;
  box.innerHTML = "";
  for (let i of cart) {
    box.innerHTML += `<p>${i.name} - $${i.price}</p>`;
    total += i.price;
  }
  document.getElementById("total").innerText = "total: $" + total;
}
