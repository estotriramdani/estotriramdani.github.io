<?php
$connection = mysqli_connect('192.168.1.9','root','qwe123','dtks');

$filename  = $_FILES['upload']['tmp_name'];
$handle  = fopen($filename, "r+");
$contents  = fread($handle, filesize($filename));

$sql = explode(';', $contents);

foreach ($sql as $query) {
 $result = mysqli_query($connection, $query);
 if($result){
  echo '<tr><td><br></td></tr>';
  echo '<tr><td>'.$query.'<b>success</b></td></tr>';
  echo '<tr><td><br></td></tr>';
 }
}
fclose($handle);
echo "successfully imported";
?>