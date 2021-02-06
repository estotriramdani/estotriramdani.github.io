const tombolKolokium = document.querySelector("#kolokium");
const contentKolokium = document.querySelector(".kolokium");
const tomboltugasakhir = document.querySelector("#tugasakhir");
const contenttugasakhir = document.querySelector(".tugasakhir");
const tombolpkl = document.querySelector("#pkl");
const contentpkl = document.querySelector(".pkl");

tombolKolokium.addEventListener("click", function () {
  contentKolokium.style.display = "block";
  contenttugasakhir.style.display = "none";
  contentpkl.style.display = "none";
});

tomboltugasakhir.addEventListener("click", function () {
  contentKolokium.style.display = "none";
  contentpkl.style.display = "none";
  contenttugasakhir.style.display = "block";
});

tombolpkl.addEventListener("click", function () {
  contentKolokium.style.display = "none";
  contenttugasakhir.style.display = "none";
  contentpkl.style.display = "block";
});

const logout = document.getElementById("logout");

logout.addEventListener("click", function () {
  sessionStorage.removeItem("id");
  alert("logout berhasil");
  window.location = "login.html";
});
