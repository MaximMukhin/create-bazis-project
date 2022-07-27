// import express from 'express'
// import articles from "./articles.js";


// const app = express();
// const PORT = 3000;
//
// app.use(express.json())
//
// app.post('/', (req,res) => {
    //     console.log(req.body);
    //     res.status(200).json('Server work')
    // })
    //
    // app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))
    
    const articles2 = [
        {article:'ADELINA-P-T02-60-2B-MR960', series: 'ADELINA-P-T02', link: '\\Серия\\AcquaCraft\\Bella\\Bella_SF027\\Bella-F21L-106-SF027.b3d'},
        {article:'BELLA-L-F21-106-SF027-L', series: 'BELLA-L-F21', link: '\\Серия\\AcquaCraft\\Bella\\Bella_SF027\\Bella-F21L-106-SF027.b3d'},
        {article:'KRAFT 39-500/390-2C-SO-BO', series: 'Kraft 39', link: '\\Серия\\Мебель для ванной\\AU_KR\\(BO) Bianco Opaco - Белый базовый W908 SM\\KR39-50_BO.b3d'},
    ];


/* console.log(articles2) //=
console.log(articles2[0].link) */


const coll = [
    'KRAFT 39-500/390-2C-SO-BO	5',
    'KRAFT 39-500/390-2C-SO-CG	5',
    'KRAFT 39-500/390-2C-SO-RNN	13',
    'KRAFT 39-600/390-2C-SO-BO	3',
    'KRAFT 39-600/390-2C-SO-RNN	10',
    'KRAFT 39-600/390-2C-SO-RT	10',
]
console.log('coll', coll) //=

const articleCollPars = []

const collPars = (coll) => {
    result = []
    for (let i = 0; i < coll.length; i++) {
        articleCollPars.push(coll[i].split('\t'))
    }
    coll[0].split('\t') //=
};

collPars(coll)
articleCollPars //=

function readFile(input) {
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
        const res = reader.result

        coll.push(res)
        
        console.log('res', res)
    };

    reader.onerror = function () {
        console.log(reader.error);
    };
    
    console.log('collF', coll)
}



