import { artMax, acquaCraft, iberis } from './products.js'

const productsAll = [...artMax, ...acquaCraft, ...iberis]
console.log('productsAll', productsAll)

// база артикулов
const products = productsAll
// const products = [
//   {
//     article: "ADELINA-P-T02-60-2B-MR960",
//     series: "ADELINA-P-T02",
//     link: "\\Серия\\AcquaCraft\\Bella\\Bella_SF027\\Bella-F21L-106-SF027.b3d",
//   },
//   {
//     article: "BELLA-L-F21-106-SF027-L",
//     series: "BELLA-L-F21",
//     link: "\\Серия\\AcquaCraft\\Bella\\Bella_SF027\\Bella-F21L-106-SF027.b3d",
//   },
//   {
//     article: "AURORA-800-2C-SO-RT",
//     series: "Aurora",
//     link: "\\Серия\\Мебель для ванной\\AU_KR\\(RT) Rovere Tabacco - Дуб Галифакс табак H1181 ST37\\AU45-80_RT.b3d",
//   },
//   {
//     article: "CADRO-80-1C-SO-BG-BLUM",
//     series: "Cadro",
//     link: "\\Серия\\Мебель для ванной\\Cadro\\(BG) Bianco Ghiaccio - Белый лёд Atlas OSS\\Cadro-80_BG.b3d",
//   },
//   {
//     article: "KRAFT 39-500/390-2C-SO-BO",
//     series: "Kraft 39",
//     link: "\\Серия\\Мебель для ванной\\AU_KR\\(BO) Bianco Opaco - Белый базовый W908 SM\\KR39-50_BO.b3d",
//   },
//   {
//     article: "KRAFT 39-500/390-2C-SO-CG",
//     series: "Kraft 39",
//     link: "\\Серия\\Мебель для ванной\\AU_KR\\(CG) Cemento Grigio - Бетон D3274 SM\\KR39-50_CG.b3d",
//   },
//   {
//     article: "KRAFT 39-500/390-2C-SO-RNN",
//     series: "Kraft 39",
//     link: "\\Серия\\Мебель для ванной\\AU_KR\\(RNN) Rovere Nebrasca Nature - Дуб Небраска натуральный H3331 ST10\\KR39-50_RNN.b3d",
//   },
// ];

// заказ клиента
// const articles = [
//   'AURORA-800-2C-SO-RT	7',
//   'CADRO-80-1C-SO-BG-BLUM	3',
//   'KRAFT 39-500/390-2C-SO-BO	5',
//   'KRAFT 39-500/390-2C-SO-CG	5',
//   'KRAFT 39-500/390-2C-SO-RNN	13',
// ];
// 
// const articlesObj = [
//   {
//     article: "AURORA-800-2C-SO-RT",
//     qty: "7"
//   },
//   {
//     article: "CADRO-80-1C-SO-BG-BLUM",
//     qty: "3"
//   },
//   {
//     article: "KRAFT 39-500/390-2C-SO-BO",
//     qty: "5"
//   },
//   {
//     article: "KRAFT 39-500/390-2C-SO-CG",
//     qty: "5"
//   },
//   {
//     article: "KRAFT 39-500/390-2C-SO-RNN",
//     qty: "13"
//   }
// ];

let articles = []; // заказ клиента
let articlesObj = []; // заказ клиента

const toWork = [];

// функция загрузки файла
export function readFile(input) {
  articles = [];
  articlesObj = [];

  let file = input.files[0];

  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    //читаю файл
    const res = reader.result;
    //разбиваю на массив
    const strSlice = res.split("\n");
    //console.log('strSlice', strSlice)

    //добавляю в колекцию массив
    for (let i = 0; i < strSlice.length; i++) {
      articles.push(strSlice[i]);
    }
    document.getElementById("text-file").innerHTML = res;

    //разбиваю на обьект
    articlesPars(articles);
    objectToWork()
    console.log('toWork', toWork)
    outList();
    outList2();
    console.log('articlesObj', articlesObj)
  };
}

// разбиваем заказ клиента на обьекты
const articlesPars = (arr) => {
  //const result = []
  const arrPars = [];

  //разбиваю строки на масивы артикул + количество
  for (let i = 0; i < arr.length; i++) {
    arrPars.push(articles[i].split("\t"));
  }

  for (let j = 0; j < arrPars.length; j++) {
    //    result.push({ article: arrPars[j][0], qty: arrPars[j][1] })
    articlesObj.push({ article: arrPars[j][0], qty: arrPars[j][1] });
  }
  //return result //=
};

// обьект с сылками на заказ
const objectToWork = () => {
  for (const key of articlesObj) {
    const result = products.find((el) => el.article === key.article)
    console.log('result', result)
    if (key.article === result?.article) {
      toWork.push({ article: key.article, qty: key.qty, link: result?.link, series: result?.series })
    }

  }
}
//objectToWork();

const file = () => {
  let result = "";
  console.log(toWork.length)
  for (let i = 0; i < toWork.length; i += 1) {
    const text = `
    <File>
      <Type>0</Type>
      <Name>${toWork[i].link}</Name>
      <SubName/>
      <Sign>${toWork[i].article}</Sign>
      <Note/>
      <Comment/>
      <Count>${toWork[i].qty}</Count>
    </File>
    `;
    if (result === "") result = text;
    else result += text;
  }

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

  return xml
};

//отрисовка списка
const outList = () => {
  let out = "";
  for (const article in articles) {
    out += `<div>${articles[article]}</div>`;
  }
  document.getElementById("text-file-array").innerHTML = out;
};

//отрисовка списка
const outList2 = () => {
  let out2 = "";
  let count = 1;
  for (const article of articlesObj) {
    out2 += `<div>count:${count} art: ${article.article} - qty: ${article.qty}<div>`;
    count += 1;
  }
  document.getElementById("text-file-object").innerHTML = out2;
};

//const xmlNew = `<p>${file()}</p>`;
//document.getElementById("xml-file").innerHTML = xmlNew;
//console.log(xmlNew);


// функция Скачки
document.querySelector('.btn-download').addEventListener('click', download)

function download() {

  let str = file();
  console.log(str)

  let link = document.createElement('a');
  link.download = 'bazis.txt';
  let blob = new Blob([str], { type: 'text/plain' });
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
  console.log('download')
}

// запуск чтения файла
const inputFile = document.getElementById('input-file')
inputFile.addEventListener('change', () => {
  readFile(inputFile)
})


// outList();
// outList2();
// console.log('toWork', toWork)
// articlesPars(articles);
// objectToWork()