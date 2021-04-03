<?php 
	session_start();
  include_once 'config/koneksi.php';

  if (isset($_SESSION['login'])) {
    header("Location: ./");
    exit;
  }
	// require 'functions.php';
	if (isset($_POST['login'])) {
		$username = $_POST['username'];
		$password = $_POST['password'];
    
		$result = mysqli_query($koneksi, "SELECT * FROM user WHERE username = '$username'");

		// cek username
		if (mysqli_num_rows($result) === 1){
			// cek password 
			$row = mysqli_fetch_assoc($result);
			
			if ($password == $row['password']){
				
				// set session
				$_SESSION["login"] = true;

				header("Location: ./");
				exit();
			}
		}

		$error = true;
	}

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>

    <!-- CDNs -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css"
    />
  </head>
  <body class="bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-5 shadow rounded" style="margin-top: 15vh">
          <div class="login-wrapper p-4">
            <h4 class="mb-4">Login DTKS</h4>
            <?php if ( isset($error) ) : ?>
						<p style="color: red;">Username / Password salah</p>
					<?php endif; ?>
            <div class="login-form">
              <form action="" method="post">
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    class="input form-control"
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    autofocus
                  />
                </div>
                <div class="form-group mb-4">
                  <label for="password">Password</label>
                  <input
                    class="input form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                  />
                </div>
                <button class="btn btn-primary pr-4" type="submit" name="login">
                  <i class="bi bi-box-arrow-in-right"></i> &nbsp; Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
