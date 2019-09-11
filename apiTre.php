<?php
header('Content-type: application/json');
include "databaseThree.php";

$level = $_GET["level"];

$data = [];

if ($_GET['level'] == 'guest'){
        $data['fatturato'] = $graphs['fatturato'];
      }
     else if ($_GET['level'] == 'employee'){
       // foreach ($graphs as $level => $data) {
         $data['fatturato'] = $graphs['fatturato'];
         $data['fatturato_by_agent'] = $graphs['fatturato_by_agent'];
       // }
      }
     else if ($_GET['level'] == 'clevel') {
       $data['fatturato'] = $graphs['fatturato'];
       $data['fatturato_by_agent'] = $graphs['fatturato_by_agent'];
       $data['team_efficiency'] = $graphs['team_efficiency'];
     }

echo json_encode($data);
?>
