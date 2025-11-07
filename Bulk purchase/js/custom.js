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

document.addEventListener("DOMContentLoaded", () => {
  // ======================
  // 날짜 선택기 (flatpickr)
  // ======================
  const dateInput = document.querySelector("#purchaseDate");
  const dateIcon = document.querySelector(".date-icon");

  if (dateInput && dateIcon) {
    // flatpickr 초기화
    flatpickr(dateInput, {
      dateFormat: "Y-m-d",
      locale: "ko", // 한글 적용
      theme: "confetti",
      allowInput: true,
    });

    // 아이콘 클릭 시 달력 열기
    dateIcon.addEventListener("click", () => {
      dateInput._flatpickr.open();
    });
  }

  // ======================
  // 캐릭터 클릭 시 폼으로 스크롤
  // ======================
  const scrollImage = document.querySelector(".steps-group .scroll-img img");
  const formSection = document.querySelector("#form");

  if (scrollImage && formSection) {
    scrollImage.addEventListener("click", function (e) {
      e.preventDefault();

      const scrollOffset = -100;
      const elementPosition = formSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - scrollOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  }
});

// Step 박스 테두리 애니메이션
const steps = document.querySelectorAll(".step01, .step02, .step03, .step04");

if (steps.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  steps.forEach((step) => observer.observe(step));
}
