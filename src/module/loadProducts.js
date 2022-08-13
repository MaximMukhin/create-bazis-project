import getProducts from "./getProducts.js";

// получаю артикулы с сервера
const loadProducts = async () => {
  const acquaCraft = await getProducts(
    "http://127.0.0.1:5500/products/acqua-craft.json"
  );
  const atrMax = await getProducts(
    "http://127.0.0.1:5500/products/atr-max.json"
  );
  const iberis = await getProducts(
    "http://127.0.0.1:5500/products/iberis.json"
  );
  const allLoad = [...acquaCraft, ...atrMax, ...iberis];
  return allLoad;
};

export default loadProducts;
