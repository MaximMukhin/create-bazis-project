//const obj = [
//  {art: '111', qty: '1'},
//  {art: '222', qty: '2'},
//  {art: '333', qty: '3'},
//  {art: '444', qty: '4'},
//];
//
//let str = ''
//for (const item of obj) {
//  str += `<div>art ${item.art} qty ${item.qty}<div>`
//}
//str //=

const Products = [
  {
    article: "ADELINA-P-T02-60-2B-MR960",
    series: "ADELINA-P-T02",
    link: "\\Серия\\AcquaCraft\\Bella\\Bella_SF027\\Bella-F21L-106-SF027.b3d",
  },
  {
    article: "BELLA-L-F21-106-SF027-L",
    series: "BELLA-L-F21",
    link: "\\Серия\\AcquaCraft\\Bella\\Bella_SF027\\Bella-F21L-106-SF027.b3d",
  },
  {
    article: "AURORA-800-2C-SO-RT",
    series: "Aurora",
    link: "\\Серия\\Мебель для ванной\\AU_KR\\(RT) Rovere Tabacco - Дуб Галифакс табак H1181 ST37\\AU45-80_RT.b3d",
  },
  {
    article: "CADRO-80-1C-SO-BG-BLUM",
    series: "Cadro",
    link: "\\Серия\\Мебель для ванной\\Cadro\\(BG) Bianco Ghiaccio - Белый лёд Atlas OSS\\Cadro-80_BG.b3d",
  },
  {
    article: "KRAFT 39-500/390-2C-SO-BO",
    series: "Kraft 39",
    link: "\\Серия\\Мебель для ванной\\AU_KR\\(BO) Bianco Opaco - Белый базовый W908 SM\\KR39-50_BO.b3d",
  },
  {
    article: "KRAFT 39-500/390-2C-SO-CG",
    series: "Kraft 39",
    link: "\\Серия\\Мебель для ванной\\AU_KR\\(CG) Cemento Grigio - Бетон D3274 SM\\KR39-50_CG.b3d",
  },
  {
    article: "KRAFT 39-500/390-2C-SO-RNN",
    series: "Kraft 39",
    link: "\\Серия\\Мебель для ванной\\AU_KR\\(RNN) Rovere Nebrasca Nature - Дуб Небраска натуральный H3331 ST10\\KR39-50_RNN.b3d",
  },
];

const articlesObj = [
  {
    article: "AURORA-800-2C-SO-RT",
    qty: "7"
  },
  {
    article: "CADRO-80-1C-SO-BG-BLUM",
    qty: "3"
  },
  {
    article: "KRAFT 39-500/390-2C-SO-BO",
    qty: "5"
  },
  {
    article: "KRAFT 39-500/390-2C-SO-CG",
    qty: "5"
  },
  {
    article: "KRAFT 39-500/390-2C-SO-RNN",
    qty: "13"
  }
];

const toWork = [];

for (const key of Products) {
  

  }

  const toJson = JSON.stringify(articlesObj) //=
  const json = JSON.parse(toJson) //=
