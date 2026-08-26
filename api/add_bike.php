<?php

header("Access-Control-Allow-Origin: http://localhost:5174");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

require_once "../config/db_connect.php";

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"] ?? "";
$manufacturer = $data["manufacturer"] ?? "";
$engine_cc = $data["engine_cc"] ?? 0;
$power_kw = $data["power_kw"] ?? 0;
$fuel = $data["fuel"] ?? null;
$weight = $data["weight"] ?? null;
$image = $data["image"] ?? null;

$sql = "INSERT INTO bikes
        (name, manufacturer, engine_cc, power_kw, fuel, weight, image)
        VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "ssidsis",
    $name,
    $manufacturer,
    $engine_cc,
    $power_kw,
    $fuel,
    $weight,
    $image
);

if ($stmt->execute()) {

    echo json_encode([
        "success" => true,
        "message" => "Motorcycle added successfully!",
        "bikeID" => $stmt->insert_id
    ]);

} else {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Failed to add motorcycle.",
        "error" => $stmt->error
    ]);
}

$stmt->close();
$conn->close();