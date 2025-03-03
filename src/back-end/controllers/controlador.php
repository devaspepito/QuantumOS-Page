<?php
include('./modelo.php');
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Iniciar sesión
  if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $usuario = iniciarSesion($email, $password);
    if (is_array($usuario)) {
      $_SESSION['user_id'] = $usuario['id'];
      $_SESSION['rol'] = $usuario['rol'];
      if ($usuario['rol'] == 0) {
        header("Location: ../../front-end/pages/AdminPanel.jsx");
      }
      exit();
    } else {
      echo "Credenciales incorrectas";
    }
  }
}
