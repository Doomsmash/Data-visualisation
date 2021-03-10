
var counter = 20;
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=20&type=json", true); 
xhttp.responseType = "json";
xhttp.onload = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        remoteLabels = xhttp.response.map(function(e) {
            return e[0];
        });
        remoteValues = xhttp.response.map(function (e) {
            return e[1];
        });

        var chartContainer = document.getElementById("fetchChart");
        var remoteChart = new Chart(chartContainer, {
            type: 'line',
            data: {
                labels: remoteLabels,
                datasets: [{
                    data: remoteValues,
                    label: "Live chart",
                    borderWidth: 1,
                    borderColor: "blue",
                    backgroundColor: "purple",
                    fill: false
                }]
            },
        });
    }
}
xhttp.send();
updateChart();

function updateChart() {
var xml = new XMLHttpRequest();
xml.open("GET", "https://canvasjs.com/services/data/datapoints.php?xstart="+(counter = counter+1)+"&ystart=10&length=1&type=json", true); 
xml.responseType = "json";
xml.onload = () => {
    if (xml.readyState == 4 && xml.status == 200) {
        remoteLabels.shift();
        remoteValues.shift();
        remoteLabels.push(xml.response[0][0]);
        remoteValues.push(xml.response[0][1]);
        
        var chartContainer = document.getElementById("fetchChart");
        var remoteChart = new Chart(chartContainer, {
            type: 'line',
            data: {
                labels: remoteLabels,
                datasets: [{
                    data: remoteValues,
                    label: "live chart",
                    borderWidth: 1,
                    borderColor: "Blue",
                    backgroundColor: "purple",
                    fill: false
                }]
            },
        });
    }
}
xml.send();
setTimeout(function(){updateChart()}, 1000);
}


