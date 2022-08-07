console.log("start");

const getProduct = () => {
  console.log("center1");
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log("getProduct", json));
  console.log("center2");
};
getProduct();

console.log("end");
