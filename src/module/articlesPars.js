// разбиваем заказ клиента на обьекты
const articlesPars = (arr) => {
  const arrPars = [];
  const result = [];

  //разбиваю строки на масивы артикул + количество
  arr.forEach((el) => {
    arrPars.push(el.split("\t"));
  });

  arrPars.forEach((el) => {
    result.push({ article: el[0], qty: el[1].trim() });
  });
console.log('articlesPars result', result)
  return result;
};

export default articlesPars;
