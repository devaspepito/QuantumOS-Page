<?php
session_start();
if (!isset($_SESSION['user_id'])) {
  header("Location: ../login.php");
  exit();
}
include('./src/controller/modelo.php');

// Obtener información del usuario

?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <title>Panel de Administrador</title>
  <link rel="stylesheet" href="../styles/admin/adminStyled.css">
</head>

<body>
  <div>
    <nav>
      <a href="./isos.php">Gestionar Isos</a>
      <a href="./logout.php">Cerrar sesión</a>
    </nav>
    <h1>Bienvenido, Admin</h1>
  </div>
</body>

</html>
