const splash = document.querySelector(".splash");

// setTimeout(() => {
//   splash.style.opacity = "0";
// }, 2000);

// setTimeout(() => {
//   splash.style.display = "none";
// }, 3000);

document.addEventListener("DOMContentLoaded", function () {
  splash.style.display = "none";
  setTimeout(() => {
    splash.style.display = "none";
  }, 3000);
});
// icon menu
const profile = document.querySelectorAll(".profile");
const exp = document.querySelectorAll(".exp");
const port = document.querySelectorAll(".port");
const cert = document.querySelectorAll(".cert");

localStorage.setItem("profile", profile[0].innerHTML);
localStorage.setItem("exp", exp[0].innerHTML);
localStorage.setItem("cert", cert[0].innerHTML);
localStorage.setItem("port", port[0].innerHTML);

for (let i = 0; i < 2; i++) {
  // profile
  profile[i].addEventListener("mouseenter", () => {
    profile[i].innerHTML = `<span style="font-size: 9px;">profile<span>`;
    profile[i].style.backgroundColor = "#e9ecef";
    profile[i].style.color = "#343a40";
  });
  profile[i].addEventListener("mouseleave", () => {
    profile[i].innerHTML = localStorage.getItem("profile");
    profile[i].style.color = "#e9ecef";
    profile[i].style.backgroundColor = "#343a40";
  });
  // exp
  exp[i].addEventListener("mouseenter", () => {
    exp[i].innerHTML = `<span style="font-size: 9px;">exp<span>`;
    exp[i].style.backgroundColor = "#e9ecef";
    exp[i].style.color = "#343a40";
  });
  exp[i].addEventListener("mouseleave", () => {
    exp[i].innerHTML = localStorage.getItem("exp");
    exp[i].style.color = "#e9ecef";
    exp[i].style.backgroundColor = "#343a40";
  });
  // cert
  cert[i].addEventListener("mouseenter", () => {
    cert[i].innerHTML = `<span style="font-size: 9px;">cert<span>`;
    cert[i].style.backgroundColor = "#e9ecef";
    cert[i].style.color = "#343a40";
  });
  cert[i].addEventListener("mouseleave", () => {
    cert[i].innerHTML = localStorage.getItem("cert");
    cert[i].style.color = "#e9ecef";
    cert[i].style.backgroundColor = "#343a40";
  });

  // port
  port[i].addEventListener("mouseenter", () => {
    port[i].innerHTML = `<span style="font-size: 9px;">port<span>`;
    port[i].style.backgroundColor = "#e9ecef";
    port[i].style.color = "#343a40";
  });
  port[i].addEventListener("mouseleave", () => {
    port[i].innerHTML = localStorage.getItem("port");
    port[i].style.color = "#e9ecef";
    port[i].style.backgroundColor = "#343a40";
  });
}

// ==============
