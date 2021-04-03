<?php 
$title = "Tambah ART";
include_once 'template/navbar.php';
include_once 'config/koneksi.php';
?>

<div class="container mt-3 mb-3">
 <h3 class="mb-4">Tambah ART</h3>

  <!-- Tampilkan Pesan Sukses  -->
  <?php if ($_SESSION['message'] == true){ ?>
    <div class="alert alert-success" role="alert">
      ART Baru Berhasil Ditambahkan
    </div>
  <?php } ?>
  
  <!-- Tampilkan Pesan Error  -->
  <?php if ($_SESSION['error'] == true){ ?>
    <div class="alert alert-danger" role="alert">
      NIK Sudah terdaftar pada ID DTKS: <u><a href="detail.php?id=<?php echo $_SESSION['dtks']; ?>"><?php echo $_SESSION['dtks']; ?></a></u> 
    </div>
  <?php } ?>

  <!-- Tampilkan Pesan Error Jika sudah ada KRT -->
  <?php if ($_SESSION['errorKRT'] == true){ ?>
    <div class="alert alert-danger" role="alert">
      Kepala Rumah Tangga untuk DTKS: <u><a href="detail.php?id=<?php echo $_SESSION['dtks']; ?>"><?php echo $_SESSION['dtks']; ?></a></u> sudah ada terdaftar. Silakan masukkan anggota rumah tangga.
    </div>
  <?php } ?>

  <!-- Set message ke false lagi -->
  <?php $_SESSION['message'] = false; ?>
  <?php $_SESSION['errorKRT'] = false; ?>
  <?php $_SESSION['dtks'] = ''; ?>
  <?php $_SESSION['error'] = false; ?>

 <form action="action/art-action.php">
  <div class="form-group row">
    <label for="idbdt" class="col-sm-3 col-form-label">ID DTKS</label>
    <div class="col-sm-9">
      <select name="idbdt" id="idbdt" class="form-control" required>
        <option value="">Cari ID DTKS atau Nama KRT</option>
        <?php  
          $data = mysqli_query($koneksi, "SELECT * FROM dtks");
          while ($d = mysqli_fetch_array($data)) {
        ?>
        <option aria-required value="<?= $d['id_dtks']; ?>"><?= $d['id_dtks']; ?> | KRT: <?= $d['nama_krt']; ?></option>
        <?php } ?>
      </select>
    </div>
  </div>

  <div class="form-group row">
    <label for="nama" class="col-sm-3 col-form-label">Nama</label>
    <div class="col-sm-9">
      <input required type="text" class="form-control" id="nama" name="nama">
    </div>
  </div>
  
  <div class="form-group row">
    <label for="jenis_kelamin" class="col-sm-3 col-form-label">Jenis Kelamin</label>
    <div class="col-sm-9">
      <select name="jenis_kelamin" id="jenis_kelamin" class="form-control" required>
        <option value="">Pilih Jenis Kelamin</option>
        <option aria-required value="1">Laki-laki</option>
        <option aria-required value="2">Perempuan</option>
      </select>
    </div>
  </div>

  <div class="form-group row">
    <label for="tmp_lahir" class="col-sm-3 col-form-label">Tempat Lahir</label>
    <div class="col-sm-9">
      <input required type="text" class="form-control" id="tmp_lahir" name="tmp_lahir">
    </div>
  </div>

  <div class="form-group row">
    <label for="tgl_lahir" class="col-sm-3 col-form-label">Tanggal Lahir</label>
    <div class="col-sm-9">
      <input required type="date" class="form-control" id="tgl_lahir" name="tgl_lahir">
    </div>
  </div>

  <div class="form-group row">
    <label for="hub_krt" class="col-sm-3 col-form-label">Hubungan dengan Kepala RT</label>
    <div class="col-sm-9">
      <select name="hub_krt" id="hub_krt" class="form-control" required>
        <option value="">Pilih</option>
        <option aria-required value="Kepala RT">Kepala RT</option>
        <option aria-required value="Istri/Suami">Istri/Suami</option>
        <option aria-required value="Anak">Anak</option>
      </select>
    </div>
  </div>

  <div class="form-group row">
    <label for="nik" class="col-sm-3 col-form-label">NIK</label>
    <div class="col-sm-9">
      <input required type="text" class="form-control" id="nik" name="nik">
    </div>
  </div>

  <div class="form-group row">
    <label for="no_kk" class="col-sm-3 col-form-label">No. KK</label>
    <div class="col-sm-9">
      <input required type="text" class="form-control" id="no_kk" name="no_kk">
    </div>
  </div>

  <div class="form-group row">
    <label for="namagadis_ibukandung" class="col-sm-3 col-form-label">Nama Gadis Ibu Kandung (Opsional)</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="namagadis_ibukandung" name="namagadis_ibukandung">
    </div>
  </div>

  <div class="form-group row">
    <label for="psnoka_bpjs" class="col-sm-3 col-form-label">PS No. Ka. BPJS (Opsional)</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="psnoka_bpjs" name="psnoka_bpjs">
    </div>
  </div>

  <button type="submit" class="btn btn-info">Submit</button>

 </form>


</div>


<script type="text/javascript">
 $(document).ready(function() {
     $('#idbdt').select2();
 });
</script>

<script src="script/art.js"></script>
<?php 

include_once 'template/footer_form.php'
?>