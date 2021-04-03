const path = window.location.pathname;
console.log(path);

const berandaNav = document.getElementById('berandaNav');
const cariNav = document.getElementById('cariNav');
const ajukanNav = document.getElementById('ajukanNav');
const ajukanArt = document.getElementById('ajukanArt');

if (path.substr(1, 5) == 'index' || path.substr(0, 5) == '/') {
  berandaNav.classList.add('active');
} else if (path.substr(1, 5) == 'cari.') {
  cariNav.classList.add('active');
} else if (path.substr(1, 5) == 'ajuka') {
  ajukanNav.classList.add('active');
} else if (path.substr(1, 5) == 'tamba') {
  ajukanArt.classList.add('active');
}
