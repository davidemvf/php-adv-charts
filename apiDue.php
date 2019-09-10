<?php
header('Content-type: application/json');

include "databaseDue.php";

echo json_encode($graphs);

?>
