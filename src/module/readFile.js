// функция загрузки файла
const readFile = (input) => {
  let file = input.files[0];

  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    const res = reader.result; //читаю файл
    const strSlice = res.split("\n"); //разбиваю на массив

    strSlice.forEach((el) => {
      articles.push(el); //добавляю в колекцию массив
    });

    document.getElementById("text-file").innerHTML = res;

    //разбиваю на обьект
    articlesPars(articles);
    console.log("articlesPars(articles)", articlesPars(articles));
    objectToWork();
    console.log("toWork", toWork);
    textParsArrayList(articles);
    textParsObjectList(articlesObj);
    articlesNotFoundList(articlesNotFound);
    console.log("articlesObj", articlesObj);
    console.log("articlesNotFound", articlesNotFound);
  };
};

export default readFile;
