const textParsArrayList = (arr) => {
  let renderList = "";

  arr.forEach((el) => {
    renderList += `<div>${el}</div>`;
  });

  document.getElementById("text-pars-array").innerHTML = renderList;
};

export default textParsArrayList;
