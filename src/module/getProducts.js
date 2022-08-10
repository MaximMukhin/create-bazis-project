const getProduct = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("getProduct", data);
  return data;
};

export default getProduct;
