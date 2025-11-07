$(function () {
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
