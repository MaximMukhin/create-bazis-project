import fs from 'fs';
import Product from './_models/product.js';

const path = './uploads';

const getBPRJ = async (json) => {
    if (!json) return;
    const { id, series, products } = json;
    const allProducts = await Product.find({});

    let seriesLabel;
    if (!series) seriesLabel = '';
    else seriesLabel = `_${series}`;

    const file = () => {
        let result = '';

        for (let i = 0; i < products.length; i += 1) {
            if ({}.hasOwnProperty.call(products, i)) {
                const product = allProducts.find((p) => p.code === products[i].code);
                const bazis = product?.bazis?.replace('\\', '');
                const { direction } = product;

                let dir = '';

                if (direction === 'left') {
                    dir = '-L';
                }

                if (direction === 'right') {
                    dir = '-R';
                }

                const text = `
        <File>
          <Type>0</Type>
          <Name>${bazis}</Name>
          <SubName/>
          <Sign>${products[i].series}-${products[i].width}-${products[i].matBody}${dir}</Sign>
          <Note/>
          <Comment/>
          <Count>${products[i].qty}</Count>
        </File>
        `;
                if (result === '') result = text;
                else result += text;
            }
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

    const bprj = `${path}/${id}${seriesLabel}.bprj`;

    fs.writeFileSync(bprj, xml, 'utf-8');
    // eslint-disable-next-line consistent-return
    return bprj.replace('.', '');
};

export default {
    getBPRJ,
};