$(document).ready(init);

function init() {
  console.log("hello world");
  printChart();
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
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
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
getLabels();
