<?php
include('config.php');

// Crear un nuevo usuario
function crearUsuario($nombre, $correo, $password, $rol)
{
  global $conn;
  $sql = "INSERT INTO people (name, email, passwd, rol) VALUES ('$nombre', '$correo', '$password', $rol)";
  return mysqli_query($conn, $sql) ? "Usuario creado correctamente" : "Error al crear el usuario";
}

// Actualizar un usuario existente
function actualizarUsuario($id, $nombre, $apellido, $email, $rol)
{
  global $conn;
  $sql = "UPDATE people SET name='$nombre', last_name='$apellido', email='$email', rol='$rol' WHERE id=$id";
  return mysqli_query($conn, $sql) ? "Usuario actualizado correctamente" : "Error al actualizar el usuario";
}

// Mostrar información de un usuario
function mostrarUsuario($id)
{
  global $conn;
  $sql = "SELECT * FROM people WHERE id=$id";
  $result = mysqli_query($conn, $sql);
  return mysqli_fetch_assoc($result) ?: "Usuario no encontrado";
}

// Iniciar sesión
function login($email, $password)
{
  global $conn;
  $sql = "SELECT * FROM users WHERE email='$email' AND passwd='$password'";
  $result = mysqli_query($conn, $sql);
  return mysqli_fetch_assoc($result) ?: "Credenciales incorrectas";
}

// Verificar rol de usuario
function verificarRol($id)
{
  global $conn;
  $sql = "SELECT rol FROM people WHERE id=$id";
  $result = mysqli_query($conn, $sql);
  return mysqli_fetch_assoc($result)['rol'] ?? null;
}

function obtenerProductos()
{
  global $conn;
  $query = "SELECT * FROM products";
  $result = mysqli_query($conn, $query);
  return mysqli_fetch_all($result, MYSQLI_ASSOC);
}

function agregarProducto($nombre, $descripcion, $precio)
{
  global $conn;
  $query = "INSERT INTO products (name, description, price) VALUES ('$nombre', '$descripcion', '$precio')";
  mysqli_query($conn, $query);
}

function eliminarProducto($id)
{
  global $conn;
  $query = "DELETE FROM products WHERE id = $id";
  mysqli_query($conn, $query);
}

// Funciones de usuarios
function obtenerUsuarios()
{
  global $conn;
  $query = "SELECT * FROM people";
  $result = mysqli_query($conn, $query);
  return mysqli_fetch_all($result, MYSQLI_ASSOC);
}

function agregarUsuario($nombre, $apellido, $email, $passwd, $rol)
{
  global $conn;
  $query = "INSERT INTO people (name, last_name, email, passwd, rol) VALUES ('$nombre', '$apellido', '$email', '$passwd', $rol)";
  mysqli_query($conn, $query);
}

function eliminarUsuario($id)
{
  global $conn;
  $sql = "DELETE FROM people WHERE id=$id";
  return mysqli_query($conn, $sql) ? "Usuario eliminado correctamente" : "Error al eliminar el usuario";
}

function obtenerProductoPorId($id)
{
  global $conn;
  $query = "SELECT * FROM products WHERE id = $id";
  $result = mysqli_query($conn, $query);
  return mysqli_fetch_assoc($result);
}

function actualizarProducto($id, $nombre, $descripcion, $precio)
{
  global $conn;
  $query = "UPDATE products SET name = '$nombre', description = '$descripcion', price = '$precio' WHERE id = $id";
  mysqli_query($conn, $query);
}
