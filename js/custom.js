$(function () {
  let index = 0;
  const total = $(".snsThumb li").length;
  let i = document.querySelector(".btn .index");
  let list = document.querySelector(".snsThumb li");

  $(".next").on("click", function () {
    let wid = list.offsetWidth;
    // console.log(wid);
    index++;
    if (index >= total) {
      index = 0;
    }
    // console.log(index);
    $(".snsThumb li").animate(
      { transform: `translateX(${-(wid + 60) * index}px)` },
      function () {
        //   $(".snsThumb").css({ transform: "translateX(0)" });
      }
    );
    $(".snsTxt li").removeClass("active");
    $(".snsTxt li").eq(index).addClass("active");
    i.textContent = `${index + 1}`;
  });

  $(".prev").on("click", function () {
    let wid = list.offsetWidth;
    // console.log(wid);
    index--;
    if (index < 0) {
      index = total - 1;
    }
    // console.log(index);
    $(".snsThumb li").animate(
      { transform: `translateX(${-(wid + 60) * index}px)` },
      function () {
        //   $(".snsThumb").css({ transform: "translateX(0)" });
      }
    );
    $(".snsTxt li").removeClass("active");
    $(".snsTxt li").eq(index).addClass("active");
    i.textContent = `${index + 1}`;
  });
  i.textContent = `${index + 1}`;

  /*---------------*/
  const $images = $(".image");
  const $sets = $(".deco .set");

  $images.on("click", function (e) {
    e.preventDefault();

    const i = $images.index(this);
    const $target = $sets.eq(i);

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
});
