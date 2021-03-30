<?php 

$koneksi = mysqli_connect('localhost', 'root', 'qwe123', 'dtks');

if (mysqli_connect_errno()){
	echo "Koneksi database gagal : " . mysqli_connect_error();
}


?>