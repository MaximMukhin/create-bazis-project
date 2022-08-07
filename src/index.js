import { artMax, acquaCraft, iberis } from "../products/products.js";
const productsAll = [...artMax, ...acquaCraft, ...iberis];

//база артикулов
const products = productsAll;

let articles = []; // заказ клиента
let articlesObj = []; // заказ клиента

let toWork = []; // массив артикулов в работу
let articlesNotFound = []; // ненайденые артикулы в базе

let order = "";

const getOrderName = () => {
  order = document.getElementById("input-order").value;
};

// функция загрузки файла
const readFile = (input) => {
  articles = [];
  articlesObj = [];
  articlesNotFound = [];

  let file = input.files[0];

  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    const res = reader.result; //читаю файл
    const strSlice = res.split("\n"); //разбиваю на массив

    strSlice.forEach((el) => {
      articles.push(el); //добавляю в колекцию массив
    });

    document.getElementById("text-file").innerHTML = res;

    //разбиваю на обьект
    articlesPars(articles);
    objectToWork();
    console.log("toWork", toWork);
    outList();
    outList2();
    outList3();
    console.log("articlesObj", articlesObj);
    console.log("articlesNotFound", articlesNotFound);
  };
};

// разбиваем заказ клиента на обьекты
const articlesPars = (arr) => {
  //const result = []
  const arrPars = [];

  //разбиваю строки на масивы артикул + количество
  arr.forEach((el) => {
    arrPars.push(el.split("\t"));
  });

  arrPars.forEach((el) => {
    articlesObj.push({ article: el[0], qty: el[1].trim() });
  });

  //return result //=
};

//делаю обьект с сылками на заказ
const objectToWork = () => {
  toWork = [];
  for (const key of articlesObj) {
    const result = products.find((el) => el.article === key.article);
    console.log("result", result);
    if (key.article === result?.article) {
      toWork.push({
        article: key.article,
        qty: key.qty,
        link: result?.link,
        series: result?.series,
      });
    } else {
      articlesNotFound.push(key.article);
      console.log("Артикул не найден:", key.article);
    }
  }
};

const file = () => {
  let result = "";

  toWork.forEach((el) => {
    const text = `
    <File>
      <Type>0</Type>
      <Name>${el.link}</Name>
      <SubName/>
      <Sign>${el.article}</Sign>
      <Note/>
      <Comment/>
      <Count>${el.qty}</Count>
    </File>
    `;
    if (result === "") result = text;
    else result += text;
  });

  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<Document>
  <DataProject>
    <ListFiles>
    ${result}
      </ListFiles>
    <CuttingInfo>
      <Parameters/>
      <ProductCount>1</ProductCount>
    </CuttingInfo>
    <EstimateInfo/>
  </DataProject>
</Document>
`;

  return xml;
};

//отрисовка списка
const outList = () => {
  let out = "";

  articles.forEach((el) => {
    out += `<div>${el}</div>`;
  });

  document.getElementById("text-file-array").innerHTML = out;
};

//отрисовка списка
const outList2 = () => {
  let out2 = "";
  let count = 1;

  articlesObj.forEach((el) => {
    out2 += `<div>count:${count} art: ${el.article} - qty: ${el.qty}<div>`;
    count += 1;
  });

  document.getElementById("text-file-object").innerHTML = out2;
};

//отрисовка списка
const outList3 = () => {
  let out3 = "";

  articlesNotFound.forEach((el) => {
    out3 += `<div class="not-found-alarm">${el}<div>`;
  });

  document.getElementById("articlesf-not-found").innerHTML = out3;
};

// Скачка файла
const download = () => {
  getOrderName();
  let str = file();
  console.log(str);

  let link = document.createElement("a");
  link.download = `${order}.txt`;
  let blob = new Blob([str], { type: "text/plain" });
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
  console.log("download");
};

// функция Скачки
document.querySelector(".btn-download").addEventListener("click", download);

// запуск чтения файла
const inputFile = document.getElementById("input-file");
inputFile.addEventListener("change", () => {
  readFile(inputFile);
});
