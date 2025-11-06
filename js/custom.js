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
  let index4 = 0;
  const total = $(".snsThumb li").length;
  let con4i = document.querySelector(".btn .index");
  let list = document.querySelector(".snsThumb li");

  $(".next").on("click", function () {
    let wid = list.offsetWidth;
    // console.log(wid);
    index4++;
    if (index4 >= total) {
      index4 = 0;
    }
    // console.log(index);
    $(".snsThumb li").animate(
      { transform: `translateX(${-(wid + 60) * index4}px)` },
      function () {
        //   $(".snsThumb").css({ transform: "translateX(0)" });
      }
    );
    $(".snsTxt li").removeClass("active");
    $(".snsTxt li").eq(index4).addClass("active");
    con4i.textContent = `${index4 + 1}`;
  });

  $(".prev").on("click", function () {
    let wid = list.offsetWidth;
    // console.log(wid);
    index4--;
    if (index4 < 0) {
      index4 = total - 1;
    }
    // console.log(index);
    $(".snsThumb li").animate(
      { transform: `translateX(${-(wid + 60) * index4}px)` },
      function () {
        //   $(".snsThumb").css({ transform: "translateX(0)" });
      }
    );
    $(".snsTxt li").removeClass("active");
    $(".snsTxt li").eq(index4).addClass("active");
    con4i.textContent = `${index4 + 1}`;
  });
  con4i.textContent = `${index4 + 1}`;

  /*---------------*/
  const $images = $(".image");
  const $sets = $(".deco .set");

  $images.on("click", function (e) {
    e.preventDefault();

    const con2i = $images.index(this);
    const $target = $sets.eq(con2i);

    // 이미 떠 있는 제품이면 토글로 끄기
    if ($target.is(":visible")) {
      $target.fadeOut(200).removeClass("active");
      $images.removeClass("active");
      return;
    }

    // 다른 제품 선택: 나머지는 모두 끄고 이것만 켜기
    $sets.filter(":visible").hide().removeClass("active");
    $target.fadeIn(200).addClass("active");

    $images.removeClass("active");
    $(this).addClass("active");
  });

  // 클릭 이벤트 추가
  $(".image").on("click", function () {
    const index = $(this).index(); // 몇 번째 이미지인지 확인
    const sets = $(".deco > .set");

    // 모든 세트 숨김
    sets.hide();

    // 클릭한 이미지에 해당하는 세트만 표시
    const currentSet = sets.eq(index - 1).fadeIn(300);

    // 기존 하이라이트 제거
    $(".cookie-highlight-wrapper").removeClass("cookie-highlight-wrapper");

    // 선택된 세트 내 쿠키 이미지에 하이라이트 효과 추가
    currentSet.find("img").each(function () {
      $(this).wrap('<div class="cookie-highlight-wrapper"></div>');
    });
  });

  $(".botLogo").simplyScroll({
    speed: 1,
    pauseOnHover: false,
    pauseOnTouch: false,
  });
});
