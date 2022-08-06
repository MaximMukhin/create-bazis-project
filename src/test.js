async function getProducts() {
  try {
    let response = await fetch(
      "http://127.0.0.1:5500/products/acqua-craft.json"
    );
    let products = await response.json();
    console.log("products", products);
    return products;
  } catch (error) {
    console.log(error);
  }
}

let arr = getProducts().then((data) => console.log("data", data));
console.log("arr", arr);
