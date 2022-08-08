//отрисовка списка из объекта
const textParsObjectList = (obj) => {
  let renderList = "";
  let count = 1;

  obj.forEach((el) => {
    renderList += `<div>count:${count} art: ${el.article} - qty: ${el.qty}<div>`;
    count += 1;
  });

  document.getElementById("text-pars-object").innerHTML = renderList;
};

export default textParsObjectList;
