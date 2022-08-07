const productsList = document.querySelector(".product-list");
const getProductsBtn = document.querySelector(".get-product-btn");

const state = {
  products: [],
};

const createProduct = (product, index) => {
  return `<div>${product.article}</div>`;
};

const fillProductsList = (products) => {
  productsList.innerHTML = "";

  products.forEach((product, index) => {
    productsList.innerHTML += createProduct(product, index);
  });
};

getProductsBtn.addEventListener("click", async () => {
  await getProductsRequest("http://127.0.0.1:5500/products/acqua-craft.json");
  await getProductsRequest("http://127.0.0.1:5500/products/atr-max.json");
  await getProductsRequest("http://127.0.0.1:5500/products/iberis.json");
  fillProductsList(state.products);
});

async function getProductsRequest(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((products) => {
      console.log("products", products);
      state.products = state.products.concat(products);
    });
}

// getProductsRequest("http://127.0.0.1:5500/products/acqua-craft.json");
// getProductsRequest("http://127.0.0.1:5500/products/atr-max.json");
// getProductsRequest("http://127.0.0.1:5500/products/iberis.json");

//const acquaCraft = fetch("http://127.0.0.1:5500/products/acqua-craft.json");
//const atrMax = fetch("http://127.0.0.1:5500/products/atr-max.json");
//const iberis = fetch("http://127.0.0.1:5500/products/iberis.json");

// async function getProducts() {
//   try {
//     let response = await fetch(
//       "http://127.0.0.1:5500/products/acqua-craft.json"
//     );
//     let products = await response.json();
//     console.log("products", products);
//     return products;
//   } catch (error) {
//     console.log(error); //=
//   }
// }

// let products = getProducts().then((data) => data)
// console.log("products", products);

// setTimeout(() => {
//   console.log("setTimeout products", products);
// }, 1000);
