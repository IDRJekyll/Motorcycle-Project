<?php
$host = 'localhost';
$db = 'motorcycles';
$username = 'motorcycle_user';
$password = 'StrongPassword123!';
$port = 3307;

$conn = new mysqli($host, $username, $password, $db, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>