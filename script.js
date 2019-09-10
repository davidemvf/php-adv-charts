$(document).ready(init);

function init() {
  console.log("hello world");
  printChart();
  printChartTwo();
};

// funzione per implementare il grafico
function printChart() {
  // devo ricavare i parametri da passargli
  getData();
};

// funzione per recuperare i dati da passare al chart
function getData() {
  $.ajax({
    url:"fulldb.php",
    method:"GET",
    success: function (data) {
      console.log(data);
      getChart(data);
    },
    error: function() {
      alert("Errore");
    }
  })
};

// funzione per creare il chart
function getChart(data) {
  var ctx = document.getElementById('salesChart').getContext('2d');
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: getLabels(),
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(000, 128, 000)',
            borderColor: 'rgb(0, 0, 0)',
            data: data
        }]
    },
});
};

//funzione per ricavare i labels
function getLabels() {
  var mesi = moment.months();
  return(mesi);
  console.log(mesi);
}

function printChartTwo() {
  $.ajax({
    url:"apiDue.php",
    method:"GET",
    success: function(data) {
      console.log("Dati: " + data);
      // variabili per il diagramma a torta
      var fatPerAgent = data.fatturato_by_agent;
      var type = fatPerAgent.type;
      var dati = fatPerAgent.data;
      var labels = Object.keys(dati);
      var sales = Object.values(dati);
      //variabili per il diagramma tipo line
      var fatturato = data.fatturato;
      var typeGraph = fatturato.type;
      var data = fatturato.data;



      getChartTwo(typeGraph, data);
      getTieChart(labels,type,sales);

    },
    error: function() {
      alert("Errore");
    }
  })
};

function getChartTwo(typeGraph, data) {
  var ctx = document.getElementById('salesChartTwo').getContext('2d');
  var myLineChart = new Chart(ctx, {
    type: typeGraph,
    data: {
        labels: getLabels(),
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(000, 96, 160)',
            borderColor: 'rgb(194, 0, 0)',
            data: data
        }]
    },
});
}
// funzione per richiamare il grafico a torta
function getTieChart (labels, type, data) {
  var ctx = document.getElementById('salesChartTie').getContext('2d');
  var myLineChart = new Chart(ctx, {
    type: type,
    data: {
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 69, 132)',
            borderColor: 'rgb(200, 99, 132)',
            data: data,
            backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)']
        }]
    },
});
}
