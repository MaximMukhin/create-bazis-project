// получение номера заказа
const getOrderName = () => {
  let order = "";
  order = document.getElementById("input-order").value;
  return order;
};

export default getOrderName;
