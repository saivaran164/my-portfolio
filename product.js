// List of sample products
const products = [
  { name: "Phone", category: "electronics", price: 500, rating: 4.5 },
  { name: "Shirt", category: "clothing", price: 30, rating: 4.0 },
  { name: "Laptop", category: "electronics", price: 1200, rating: 4.8 },
  { name: "Jeans", category: "clothing", price: 50, rating: 4.2 },
  { name: "Headphones", category: "electronics", price: 150, rating: 4.3 },
];

// Display products in the DOM
function displayProducts(productArray) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  if (productArray.length === 0) {
    productList.innerHTML = "<li>No products found</li>";
    return;
  }

  productArray.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price} -  ${product.rating}`;
    productList.appendChild(li);
  });
}

// Filter and sort logic
function filterAndSortProducts() {
  const category = document.getElementById("categoryFilter").value;
  const sortBy = document.getElementById("sort").value;

  let filteredProducts = [...products];

  // Filter by category
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  // Sort products
  if (sortBy === "price") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filteredProducts);
}

// Add event listeners to dropdowns
document.getElementById("categoryFilter").addEventListener("change", filterAndSortProducts);
document.getElementById("sort").addEventListener("change", filterAndSortProducts);

// Initial render
displayProducts(products);