<?php
include('./modelo.php');
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Iniciar sesión
  if (isset($_POST['iniciarSesion'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $usuario = iniciarSesion($email, $password);
    $_SESSION['user_id'] = $usuario['id'];
    if (is_array($usuario)) {
      header("Location: ../../admin.php");
      exit();
    } else {
      echo "Credenciales incorrectas";
    }
  }
}
