// функция загрузки файла
const readFile = (input) => {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);

  const promise = new Promise((resolve, reject) => {
    reader.onload = function () {
      reader.onerror = reject;

      const articlesResult = [];
      const res = reader.result; //читаю файл
      document.getElementById("text-file").innerHTML = res;

      const strSlice = res.split("\n"); //разбиваю на массив

      strSlice.forEach((el) => {
        articlesResult.push(el);
      });
      resolve(articlesResult);
    };
  });
  return promise;
};

export default readFile;
