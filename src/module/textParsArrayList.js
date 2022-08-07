const textParsArrayList = (arr) => {
  let out = "";

  arr.forEach((el) => {
    out += `<div>${el}</div>`;
  });

  document.getElementById("text-pars-array").innerHTML = out;
};

export default textParsArrayList;
