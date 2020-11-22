

$('.menu').click(function () {
  var menu = $(this).attr('id');
  if (menu == "home") {
    $('.content').load('home.html');
  } else if (menu == "about") {
    $('.content').load('about.html');
  } else if (menu == "tutorial") {
    $('.content').load('tutorial.html');
  } else if (menu == "sosmed") {
    $('.content').load('sosmed.html');
  }
});

// halaman yang di load default pertama kali
$('.content').load('about.html');
