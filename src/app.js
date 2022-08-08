import { artMax, acquaCraft, iberis } from "../products/products.js";
import articlesPars from "./module/articlesPars.js";
import textParsArrayList from "./module/textParsArrayList.js";
import textParsObjectList from "./module/textParsObjectList.js";
import articlesNotFoundList from "./module/articlesNotFoundList.js";
import downloadProject from "./module/downloadProject.js";
import productToWork from "./module/productToWork.js";
import readFile from "./module/readFile.js";

//база артикулов
const products = [...artMax, ...acquaCraft, ...iberis];
console.log("products", products);

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
  productsArr
    .then((productsArr) => {
      textParsArrayList(productsArr)
      const productObj = articlesPars(productsArr)
      textParsObjectList(productObj)
      const productWork = productToWork(productObj, products)
      articlesNotFoundList(productWork)
      console.log('productWork', productWork)
    })
});

// функция Скачки
document
  .querySelector(".btn-download")
  .addEventListener("click", downloadProject);
