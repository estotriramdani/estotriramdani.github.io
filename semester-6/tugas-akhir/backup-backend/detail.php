<?php 

include_once 'config/koneksi.php';


$id = $_GET['id'];

$title = "Detail: $id";

$query = "SELECT * FROM art_bdt WHERE idbdt = '$id'";

$result = mysqli_query($koneksi, $query);

$getRtRW = mysqli_query($koneksi, "SELECT * FROM dtks WHERE id_dtks = $id");
$data = mysqli_fetch_assoc($getRtRW);

include_once 'template/navbar.php';

?>
<div class="preloader">
  <div>
    <div class="spinner-border text-white" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</div>

    <div class="container mt-4" style="min-height: 75vh;">
    <div class="breadcumbs mb-4 shadow-sm">
      <a href="./">Beranda</a> / <a href="cari.php">Cari</a> / <a href="detail.php?id=<?= $_GET['id']; ?>">Detail: <?= $_GET['id']; ?></a>  
    </div>
      <div class="row">
          
        <div class="col-sm-6">
          <h6>ID DTKS:</h6>
          <h4><?= $_GET['id']; ?></h4>
          
        </div>
        <div class="col-sm-6">
          <h6>Alamat</h6>
          <h4><?= $data['alamat']?></h4>
        </div>
      </div>

      <!--  Pesan sukses hapus -->
      <?php if ($_SESSION['message'] == true){ ?>
        <div class="alert alert-success" role="alert">
          ART (<?php echo $_SESSION['whichART']; ?>) atas nama <?php echo $_SESSION['name'] ?> berhasil dihapus!
        </div>
      <?php } 
      $_SESSION['message'] = false;
      $_SESSION['whichDTKS'] = '';
      $_SESSION['name'] = '';
      ?>

      <!-- Table list art -->
      <div class="table-responsive mt-3">
        <table class="table table-striped ">
          <thead>
            <tr>
              <th>ID ART BDT</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>Tempat Lahir</th>
              <th>Tanggal Lahir</th>
              <th>Hub. KRT</th>
              <th>NIK</th>
              <th>No. KK</th>
              <th>Nama Gadis Ibu Kandung</th>
              <th>PS. NO. KA. BPJS</th>
              <th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            <?php if(mysqli_num_rows($result) <= 0) {?>
              <tr class="text-center text-warning">
                <td colspan="11">Anggota rumah tangga <strong>belum</strong> dimasukkan ke dalam sistem <br> Silakan input anggota rumah tangga (<strong>termasuk kepala rumah tangga</strong>) terlebih dahulu</td>
              </tr>
            <?php } else if (mysqli_num_rows($result) > 0){?>
            <?php while($row = mysqli_fetch_array($result)){ ?>
              <tr>
                <td><?= $row['idartbdt']; ?></td>
                <td><?= $row['nama']; ?></td>
                <td><?php if ($row['jenis_kelamin'] == '1') { echo "Laki-laki";} else {echo "Perempuan";} ?></td>
                <td><?= $row['tmp_lahir']; ?></td>
                <td><?= $row['tgl_lahir']; ?></td>
                <td><?= $row['hub_krt']; ?></td>
                <td><?= $row['nik']; ?></td>
                <td><?= $row['no_kk']; ?></td>
                <td><?= $row['namagadis_ibukandung']; ?></td>
                <td><?= $row['psnoka_bpjs']; ?></td>
                <td><a class="btn btn-danger" href="action/hapus-art.php?id=<?php echo $row['idartbdt']; ?>&nama=<?php echo $row['nama']; ?>" onclick="return confirm('Yakin Hapus Data?')">Hapus?</a></td>
              </tr>
            <?php } ?>
            <?php } ?>
          </tbody>
        </table>
      </div>
    </div>
    <script src="script/preloader.js"></script>

    <?php include_once 'template/footer.php'; ?>
