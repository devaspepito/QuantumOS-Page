<?php
$conn = mysqli_connect('localhost:3306', 'root', '', 'quantumos');

if (!$conn) {
  die("Error de conexión: " . mysqli_connect_error());
}
