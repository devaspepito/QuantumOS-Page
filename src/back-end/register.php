<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quantumos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Conexión fallida: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["username"], $data["email"], $data["password"], $data["repeatPassword"])) {
    $username = $data["username"];
    $email = $data["email"];
    $password = $data["password"];
    $repeatPassword = $data["repeatPassword"];

    if ($password !== $repeatPassword) {
        echo json_encode(["success" => false, "message" => "Las contraseñas no coinciden"]);
        exit;
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Registro exitoso"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error al registrar usuario"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Datos incompletos"]);
}

$conn->close();
?>
