<!DOCTYPE html>
<html>
<head>
 <title>export - import</title>
</head>
<body>
 <h3>export & import database</h3>
 <a href="data.php">lihat data</a><br>
 <a href="backup.php">backup database</a><br><br>
 <a href="backup_backup.sql" download=""> download database</a><br><br>


<!-- untuk upload file.sql -->
 <form action="dbimport.php" method="post" enctype="multipart/form-data">
 <b>restore</b><br><input type="file" name="upload"><br>
 <button type="submit" name="kirim">kirim</button> 
 </form>
 

</body>
</html>