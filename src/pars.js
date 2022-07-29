// Превращаешь JSON в объект
const portalData = []


// Перемапиваешь массив
const updatedData = portalData.map((el) => {
    return {
        article: el.code,
        series: el.series,
        link: el.bazis,
    }
})
console.log(updatedData)

// Получаешь новый JSON
//const result = JSON.stringify(updatedData, null, 2)
