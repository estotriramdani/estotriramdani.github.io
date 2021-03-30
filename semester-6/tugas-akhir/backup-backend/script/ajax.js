// Ambil elemen2 yang dibutuhkan

const keyword = document.getElementById('keyword');
const tombolCari = document.getElementById('tombol-cari');
const container = document.getElementsByClassName('hasil-pencarian')[0];

keyword.addEventListener('keyup', function (e) {
  event.preventDefault();
  if (e.keyCode === 13) {
    tombolCari.click();
  }
});

// tambahkan event ketika keyword ditulis
tombolCari.addEventListener('click', function () {
  container.innerHTML = `
  <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status" style="color: #09a129;">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  `;
  setTimeout(() => {
    // buat object ajax
    var xhr = new XMLHttpRequest();

    // cek kesiapan ajax
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        container.innerHTML = xhr.responseText;
      } else if (xhr.readyState == 4 && xhr.status == 404) {
        container.innerHTML = 'Tidak ada';
      }
    };

    // eksekusi ajax
    xhr.open('GET', 'config/ajax.php?keyword=' + keyword.value, true);
    xhr.send();
  }, 1000);
});
