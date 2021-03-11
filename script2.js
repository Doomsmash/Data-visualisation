// definir les pays

let table2 = document.getElementById('table2');

let lands = []

for (i = 1; i < table2.rows.length; i++) {

    let tableLands = table2.rows.item(i).cells;

    for (let j = 1; j < 2; j++) {

        lands.push(tableLands.item(j).innerHTML)
    }

}

for(var i=0; i < lands.length; i++) {
    lands[i] = lands[i].replace(/<br>/g, '');
   }

console.log(lands);

// array année 1

let years1 = []

for (i = 1; i < table2.rows.length; i++) {

    let tableYears1 = table2.rows.item(i).cells;

    for (let j = 2; j < 3; j++) {

        years1.push(tableYears1.item(j).innerHTML)
    }

}

console.log(years1);

// array année 2

let years2 = []

for (i = 1; i < table2.rows.length; i++) {

    let tableYears2 = table2.rows.item(i).cells;

    for (let j = 3; j < 4; j++) {

        years2.push(tableYears2.item(j).innerHTML)
    }

}

console.log(years2);

// chart

let chart = document.getElementById('myChart2').getContext('2d');
let myChart2 = new Chart(chart, {
    type: 'bar',
    data: {
        labels: lands,
        datasets: [
            {
                label: '2007-09',
                data: years1,
                backgroundColor: '#f72078',
            },
            {
                label: '2010-12',
                data: years2,
                backgroundColor: '#0df7db',
            },
        ]
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



