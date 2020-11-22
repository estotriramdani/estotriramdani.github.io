

$('.menu').click(function () {
  var menu = $(this).attr('id');
  if (menu == "home") {
    $('.content').load('home.html');
  } else if (menu == "about") {
    $('.content').load('about.html');
  } else if (menu == "experiences") {
    $('.content').load('experiences.html');
  } else if (menu == "sosmed") {
    $('.content').load('sosmed.html');
  } else if (menu == "start") {
    $('.content').load('about.html');
  }
});

// halaman yang di load default pertama kali
$('.content').load('experiences.html');
