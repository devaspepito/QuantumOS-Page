<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login - QuantumOS</title>
  <link href="./src/css/all-content.css" rel="stylesheet">
  <link href="./src/css/register.css" rel="stylesheet">
  <link href="./src/css/header.css" rel="stylesheet">
  <link href="./src/css/footer.css" rel="stylesheet">
  <link href="./src/css/global.css" rel="stylesheet">
</head>

<body>
  <div id="root">
    <?php include 'src/includes/header.php' ?>
    <main class="allContent">
      <div class="wrapper">
        <div class="title-text">
          <div class="title signup">Create Account</div>
        </div>
        <div class="form-container">
          <div class="form-inner">
            <form action="#" class="signup">
              <div class="field">
                <input type="text" required />
                <span>Username</span>
              </div>
              <div class="field">
                <input type="email" required />
                <span>Email</span>
              </div>
              <div class="field">
                <input type="password" required />
                <span>Password</span>
              </div>
              <div class="field">
                <input type="password" required />
                <span>Repeat Password</span>
              </div>
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Registrar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <?php include 'src/includes/footer.php' ?>
  </div>

</body>

</html>
