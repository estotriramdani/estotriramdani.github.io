<?php

session_start();

include_once '../config/koneksi.php';

// Generate ID DTKS Baru
// Format TahunBulanTanggalJamMenit diajukan
$newIdDTKS = date('Ymdhi');


// Get Bulan dan Tahun
switch (date('m')) {
  case '01':
    $bulan = "Januari";
    break;
  case '02':
    $bulan = "Februari";
    break;
  case '03':
    $bulan = "Maret";
    break;
  case '04':
    $bulan = "April";
    break;
  case '05':
    $bulan = "Mei";
    break;
  case '06':
    $bulan = "Juni";
    break;
  case '07':
    $bulan = "Juli";
    break;
  case '08':
    $bulan = "Agustus";
    break;
  case '09':
    $bulan = "September";
    break;
  case '10':
    $bulan = "Oktober";
    break;
  case '11':
    break;
  default:
    $bulan = "Desember";
    break;
}
$tahun =  date('Y');

// Insert Data DTKS Baru
$id_dtks = $newIdDTKS;
$alamat = $_GET['alamat'] . " RT " . $_GET['rt'] . " RW " . $_GET['rw'];
$nik = $_GET['nik'];
$nama_krt = $_GET['nama_krt'];
$jml_kel = $_GET['jml_kel'];
$jml_art = $_GET['jml_art'];
$perubahan = "$bulan $tahun";
$program = $_GET['program'];
$rt = $_GET['rt'];
$rw = $_GET['rw'];
$status = 'Pengajuan Baru';

// cek nik 
$cekNik = mysqli_query($koneksi, "SELECT nik FROM dtks WHERE nik = '$nik'");

if (mysqli_fetch_assoc($cekNik)){
  $_SESSION['error'] = true;
  header("Location: ../ajukan.php");
  exit;
}

$query = "INSERT INTO dtks VALUES('$id_dtks', '$alamat', '$nik', '$nama_krt', $jml_kel, $jml_art, '$perubahan', '$program', '$rt', '$rt', '$status')";

mysqli_query($koneksi, $query);

$_SESSION['message'] = true;

header("Location: ../ajukan.php");



?>