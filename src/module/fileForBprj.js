const fileForBprj = (toWork) => {
  let result = "";
  const article = toWork[0]

  article.forEach((el) => {
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

export default fileForBprj;
