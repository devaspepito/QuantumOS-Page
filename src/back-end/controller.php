<?php
$conexion;

//  ABRIR LA CONEXION
function abrirconexion()
{
  global $conexion;

  $db_host = "localhost:3306";
  $db_name = "quantumos";
  $db_user = "root";
  $db_pass = "";

  try {
    $conexion = new mysqli($db_host, $db_user, $db_pass, $db_name);
  } catch (\Throwable $th) {
    echo "Error en la conexion" . $th->getMessage();
    exit();
  }
}

// CERRAR CONEXION
function cerrarConexion()
{
  global $conexion;
  $conexion->close();
}

// CREAR USUARIO -> C
function crearUsuario($Nombre, $Correo)
{
  abrirconexion();

  global $conexion;
  $query = "INSERT INTO usuario (Nombre, Correo) VALUES ('$Nombre' , '$Correo')";

  if ($conexion->query($query)) {
    cerrarConexion();
    return "Usuario creado exitosamente";
  } else {
    cerrarConexion();
    return "Error en la creacion de usuario" . $conexion->error;
  }
}


// MOSTRAR USUARIO -> R
function mostrarUsuarios()
{
  abrirconexion();
  global $conexion;

  $query = "SELECT * FROM usuario";
  $resultado = $conexion->query($query);
  $usuarios = [];
  if ($resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
      $usuarios[] = $fila;
    }
  }

  cerrarConexion();
  return $usuarios;
}

function mostrarUsuario($id)
{
  abrirconexion();
  global $conexion;

  $query = "SELECT * FROM usuario WHERE ID=$id";
  $resultado = $conexion->query($query);

  cerrarConexion();
  return $resultado->fetch_assoc();
}

// ACTUALIZAR USUARIOS -> U
function actualizarUsuario($id, $nombreActualizado, $correoActualizado)
{
  abrirconexion();
  global $conexion;

  $query = "UPDATE usuario SET Nombre ='$nombreActualizado' , Correo ='$correoActualizado' WHERE ID=$id";

  if ($conexion->query($query)) {
    cerrarConexion();
    return "Usuario actualizado correctamente";
  } else {
    cerrarConexion();
    return "Error al actualizar usuario: " . $conexion->error;
  }
}


// ELIMINAR USUARIOS -> D
function eliminarUsuario($id)
{
  abrirconexion();
  global $conexion;

  $query = "DELETE FROM usuario WHERE ID=$id";

  if ($conexion->query($query) === TRUE) {
    cerrarConexion();
    return "Usuario eliminado correctamente";
  } else {
    cerrarConexion();
    return "Error al eliminar el usuario: " . $conexion->error;
  }
}
