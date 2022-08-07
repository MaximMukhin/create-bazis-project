import getOrderName from "./getOrderName.js";

// Скачка файла
const downloadProject = () => {
  getOrderName();
  let str = file();
  console.log(str);

  let link = document.createElement("a");
  link.download = `${order}.txt`;
  let blob = new Blob([str], { type: "text/plain" });
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
  console.log("download");
};

export default downloadProject;
