import { artMax, acquaCraft, iberis } from "../products/products.js";
import articlesPars from "./module/articlesPars.js";
//import textParsArrayList from "./module/textParsArrayList.js";
//import textParsObjectList from "./module/textParsObjectList.js";
//import articlesNotFoundList from "./module/articlesNotFoundList.js";
import downloadProject from "./module/downloadProject.js";
import readFile from "./module/readFile.js";


//база артикулов
const products = [...artMax, ...acquaCraft, ...iberis];
console.log("products", products);

// let articlesResult = []; // заказ клиента
// let articlesObj = []; // заказ клиента
// let toWork = []; // массив артикулов в работу
// let articlesNotFound = []; // ненайденые артикулы в базе

let order = "";

// получение номера заказа
const getOrderName = () => {
  order = document.getElementById("input-order").value;
  return order;
};

// запуск чтения файла
const inputFile = document.getElementById("input-file");
inputFile.addEventListener("change", () => {
  const productsArr = readFile(inputFile);
productsArr.then((productsArr) => {
    articlesPars(productsArr)
    console.log("productsArr", productsArr);
  })
});

// функция Скачки
document
  .querySelector(".btn-download")
  .addEventListener("click", downloadProject);
