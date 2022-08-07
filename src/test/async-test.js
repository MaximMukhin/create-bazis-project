const getProduct = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log("getProduct", json));
};
getProduct();

const getProduct2 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log("getProduct2", data);
};
getProduct2();
