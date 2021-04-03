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

<div class="table-responsive">
        <table class="table table-striped">
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
            <?php 
              while($row = mysqli_fetch_array($result)){
            ?>
              <tr
              <?php if ($row['status'] == 'Pengajuan Baru') {
                echo "class='bg-info text-white'";
              }?>
              >
                <td> 
                  <a 
                  style='text-decoration: underline; font-weight: bold;'
                  <?php if ($row['status'] == 'Pengajuan Baru') {
                    echo "class='bg-info text-white'";
                  }?>
                  href="detail.php?id=<?= $row['id_dtks']; ?>">
                    <?= $row['id_dtks']; ?>
                  </a> 
                </td>
                <td><?= $row['alamat']; ?></td>
                <td><?= $row['nik']; ?></td>
                <td><?= $row['nama_krt']; ?></td>
                <td><?= $row['jml_kel']; ?></td>
                <td><?= $row['jml_art']; ?></td>
                <td><?= $row['perubahan']; ?></td>
                <td><?= preg_replace("/[^a-zA-Z]/", " ", $row['program']); ?></td>
                <td><?= $row['rt']; ?></td>
                <td><?= $row['rw']; ?></td>
                <td><?= $row['status']; ?></td>
                <td class="text-center">
                  <a class="btn btn-danger" href="detail.php?id=<?= $row['id_dtks']; ?>" onclick="return confirm('yakin')">Hapus</a>
                </td>
              </tr>
            <?php 
          }
              // endforeach; 
            ?>
          </tbody>
        </table>