//отрисовка списка ненайденных артикулов в базе
const articlesNotFoundList = (obj) => {
  let renderList = "";
  const articlesNotFound = obj[1]

  articlesNotFound.forEach((el) => {
    renderList += `<div class="not-found-alarm">${el}<div>`;
  });

  document.getElementById("articles-not-found").innerHTML = renderList;
};

export default articlesNotFoundList;
