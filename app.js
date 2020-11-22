$('.menu').click(function () {
  var menu = $(this).attr('id');
  if (menu == "home") {
    $('.content').load('home.html');
  } else if (menu == "about") {
    $('.content').load('about.html');
  } else if (menu == "experiences") {
    $('.content').load('experiences.html');
  } else if (menu == "completions") {
    $('.content').load('completions.html');
  } else if (menu == "start") {
    $('.content').load('about.html');
  } else if (menu == "portfolios") {
    $('.content').load('portfolios.html');
  }
});

$('.content').load('about.html');
