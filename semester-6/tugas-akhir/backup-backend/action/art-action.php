<?php

session_start();
include_once '../config/koneksi.php';

// nomor acak 
$rand1 = rand(1, 9);
$rand2 = rand(1, 9);

// GET RT dan RW
$idbdt = $_GET['idbdt'];

$getRtRW = mysqli_query($koneksi, "SELECT * FROM dtks WHERE id_dtks = $idbdt");
$data = mysqli_fetch_assoc($getRtRW);

$rw = $data['rw'];
$rt = $data['rt'];
$idartbdt = $_GET['idbdt'] . "$rand1$rand2";
$ruta6 = '';
$nama = $_GET['nama'];
$jenis_kelamin = $_GET['jenis_kelamin'];
$tmp_lahir = $_GET['tmp_lahir'];
$tgl_lahir = $_GET['tgl_lahir'];
$hub_krt = $_GET['hub_krt'];
$nik = $_GET['nik'];
$no_kk = $_GET['no_kk'];
$namagadis_ibukandung = $_GET['namagadis_ibukandung'];
$psnoka_bpjs = $_GET['psnoka_bpjs'];
$adaKepalaRT = false;

// Cek sudah ada KRT atau belum
$getKRT = mysqli_query($koneksi, "SELECT * FROM art_bdt WHERE idbdt = '$idbdt'");

while ($d = mysqli_fetch_array($getKRT)) {
	if ($d['hub_krt'] == 'Kepala RT'){
		$adaKepalaRT = true;
	}
}

if ($hub_krt == 'Kepala RT' && $adaKepalaRT == true){
	header("Location: ../tambah-art.php");
	$_SESSION['errorKRT'] = true;
	exit;
} else {
	// cek nik
	$cekNik = mysqli_query($koneksi, "SELECT nik FROM art_bdt WHERE nik = '$nik'");
	$getNik = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT * FROM art_bdt WHERE nik = '$nik'"));

	if (mysqli_fetch_assoc($cekNik)){
		$_SESSION['dtks'] = $getNik['idbdt'];
	  	$_SESSION['error'] = true;
	  	header("Location: ../tambah-art.php");
	  	exit;
	}

	mysqli_query($koneksi, "INSERT INTO art_bdt VALUES(
	  '$idbdt', '$rw', '$rt', '$idartbdt', '$ruta6', '$nama', '$jenis_kelamin', '$tmp_lahir', 
	  '$tgl_lahir', '$hub_krt', '$nik', '$no_kk', '$namagadis_ibukandung', '$psnoka_bpjs')");

	$_SESSION['message'] = true;
	header("Location: ../tambah-art.php");
}



?>