
<?php 
$title = 'Beranda';
include_once 'config/koneksi.php';
include_once 'template/navbar.php';
$query = "SELECT * FROM dtks";
$result = mysqli_query($koneksi, $query);

?>
    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>
    <!-- End Jumbotron -->

    <!-- MAIN CONTENT -->
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <div class="row mb-4">
            <div class="col-sm-5">
              <div class="card">
                <div class="card-header-top">
                  <p><i class="bi bi-calculator"></i> <?php echo mysqli_num_rows($result) ?></p>
                </div>
                <div class="card-body">
                  <p class="card-text">Jumlah DTKS Saat Ini.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="card">
                <div class="card-header-top">
                  <div class="card-header-top">
                    <p>
                      <span class="number"><?php echo date('H:i a'); ?></span> <br />
                      <span style="font-size: 0.8em">
                        <?php echo date('D, d-m-Y') ?></span
                      >
                    </p>
                  </div>
                </div>
                <div class="card-body">
                  <p class="card-text">Waktu Sekarang</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <a href="ajukan.php">
                  <div class="card-header-top">
                    <p style="font-size: 62px; cursor: pointer">
                      <i class="bi bi-clipboard-plus"></i>
                    </p>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Ajukan DTKS Baru</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <a href="cari.php">
                  <div class="card-header-top">
                    <p style="font-size: 62px; cursor: pointer">
                      <i class="bi bi-zoom-in"></i>
                    </p>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Cari / Cek DTKS</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="text-white shadow p-2" style="height: 580px; overflow-y: auto; background-color: #0a2e36; border-radius: 20px;">
            <h4>Perhatian!!</h4>

            <?php include 'config/koneksi.php'; ?>
            <?php  ?>
            
            <div class="perhatian">
              <p>Kepala Rumah Tangga untuk ID DTKS <b>32020103023</b> belum terdaftar. Segera tambahkan kepala rumah tangga.</p>
              <div style="background-color: white; height: 2px; width: 100%; margin-top: -5px;"></div>  
            </div>

          </div>
        </div>
      </div> 
    </div>
    <!-- MAIN CONTENT -->
    <?php include_once 'template/footer.php' ?>
