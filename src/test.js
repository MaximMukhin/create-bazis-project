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

const articlesObj = [
  {
    article: "AURORA-800-2C-SO-RT",
    qty: "7",
  },
  {
    article: "CADRO-80-1C-SO-BG-BLUM",
    qty: "3",
  },
  {
    article: "KRAFT 39-500/390-2C-SO-BO",
    qty: "5",
  },
  {
    article: "KRAFT 39-500/390-2C-SO-CG",
    qty: "5",
  },
  {
    article: "KRAFT 39-500/390-2C-SO-RNN",
    qty: "13",
  },
];

const file = () => {
  let result = "";

  for (let i = 0; i < articlesObj.length; i += 1) {
    const text = `
  <File>
    <Type>0</Type>
    <Name>${"articles2[i].link"}</Name>
    <SubName/>
    <Sign>${articlesObj[i].article}</Sign>
    <Note/>
    <Comment/>
    <Count>${articlesObj[i].qty}</Count>
  </File>
  `;
    if (result === "") result = text;
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

console.log(xml);

let blob = new Blob([xml], { type: "text/plain" });
link.href = URL.createObjectURL(blob);
