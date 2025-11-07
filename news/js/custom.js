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
  let stop;
  start();

  function start() {
    stop = setInterval(function () {
      $(".youtube").animate({ "margin-left": "-380px" }, 600, function () {
        $(".youtube li:first-child").appendTo(".youtube");
        $(".youtube").css({ "margin-left": "0px" });
      });
    }, 3500);
  }
  function pause() {
    clearInterval(stop);
  }

  $(".youtube").mouseenter(function () {
    pause();
  });

  $(".youtube").mouseleave(function () {
    start();
  });
});

$(function () {
  let stop;
  start();

  function start() {
    stop = setInterval(function () {
      $(".sns").css({ "margin-left": "-210px" });
      $(".sns li:last-child").prependTo(".sns");
      $(".sns").animate({ "margin-left": "0px" }, 600);
    }, 3500);
  }
  function pause() {
    clearInterval(stop);
  }

  $(".sns").mouseenter(function () {
    pause();
  });

  $(".sns").mouseleave(function () {
    start();
  });
});
