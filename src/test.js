const getProductsBtn = document.querySelector(".get-product-btn");

const state = {
  products: [],
};

const createProduct = (product, index) => {
  `<div>${product.article}</div>`;
};

const fillProductsList = (products) => {
  productList.innerHTML = "";

  products.forEach((product, index) => {
    productList.innerHTML += createProduct(product, index);
  });
};

getProductsBtn.addEventListener("click", async () => {
  await getProductsRequest();
  fillProductsList(state.products);
});

function getProductsRequest() {
  return fetch("http://127.0.0.1:5500/products/acqua-craft.json", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((products) => {
      console.log("products", products);
      state.products = state.products.concat(products);
    });
}

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
