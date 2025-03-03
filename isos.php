<?php
session_start();
if (!isset($_SESSION['user_id'])) {
  header("Location: ../login.php");
  exit();
}
include('./src/controller/modelo.php');

// Agregar iso
if (isset($_POST['agregarIso'])) {
  $version = $_POST['version'];
  $build = $_POST['build'];
  $architecture = $_POST['architecture'];
  agregarProducto($nombre, $descripcion, $precio);
}

// Eliminar iso
if (isset($_POST['eliminarProducto'])) {
  $id_iso = $_POST['id_iso'];
  eliminarProducto($id_iso);
}

// Obtener isos
$isos = obtenerIsos();
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <title>Gestionar Isos</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>
  <div class="all">
    <a href="admin.php"><i class="fas fa-arrow-left"></i></a>


    <div class="addIso">
      <h1>Productos</h1>
      <form action="products.php" method="post">
        <h2>Agregar Iso</h2>
        <input type="text" name="nombre" placeholder="Nombre" required>
        <input type="text" name="descripcion" placeholder="Descripción" required>
        <input type="number" name="precio" placeholder="Precio" required>
        <input class="send" type="submit" name="agregarProducto" value="Agregar" />
      </form>
    </div>

    <div class="isosList">
      <h2>Lista de Productos</h2>
      <table border="1">
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
        <?php foreach ($isos as $iso): ?>
          <tr>
            <td><?php echo $iso['version']; ?></td>
            <td><?php echo $iso['build']; ?></td>
            <td><?php echo $iso['edition']; ?></td>
            <td><?php echo $iso['architecture']; ?></td>
            <td class="actions">
              <a href="./delete_iso.php?id=<?php echo $iso['id']; ?>" onclick="return confirm('¿Estás seguro de que deseas eliminar este iso?');">Eliminar</a>
            </td>
          </tr>
        <?php endforeach; ?>
      </table>
    </div>

  </div>

</body>

</html>
