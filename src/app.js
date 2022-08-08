import { artMax, acquaCraft, iberis } from "../products/products.js";
import textParsArrayList from "./module/textParsArrayList.js";
import textParsObjectList from "./module/textParsObjectList.js";
import articlesNotFoundList from "./module/articlesNotFoundList.js";
import articlesPars from "./module/articlesPars.js";
import downloadProject from "./module/downloadProject.js";

//база артикулов
const products = [...artMax, ...acquaCraft, ...iberis];
console.log("products", products);

// let articles = []; // заказ клиента
// let articlesObj = []; // заказ клиента
// let toWork = []; // массив артикулов в работу
// let articlesNotFound = []; // ненайденые артикулы в базе

let order = "";

// получение номера заказа
const getOrderName = () => {
  order = document.getElementById("input-order").value;
  return order;
};
console.log("getOrderName", getOrderName());

// запуск чтения файла
const inputFile = document.getElementById("input-file");
inputFile.addEventListener("change", () => {
  readFile(inputFile);
});

// функция Скачки
document
  .querySelector(".btn-download")
  .addEventListener("click", downloadProject);
