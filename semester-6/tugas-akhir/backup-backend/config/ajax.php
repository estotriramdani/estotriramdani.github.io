<h4>Hasil Pencarian</h4>

<?php 

require 'koneksi.php';

$keyword = $_GET['keyword'];

$query = "SELECT * FROM dtks
	          WHERE
	        id_dtks = '$keyword' 
          OR 
          nik = '$keyword'
	        ";

$result = mysqli_query($koneksi, $query);

?>

<table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID DTKS</th>
              <th scope="col">Alamat</th>
              <th scope="col">NIK</th>
              <th scope="col">Nama KRT</th>
              <th scope="col">Jumlah Kel.</th>
              <th scope="col">Jumlah ART</th>
              <th scope="col">Perubahan </th>
              <th scope="col">Program</th>
              <th scope="col">RT</th>
              <th scope="col">RW</th>
              <th scope="col">Status</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody> 
            <?php if (mysqli_num_rows($result) <= 0){?>
              <tr>
                <td colspan="12" class="text-center text-danger">Data tidak ditemukan</td>
              </tr>
            <?php } else {?>
            <?php while($row = mysqli_fetch_array($result)){ ?>
              <tr>
                <td><?= $row['id_dtks']; ?></td>
                <td><?= $row['alamat']; ?></td>
                <td><?= $row['nik']; ?></td>
                <td><?= $row['nama_krt']; ?></td>
                <td><?= $row['jml_kel']; ?></td>
                <td><?= $row['jml_art']; ?></td>
                <td><?= $row['perubahan']; ?></td>
                <td><?= $row['program']; ?></td>
                <td><?= $row['rt']; ?></td>
                <td><?= $row['rw']; ?></td>
                <td><?= $row['status']; ?></td>
                <td><a href="detail.php?id=<?= $row['id_dtks']; ?>">Detail</a></td>
              </tr>
            <?php } ?>
            <?php } ?>
          </tbody>
        </table>