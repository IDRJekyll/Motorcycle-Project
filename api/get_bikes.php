<?php

header("Access-Control-Allow-Origin: http://localhost:5174");
header("Content-Type: application/json");

require_once "../config/db_connect.php";

$sql = "SELECT * FROM bikes";

$result = $conn->query($sql);

$bikes = [];

while ($row = $result->fetch_assoc()) {
    $bikes[] = $row;
}

echo json_encode($bikes);

$conn->close();
?>