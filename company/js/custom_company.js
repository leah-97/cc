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

$(function () {
  $(".bgTxt1").simplyScroll({
    speed: 2,
    pauseOnHover: false,
    pauseOnTouch: false,
  });
});
$(function () {
  $(".bgTxt2").simplyScroll({
    speed: 2,
    pauseOnHover: false,
    pauseOnTouch: false,
    direction: "backwards",
  });
});

$(function () {
  let i = 0;
  let total = $(".m1 li").length;
  // console.log(total);

  setInterval(function () {
    $(".mslide1")
      .stop()
      .animate(
        {
          "margin-top": "-50vh",
        },
        1000,
        function () {
          $(".mslide1 li:first-child").appendTo(".mslide1");
          $(".mslide1").css({ "margin-top": "0" });
        }
      );
    $(".mslide2 li:last-child").prependTo(".mslide2");
    $(".mslide2").css({ "margin-top": "-50vh" });
    $(".mslide2").stop().animate(
      {
        "margin-top": "0",
      },
      1000
    );

    // console.log(i);

    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    $(".m1 li").fadeOut();
    $(".m1 li").eq(i).fadeIn();
    $(".m2 li").fadeOut();
    $(".m2 li").eq(i).fadeIn();
  }, 4000);

  $(".route").on("click", function () {
    $(".modal").fadeIn(300);
  });
  $("#close").on("click", function () {
    $(".modal").fadeOut(300);
  });
});
