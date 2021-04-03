<?php 

session_start();

include_once '../config/koneksi.php';

$idartbdt = $_GET['id'];

mysqli_query($koneksi, "DELETE FROM art_bdt WHERE idartbdt = '$idartbdt'");

$id = substr($idartbdt, 0, strlen($idartbdt) - 2);

$_SESSION['message'] = true;
$_SESSION['whichART'] = $idartbdt;
$_SESSION['name'] = $_GET['nama'];

header("Location: ../detail.php?id=$id");

?>