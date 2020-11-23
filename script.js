$(".name").click(function () {
  $(".name-layer").css("transform", "rotate(6deg)");
});

$(".name").mouseleave(function () {
  $(".name-layer").css("transform", "rotate(0deg)");
});
