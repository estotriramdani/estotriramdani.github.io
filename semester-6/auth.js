const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const validation = document.getElementById("validation");

username.addEventListener("keyup", function (e) {
  event.preventDefault();
  if (e.keyCode === 13) {
    btn.click();
  }
});

password.addEventListener("keyup", function (e) {
  event.preventDefault();
  if (e.keyCode === 13) {
    btn.click();
  }
});

let usernameList = [];
allUser();
let passwordList = [];
passwordUser();

btn.addEventListener("click", function () {
  dataUserTryLogin(username.value, password.value);
});

if (sessionStorage.getItem("id")) {
  alert("Anda sudah login");
  window.location = "index.html";
}

const dataUserTryLogin = (user, pw) => {
  const usernameBaru = user;
  const passwordBaru = pw;
  if (usernameList.includes(usernameBaru) == true) {
    if (passwordList.includes(passwordBaru) == true) {
      window.location = "./";
      sessionStorage.setItem("id", passwordBaru);
    } else {
      validation.innerHTML = `<div class="alert alert-warning" role="alert">
                                Password salah
                              </div>`;
      password.value = "";
    }
  } else {
    validation.innerHTML = `<div class="alert alert-danger" role="alert">
                              Username salah
                            </div>`;
    username.value = "";
  }
};

function allUser() {
  fetch("user.json")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((r) => {
        usernameList.push(r.username);
      });
    });
}

function passwordUser() {
  fetch("user.json")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((r) => {
        passwordList.push(r.password);
      });
    });
}
