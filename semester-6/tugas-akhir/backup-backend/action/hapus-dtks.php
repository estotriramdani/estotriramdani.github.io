<?php 

session_start();

include_once '../config/koneksi.php';

$dtks = $_GET['id'];

mysqli_query($koneksi, "DELETE FROM dtks WHERE id_dtks = '$dtks'");

$cekDtks = mysqli_query($koneksi, "SELECT idbdt FROM art_bdt WHERE idbdt = '$dtks'");

$i = 0;

if (mysqli_fetch_assoc($cekDtks)){
	
	$getArt = mysqli_query($koneksi, "SELECT * FROM art_bdt WHERE idbdt = '$dtks'");

	while ($d = mysqli_fetch_array($getArt)) {
		$idartbdt = $d['idartbdt'];
		mysqli_query($koneksi, "DELETE FROM art_bdt WHERE idartbdt = $idartbdt");
	}

}

$_SESSION['whichDTKS'] = $dtks;
$_SESSION['message'] = true;
header("Location: ../cari.php");