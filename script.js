
let table = document.getElementById('table1');



let yearsTableRow = table.rows[1];
let parsedYears = []


for (let i = 2; i < yearsTableRow.cells.length; i++) {

    parsedYears.push(yearsTableRow.cells[i].innerHTML);
}

console.log(parsedYears);

// let landNameCol = table.;

let belgiumRow = table.rows[2];
let belgiumData = [];

let bulgariaRow = table.rows[3];
let bulgariaData = [];

let czechRepublicRow = table.rows[4];
let czechRepublicData = [];

let denmark = {
    row: table.rows[5],
    data: []
}

for (let i = 2; i < denmark.row.cells.length; i++) {
    denmark.data.push(denmark.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(denmark.data);

let germany = {
    row: table.rows[6],
    data: []
}

for (let i = 2; i < germany.row.cells.length; i++) {
    germany.data.push(germany.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(germany.data);

let estonia = {
    row: table.rows[7],
    data: []
}

for (let i = 2; i < estonia.row.cells.length; i++) {
    estonia.data.push(estonia.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(estonia.data);

let ireland = {
    row: table.rows[8],
    data: []
}

for (let i = 2; i < ireland.row.cells.length; i++) {
    ireland.data.push(ireland.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(ireland.data);

let greece = {
    row: table.rows[9],
    data: []
}

for (let i = 2; i < greece.row.cells.length; i++) {
    greece.data.push(greece.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(greece.data);

let spain = {
    row: table.rows[10],
    data: []
}

for (let i = 2; i < spain.row.cells.length; i++) {
    spain.data.push(spain.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(spain.data);

let france = {
    row: table.rows[11],
    data: []
}

for (let i = 2; i < france.row.cells.length; i++) {
    france.data.push(france.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(france.data);

let croatia = {
    row: table.rows[12],
    data: []
}

for (let i = 2; i < croatia.row.cells.length; i++) {
    croatia.data.push(croatia.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(croatia.data);

let italy = {
    row: table.rows[13],
    data: []
}

for (let i = 2; i < italy.row.cells.length; i++) {
    italy.data.push(italy.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(italy.data);

let cyprus = {
    row: table.rows[14],
    data: []
}

for (let i = 2; i < cyprus.row.cells.length; i++) {
    cyprus.data.push(cyprus.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(cyprus.data);

let latvia = {
    row: table.rows[15],
    data: []
}

for (let i = 2; i < latvia.row.cells.length; i++) {
    latvia.data.push(latvia.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(latvia.data);

let lithuania = {
    row: table.rows[16],
    data: []
}

for (let i = 2; i < lithuania.row.cells.length; i++) {
    lithuania.data.push(lithuania.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(lithuania.data);

let luxembourg = {
    row: table.rows[17],
    data: []
}

for (let i = 2; i < luxembourg.row.cells.length; i++) {
    luxembourg.data.push(luxembourg.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(luxembourg.data);

let hungary = {
    row: table.rows[18],
    data: []
}

for (let i = 2; i < hungary.row.cells.length; i++) {
    hungary.data.push(hungary.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(hungary.data);

let malta = {
    row: table.rows[19],
    data: []
}

for (let i = 2; i < malta.row.cells.length; i++) {
    malta.data.push(malta.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(malta.data);

let netherlands = {
    row: table.rows[20],
    data: []
}

for (let i = 2; i < netherlands.row.cells.length; i++) {
    netherlands.data.push(netherlands.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(netherlands.data);

let austria = {
    row: table.rows[21],
    data: []
}

for (let i = 2; i < austria.row.cells.length; i++) {
    austria.data.push(austria.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(austria.data);

let poland = {
    row: table.rows[22],
    data: []
}

for (let i = 2; i < poland.row.cells.length; i++) {
    poland.data.push(poland.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(poland.data);

let portugal = {
    row: table.rows[23],
    data: []
}

for (let i = 2; i < portugal.row.cells.length; i++) {
    portugal.data.push(portugal.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(portugal.data);

let romania = {
    row: table.rows[24],
    data: []
}

for (let i = 2; i < romania.row.cells.length; i++) {
    romania.data.push(romania.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(romania.data);

let slovenia = {
    row: table.rows[25],
    data: []
}

for (let i = 2; i < slovenia.row.cells.length; i++) {
    slovenia.data.push(slovenia.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(slovenia.data);

let slovakia = {
    row: table.rows[26],
    data: []
}

for (let i = 2; i < slovakia.row.cells.length; i++) {
    slovakia.data.push(slovakia.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(slovakia.data);

let finland = {
    row: table.rows[27],
    data: []
}

for (let i = 2; i < finland.row.cells.length; i++) {
    finland.data.push(finland.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(finland.data);

let sweden = {
    row: table.rows[28],
    data: []
}

for (let i = 2; i < sweden.row.cells.length; i++) {
    sweden.data.push(sweden.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(sweden.data);

let iceland = {
    row: table.rows[29],
    data: []
}

for (let i = 2; i < iceland.row.cells.length; i++) {
    iceland.data.push(iceland.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(iceland.data);

let liechtenstein = {
    row: table.rows[30],
    data: []
}

for (let i = 2; i < liechtenstein.row.cells.length; i++) {
    liechtenstein.data.push(liechtenstein.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(liechtenstein.data);

let norway = {
    row: table.rows[31],
    data: []
}

for (let i = 2; i < norway.row.cells.length; i++) {
    norway.data.push(norway.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(norway.data);

let switzerland = {
    row: table.rows[32],
    data: []
}

for (let i = 2; i < switzerland.row.cells.length; i++) {
    switzerland.data.push(switzerland.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(switzerland.data);

let montenegro = {
    row: table.rows[33],
    data: []
}

for (let i = 2; i < montenegro.row.cells.length; i++) {
    montenegro.data.push(montenegro.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(montenegro.data);

let macedonia = {
    row: table.rows[34],
    data: []
}

for (let i = 2; i < macedonia.row.cells.length; i++) {
    macedonia.data.push(macedonia.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(macedonia.data);

let serbia = {
    row: table.rows[35],
    data: []
}

for (let i = 2; i < serbia.row.cells.length; i++) {
    serbia.data.push(serbia.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(serbia.data);

let turkey = {
    row: table.rows[36],
    data: []
}

for (let i = 2; i < turkey.row.cells.length; i++) {
    turkey.data.push(turkey.row.cells[i].innerHTML.replace(/,/g, '.'))
}

console.log(turkey.data);



for (let i = 2; i < belgiumRow.cells.length; i++) {

    belgiumData.push(belgiumRow.cells[i].innerHTML.replace(/,/g, '.'));
}

console.log(belgiumData);

for (let i = 2; i < bulgariaRow.cells.length; i++) {

    bulgariaData.push(bulgariaRow.cells[i].innerHTML.replace(/,/g, '.'));
}

console.log(bulgariaData);


for (let i = 2; i < czechRepublicRow.cells.length; i++) {

    czechRepublicData.push(czechRepublicRow.cells[i].innerHTML.replace(/,/g, '.'));
}

console.log(czechRepublicData);



let dataForChart = {
    'years': parsedYears,
    'belgium': {
        'data': belgiumData
    },
    'bulgaria': {
        'data': bulgariaData
    },
    'czech': {
        'data': czechRepublicData
    },
    'denmark': {
        'data': denmark.data
    },
    'germany': {
        'data': germany.data
    },
    'estonia': {
        'data': estonia.data
    },
    'ireland': {
        'data': ireland.data
    },
    'greece': {
        'data': greece.data
    },
    'spain': {
        'data': spain.data
    },
    'france': {
        'data': france.data
    },
    'croatia': {
        'data': croatia.data
    },
    'italy': {
        'data': italy.data
    },
    'cyprus': {
        'data': cyprus.data
    },
    'latvia': {
        'data': latvia.data
    },
    'lithuania': {
        'data': lithuania.data
    },
    'luxembourg': {
        'data': luxembourg.data
    },
    'hungary': {
        'data': hungary.data
    },
    'malta': {
        'data': malta.data
    },
    'netherlands': {
        'data': netherlands.data
    },
    'austria': {
        'data': austria.data
    },
    'poland': {
        'data': poland.data
    },
    'portugal': {
        'data': portugal.data
    },
    'romania': {
        'data': romania.data
    },
    'slovenia': {
        'data': slovenia.data
    },
    'slovakia': {
        'data': slovakia.data
    },
    'finland': {
        'data': finland.data
    },
    'sweden': {
        'data': sweden.data
    },
    'iceland': {
        'data': iceland.data
    },
    'liechtenstein': {
        'data': liechtenstein.data
    },
    'norway': {
        'data': norway.data
    },
    'switzerland': {
        'data': switzerland.data
    },
    'montenegro': {
        'data': montenegro.data
    },
    'macedonia': {
        'data': macedonia.data
    },
    'serbia': {
        'data': serbia.data
    },
    'turkey': {
        'data': turkey.data
    },


};

console.log(dataForChart.belgium.data);


let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dataForChart.years,
        datasets: [
            {
                label: 'Belgium',

                data: dataForChart.belgium.data,


                backgroundColor: [

                ],

                borderColor: [
                    'green'
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Bulgaria',

                data: dataForChart.bulgaria.data,


                backgroundColor: [

                ],

                borderColor: [
                    'red',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Czech Republic',

                data: dataForChart.czech.data,


                backgroundColor: [

                ],

                borderColor: [
                    'orange',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Denmark',

                data: dataForChart.denmark.data,


                backgroundColor: [

                ],

                borderColor: [
                    'yellow',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Germany',

                data: dataForChart.germany.data,


                backgroundColor: [

                ],

                borderColor: [
                    'blue',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Estonia',

                data: dataForChart.estonia.data,


                backgroundColor: [

                ],

                borderColor: [
                    'purple',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Ireland',

                data: dataForChart.ireland.data,


                backgroundColor: [

                ],

                borderColor: [
                    'black',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Greece',

                data: dataForChart.greece.data,


                backgroundColor: [

                ],

                borderColor: [
                    'cyan',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'spain',

                data: dataForChart.spain.data,


                backgroundColor: [

                ],

                borderColor: [
                    'magenta',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'france',

                data: dataForChart.france.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#36244f',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'croatia',

                data: dataForChart.croatia.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#3a579a',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Italy',

                data: dataForChart.italy.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#FF2FA9',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Cyprus',

                data: dataForChart.cyprus.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#FF8172',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Latvia',

                data: dataForChart.latvia.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#FABA61',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Lithuania',

                data: dataForChart.lithuania.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#2E9599',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Luxembourg',

                data: dataForChart.luxembourg.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#F36943',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Hungary',

                data: dataForChart.hungary.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#F1184C',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Malta',

                data: dataForChart.malta.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#A8216B',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'The Netherlands',

                data: dataForChart.netherlands.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#AFF28B',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Austria',

                data: dataForChart.austria.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#F0D689',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Poland',

                data: dataForChart.poland.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#C386F1',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Portugal',

                data: dataForChart.portugal.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#F89CFA',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Romania',

                data: dataForChart.romania.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#F89CFA',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Slovenia',

                data: dataForChart.slovenia.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#89D1DC',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Slovakia',

                data: dataForChart.slovakia.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#fffb38',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Finland',

                data: dataForChart.finland.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#FF479C',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Sweden',

                data: dataForChart.sweden.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#35B5FF',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Iceland',

                data: dataForChart.iceland.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#00FF3F',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Iceland',

                data: dataForChart.iceland.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#00FF3F',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Liechtenstein',

                data: dataForChart.liechtenstein.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#FFCDAA',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Norway',

                data: dataForChart.norway.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#FF77A8',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Switzerland',

                data: dataForChart.switzerland.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#83769C',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Montenegro',

                data: dataForChart.montenegro.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#7E2453',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Macedonia',

                data: dataForChart.macedonia.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#1D2B53',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Serbia',

                data: dataForChart.serbia.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#5F574E',
                ],

                fill: false,

                borderWidth: 3
            },
            {
                label: 'Turkey',

                data: dataForChart.turkey.data,


                backgroundColor: [

                ],

                borderColor: [
                    '#AB5236',
                ],

                fill: false,

                borderWidth: 3
            },




        ],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
