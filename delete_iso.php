<?php
session_start();
if (!isset($_SESSION['user_id'])) {
  header("Location: ./admin.php");
  exit();
}

include('./src/controller/modelo.php');

$id = $_GET['id'];

// Eliminar el producto
$query = "DELETE FROM isos WHERE id = $id";
mysqli_query($conn, $query);

header("Location: ./isos.php");
exit();
