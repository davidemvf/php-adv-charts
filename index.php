<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">

    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" charset="utf-8"></script>

    <!-- JS: CHART JS -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>

    <!-- CSS: MY STYLE -->
    <link rel="stylesheet" href="style.css">
    <!-- JS: MY SCRIPT -->
    <script src="script.js" charset="utf-8"></script>

    <title>Chart</title>

  </head>
  <body>
    <h1>Step 1</h1>
    <div class="container">
      <canvas id="salesChart"></canvas>
    </div>
    <h1>Step 2</h1>
    <div class="container">
      <canvas id="salesChartTwo"></canvas>
      <canvas id="salesChartTie"></canvas>
      <h1>Step 3</h1>



      <select class="level" name="">
        <option value="guest">Guest</option>
        <option value="employee">Employee</option>
        <option value="clevel">Clevel</option>
      </select>
      <button class="button" type="button" name="button">Invia</button>
    <div class="threeChart">
      <canvas id="line"></canvas>
      <canvas id="pie"></canvas>
      <canvas id="multiline"></canvas>
    </div>

    </div>
  </body>
</html>
