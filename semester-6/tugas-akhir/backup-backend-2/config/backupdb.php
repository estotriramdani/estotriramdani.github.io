<?php 
 //koneksi kedatabase
 $koneksi = mysqli_connect("localhost","root","qwe123", "dtks");
 $namaTabel = $_GET['nama_tabel'];
 // nama file
 $filename=$namaTabel."_backup-".date('Y-m-d_H.i.s').".xls";


 //header info for browser
 header("Content-Type: application/vnd-ms-excel"); 
    header('Content-Disposition: attachment; filename="' . $filename . '";');

    //menampilkan data sebagai array dari tabel produk
    $out=array();
 $sql=mysqli_query($koneksi, "SELECT * FROM $namaTabel");
 while($data=mysqli_fetch_assoc($sql)) $out[]=$data;

 $show_coloumn = false;
 foreach($out as $record) {
 if(!$show_coloumn) {
 //menampilkan nama kolom di baris pertama
 echo implode("\t", array_keys($record)) . "\n";
 $show_coloumn = true;
 }
 // looping data dari database
 echo implode("'\t", array_values($record)) . "\n";
 } 
 exit;
?>