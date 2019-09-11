<?php
header('Content-type: application/json');
include "databaseThree.php";

$level = $_GET["level"];

$data = [];

if ($level === "guest" || $level === "employee" || $level === "clevel") {
  $data['fatturato'] = $graphs['fatturato'];
} elseif ($level === "employee" || $level === "clevel") {
  $data['fatturato_by_agent'] = $graphs['fatturato_by_agent'];
} elseif ($level === "clevel") {
  $data['team_efficiency'] = $graphs['team_efficiency'];
};

echo json_encode($data);
?>
