const products = [
  { id: 1, name: "Laptop", price: 1500, stock: 5 },
  { id: 2, name: "Headphones", price: 100, stock: 10 },
  { id: 3, name: "Keyboard", price: 50, stock: 20 },
];

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product && product.stock > 0) {
    product.stock--;
    displayNotification('${product.name} added to cart successfully.');
    document.getElementById('stock${productId}').textContent =
      'In Stock: ${product.stock}';
  } else {
    alert('${product ? product.name : "this product"} is out of stock.');
  }
}

function displayNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.remove("d-none");
  setTimeout(() => {
    notification.classList.add("d-none");
  }, 3000);
}
