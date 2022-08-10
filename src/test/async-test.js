//const getProduct = () => {
//  fetch("https://jsonplaceholder.typicode.com/todos/1")
//    .then((response) => response.json())
//    .then((json) => console.log("getProduct", json));
//};
//getProduct();

const getProducts = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("getProducts", data);
  return data;
};

getProducts("https://jsonplaceholder.typicode.com/todos/1").then(
  (dataPromise) => {
    console.log("dataPromise", dataPromise);
  }
);

getProducts("https://jsonplaceholder.typicode.com/todos/2").then(
  (dataPromise) => {
    console.log("dataPromise", dataPromise);
  }
);
