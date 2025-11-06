$(function () {
  $(".image").on("click", function () {
    let i = $(".image").index(this);
    console.log(i);

    if ($(this).hasClass("active")) {
      $(".deco .set").eq(i).fadeOut();
      $(this).removeClass("active");
    } else {
      $(".deco .set").hide();
      $(".deco .set").eq(i).fadeIn();
      $(".image").removeClass("active");
      $(this).addClass("active");
    }
  });
});
