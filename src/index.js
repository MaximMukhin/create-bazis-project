// import express from 'express'
// import articles from "./articles.js";


// const app = express();
// const PORT = 3000;
//
// app.use(express.json())
//
// app.post('/', (req,res) => {
//     console.log(req.body);
//     res.status(200).json('Server work')
// })
//
// app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))

// база артикулов
const articles2 = [
    { article: 'ADELINA-P-T02-60-2B-MR960', series: 'ADELINA-P-T02', link: '\\Серия\\AcquaCraft\\Bella\\Bella_SF027\\Bella-F21L-106-SF027.b3d' },
    { article: 'BELLA-L-F21-106-SF027-L', series: 'BELLA-L-F21', link: '\\Серия\\AcquaCraft\\Bella\\Bella_SF027\\Bella-F21L-106-SF027.b3d' },
    { article: 'AURORA-800-2C-SO-RT', series: 'Aurora', link: '\\Серия\\Мебель для ванной\\AU_KR\\(RT) Rovere Tabacco - Дуб Галифакс табак H1181 ST37\\AU45-80_RT.b3d' },
    { article: 'CADRO-80-1C-SO-BG-BLUM', series: 'Cadro', link: '\\Серия\\Мебель для ванной\\Cadro\\(BG) Bianco Ghiaccio - Белый лёд Atlas OSS\\Cadro-80_BG.b3d' },
    { article: 'KRAFT 39-500/390-2C-SO-BO', series: 'Kraft 39', link: '\\Серия\\Мебель для ванной\\AU_KR\\(BO) Bianco Opaco - Белый базовый W908 SM\\KR39-50_BO.b3d' },
    { article: 'KRAFT 39-500/390-2C-SO-CG', series: 'Kraft 39', link: '\\Серия\\Мебель для ванной\\AU_KR\\(CG) Cemento Grigio - Бетон D3274 SM\\KR39-50_CG.b3d' },
    { article: 'KRAFT 39-500/390-2C-SO-RNN', series: 'Kraft 39', link: '\\Серия\\Мебель для ванной\\AU_KR\\(RNN) Rovere Nebrasca Nature - Дуб Небраска натуральный H3331 ST10\\KR39-50_RNN.b3d' },
];

// console.log(articles2) //=
// console.log(articles2[0].link)
// заказ клиента
//const coll = [
//    'KRAFT 39-500/390-2C-SO-BO	5',
//    'KRAFT 39-500/390-2C-SO-CG	5',
//    'KRAFT 39-500/390-2C-SO-RNN	13',
//    'KRAFT 39-600/390-2C-SO-BO	3',
//    'KRAFT 39-600/390-2C-SO-RNN	10',
//    'KRAFT 39-600/390-2C-SO-RT	10',
//];


// заказ клиента
// const coll = []
// const collObj = []
// console.log('coll-Start', coll) //=

// функция загрузки файла
function readFile(input) {
    let file = input.files[0];
    
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
        //читаю файл
        const res = reader.result
        //разбиваю на массив
        const strSlice = res.split('\n')
        //console.log('strSlice', strSlice)
        //разбиваю на обьект
        //const newParsArr = collPars(strSlice)
        //console.log('newParsArr', newParsArr)
        //добавляю в колекцию массив
        for (let i = 0; i < strSlice.length; i++) {
          coll.push(strSlice[i])
        }
        
        console.log('res', res)
    };
};

console.log('coll-Center', coll)

// разбиваем заказ клиента на обьекты
const collPars = (arr) => {
    //const result = []
    const arrPars = []
    console.log('arr', arr.length)

    for (let i = 0; i < arr.length; i++) {
        arrPars.push(coll[i].split('\t'))
    }
    for (let j = 0; j < arrPars.length; j++) {
    //    result.push({ article: arrPars[j][0], qty: arrPars[j][1] })
        collObj.push({ article: arrPars[j][0], qty: arrPars[j][1] })
    }
    //return result //=
    console.log('collObj', collObj)
};

console.log('coll-End', coll)  //=


const file = () => {

    let result = '';

    for (let i = 0; i < collObj.length; i += 1) {

            const text = `
    <File>
      <Type>0</Type>
      <Name>${i}</Name>
      <SubName/>
      <Sign>${collObj.article}</Sign>
      <Note/>
      <Comment/>
      <Count>${collObj[i].qty}</Count>
    </File>
    `;
            if (result === '') result = text;
            else result += text;
        }
    
    return result;
};

const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<Document>
  <DataProject>
    <ListFiles>
    ${file()}
      </ListFiles>
    <CuttingInfo>
      <Parameters/>
      <ProductCount>1</ProductCount>
    </CuttingInfo>
    <EstimateInfo/>
  </DataProject>
</Document>
`;

console.log(xml)

// функция загрузки
let blob = new Blob([xml], { type: 'text/plain' });
link.href = URL.createObjectURL(blob);