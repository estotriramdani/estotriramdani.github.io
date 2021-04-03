
<?php 
$title = 'Pengajuan DTKS Baru';
include_once 'template/navbar.php'
?>


<div class="container mt-3 mb-3">
  <h3 class="mb-4">Pengajuan DTKS Baru</h3>
  
  <!-- Tampilkan Pesan Sukses  -->
  <?php if ($_SESSION['message'] == true){ ?>
    <div class="alert alert-success" role="alert">
      Pengajuan Baru Berhasil Ditambahkan
    </div>
  <?php } ?>

  <!-- Tampilkan Pesan Error  -->
  <?php if ($_SESSION['error'] == true){ ?>
    <div class="alert alert-danger" role="alert">
      NIK Kepala RT Sudah terdaftar
    </div>
  <?php } ?>

  <!-- Set message ke false lagi -->
  <?php $_SESSION['message'] = false; ?>
  <?php $_SESSION['error'] = false; ?>

  <form action="action/pengajuan-action.php">
    <div class="form-group row">
      <label for="nik" class="col-sm-3 col-form-label">NIK Kepala Rumah Tangga</label>
      <div class="col-sm-9">
        <input required type="text" class="form-control" id="nik" name="nik">
      </div>
    </div>
    <div class="form-group row">
      <label for="nama_krt" class="col-sm-3 col-form-label">Nama Kepala Rumah Tangga</label>
      <div class="col-sm-9">
        <input required type="text" class="form-control" id="nama_krt" name="nama_krt" placeholder="Contoh: Roni Hidayat">
      </div>
    </div>
    <div class="form-group row">
      <label for="jml_kel" class="col-sm-3 col-form-label">Jumlah Keluarga</label>
      <div class="col-sm-9">
        <input required type="number" class="form-control" id="jml_kel" name="jml_kel" placeholder="Contoh: 1">
      </div>
    </div>
    <div class="form-group row">
      <label for="jml_art" class="col-sm-3 col-form-label">Jumlah Anggota Rumah Tangga</label>
      <div class="col-sm-9">
        <input required type="number" class="form-control" id="jml_art" name="jml_art" placeholder="Contoh: 9">
      </div>
    </div>
    <div class="form-group row">
      <label for="alamat" class="col-sm-3 col-form-label">Alamat</label>
      <div class="col-sm-9">
        <input required type="text" class="form-control" id="alamat" name="alamat" placeholder="Contoh: KP PASAR">
      </div>
    </div>
    <div class="form-group row">
      <label for="rt" class="col-sm-3 col-form-label">RT</label>
      <div class="col-sm-9">
        <input required type="text" class="form-control" id="rt" name="rt" placeholder="Contoh: 01">
      </div>
    </div>
    <div class="form-group row">
      <label for="rw" class="col-sm-3 col-form-label">RW</label>
      <div class="col-sm-9">
        <input required type="text" class="form-control" id="rw" name="rw" placeholder="Contoh: 10">
      </div>
    </div>
    <div class="form-group row">
      <label for="program" class="col-sm-3 col-form-label">Program</label>
      <div class="col-sm-9">
        <input required type="text" class="form-control" id="program" name="program" placeholder="Contoh: PKH, BST">
      </div>
    </div>
    <button type="submit" class="btn btn-info" style="width: 200px;">Ajukan</button>
  </form>

</div>



<?php 
include_once 'template/footer_form.php'
?>