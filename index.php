<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Home - QuantumOS</title>
  <link href="./src/css/all-content.css" rel="stylesheet">
  <link href="./src/css/index.css" rel="stylesheet">
  <link href="./src/css/header.css" rel="stylesheet">
  <link href="./src/css/footer.css" rel="stylesheet">
  <link href="./src/css/global.css" rel="stylesheet">
</head>

<body>
  <div id="root">
    <?php include 'src/includes/header.php' ?>

    <main class="AllContent">
      <div class="description">
        <h1 class="headOne">Descripción</h1>
        <p class="text">
          QuantumOS es un proyecto donde desarrolla una versión personalizada
          y optimizada de Windows 10 enfocada en mejorar el rendimiento en PCs
          y Laptops con componentes de bajos recursos, mediante la reducción
          de procesos innecesarios, optimización de servicios y ajustes de
          configuración del sistema.
        </p>
      </div>

      <div class="double">
        <div class="mision">
          <h1 class="headOne">Misión</h1>
          <p class="text">
            Desarrollar una versión optimizada y personalizada de Windows 10
            que maximice el rendimiento en PCs y Laptops de bajos recursos,
            mediante la eficiencia en el uso de recursos del sistema y la
            simplificación de procesos. Nuestro compromiso es ofrecer una
            experiencia de usuario fluida y ágil, adaptada a las necesidades
            de equipos con hardware limitado.
          </p>
        </div>

        <div class="vision">
          <h1 class="headOne">Visión</h1>
          <p class="text">
            Ser reconocidos como líderes en personalización y optimización de
            sistemas operativos, proporcionando soluciones innovadoras que
            mejoren el rendimiento de dispositivos de bajos recursos.
            Aspiramos a impactar positivamente en la experiencia tecnológica
            de usuarios en colombia, haciendo que PCs y Laptops antiguas sean
            más rápidas, eficientes y funcionales.
          </p>
        </div>
      </div>

      <div class="lists">
        <div class="addedApps">
          <h1 class="headOne">Aplicaciones agregadas</h1>

          <ul class="unorderedList">
            <li class="listItem">Optimizer</li>
          </ul>
        </div>

        <div class="characteristics">
          <h1 class="headOne">Caracteristicas de QuantumOS</h1>
          <ul class="unorderedList">
            <li class="listItem">Mayor personalizacion</li>
            <li class="listItem">Eliminacion de bloatware</li>
            <li class="listItem">Bajo consumo de recursos</li>
          </ul>
        </div>
      </div>
    </main>
    <?php include 'src/includes/footer.php' ?>
  </div>
</body>

</html>
