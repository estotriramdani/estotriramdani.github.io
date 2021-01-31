$(".menu").click(function () {
  var menu = $(this).attr("id");
  if (menu == "home") {
    $(".content").load("pages/home.html");
  } else if (menu == "exp") {
    $(".content").load("pages/exp.html");
  } else if (menu == "profile") {
    $(".content").load("pages/profile.html");
  } else if (menu == "cert") {
    $(".content").load("pages/cert.html");
  } else if (menu == "port") {
    $(".content").load("pages/port.html");
  }
});

$(".content").load("pages/home.html");
