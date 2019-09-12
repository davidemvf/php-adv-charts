$(document).ready(init);

function init() {
  console.log("hello world");
  printChart();
  printChartTwo();
  $(".button").click(printChartThree);
};

// Primo step
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
};



// secondo step
// funzione che implementa i due grafici
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

// funzione che implementa il grafi tipo line
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
};

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
};



// terzo step
// funzione che implementa i tre grafici
function printChartThree() {
  
  var level = $(".level").val();
  console.log(level);
  if (level === "guest") {
    getLineChart(level);
  } else if (level === "employee") {
      getLineChart(level);
      getPieChart(level);
  } else if (level === "clevel") {
      getLineChart(level);
      getPieChart(level);
      getMultiLine(level);
  }

}

// funzione per inserire il diagramma tipo line
function getLineChart(level) {

  // chiamata ajax per recuperare dati
  $.ajax({
    url: "apiTre.php",
    method: "GET",
    data: {"level": level },
    success: function(data) {
      console.log(data);
      var database = data.fatturato.data;
      console.log(database);
      var ctx = document.getElementById('line').getContext('2d');
      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: getLabels(),
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(000, 128, 000)',
                borderColor: 'rgb(0, 0, 0)',
                data: database
            }]
        },
    });

    },
    error: function() {
      alert("Errore");
    }
  });
};

function getPieChart(level) {
  $.ajax({
    url:"apiTre.php",
    method:"GET",
    data: {"level" : level},
    success: function(data) {
      console.log("Dati: " + data);
  var fatPerAgent = data.fatturato_by_agent;
  var type = fatPerAgent.type;
  var dati = fatPerAgent.data;
  var labels = Object.keys(dati);
  var sales = Object.values(dati);

  var ctx = document.getElementById('pie').getContext('2d');
  var myLineChart = new Chart(ctx, {
    type: type,
    data: {
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 69, 132)',
            borderColor: 'rgb(200, 99, 132)',
            data: sales,
            backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)']
        }]
    },
  });
  },
    error: function() {
      alert("ERRORE");
    }
  })
};

function getMultiLine(level) {
  $.ajax ({
    url: "apiTre.php",
    method: "GET",
    data: {"level": level },
    success: function(data) {
      console.log(data);
    var team_efficiency = data.team_efficiency;
    var type = team_efficiency.type;
    var database = team_efficiency.data;
    var team1 = database.Team1;
    var team2 = database.Team2;
    var team3 = database.Team3;
      var ctx = document.getElementById('multiline').getContext('2d');
      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: getLabels(),
            datasets: [{
                label: 'Team 1',
                borderColor: 'blue',
                data: team1
                },
                {
                label: 'Team 2',
                borderColor: 'red',
                data: team2
              },
              {
              label: 'Team 3',
              borderColor: 'green',
              data: team3
            }
          ]
        },
    });

    },
    error: function() {
      alert("Errore");
    }
  })


}
