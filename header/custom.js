$(function () {
  $(window).on("scroll", function () {
    let space = $(window).scrollTop();
    if (space > 10) {
      $("header").addClass("on");
      $("header .head_w").removeClass("on");
      $("header .head_r").addClass("on");
    } else {
      $("header .head_r").removeClass("on");
      $("header .head_w").addClass("on");
      $("header").removeClass("on");
    }
  });

  $("header .bars").on("click", function () {
    $("#menu").animate({ right: "-50px" }, 600, "swing");
  });
  $("#menu .hclose").on("click", function () {
    $("#menu").animate({ right: "-100%" }, 600, "swing");
  });
});
