document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(MotionPathPlugin, Draggable, InertiaPlugin);

  const images = gsap.utils.toArray(".image");
  const container = document.querySelector(".con02_con");
  const orbit = document.querySelector(".orbit");
  const svgPath = document.querySelector("#circle");

  let currentDraggable = null;
  let isInitialized = false;

  // ⭐ MotionPath 적용 함수
  function applyMotionPath() {
    const containerStyle = window.getComputedStyle(container);
    if (containerStyle.display === "none") {
      console.log("❌ Container 숨김 - MotionPath 적용 안 함");
      orbit.classList.remove("ready");
      isInitialized = false;
      return;
    }

    const bbox = svgPath.getBBox();
    if (bbox.width === 0 || bbox.height === 0) {
      console.log("❌ SVG 크기 0 - 대기 중");
      return;
    }

    console.log("✅ MotionPath 적용 - SVG:", bbox.width, "x", bbox.height);

    const path = "#circle";
    gsap.set(images, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        end: (i) => i / images.length,
        autoRotate: true,
      },
    });

    // ⭐ MotionPath 적용 완료 후 orbit 보이기
    setTimeout(() => {
      orbit.classList.add("ready");
      console.log("✨ Orbit 표시 완료");
    }, 50);

    isInitialized = true;
  }

  // Draggable 생성
  function initDraggable() {
    if (currentDraggable) {
      currentDraggable.kill();
    }

    currentDraggable = Draggable.create(container, {
      type: "rotation",
      inertia: true,
      throwResistance: 3000,
      edgeResistance: 0.8,
      cursor: "grab",
      onPress() {
        gsap.set(this.target, { cursor: "grabbing" });
      },
      onRelease() {
        gsap.set(this.target, { cursor: "grab" });
      },
    })[0];

    console.log("✅ Draggable 생성");
  }

  // 초기화 함수
  function initialize() {
    const containerStyle = window.getComputedStyle(container);

    if (containerStyle.display === "none") {
      console.log("📱 모바일 - 초기화 안 함");
      orbit.classList.remove("ready");
      if (currentDraggable) {
        currentDraggable.kill();
        currentDraggable = null;
      }
      gsap.set(images, { clearProps: "all" });
      isInitialized = false;
      return;
    }

    console.log("🔄 초기화 시작");

    // ⭐ orbit 투명하게
    orbit.classList.remove("ready");

    // 이전 상태 정리
    gsap.killTweensOf(images);
    if (currentDraggable) {
      currentDraggable.kill();
      currentDraggable = null;
    }

    // CSS 전환 완료 대기 후 적용
    setTimeout(() => {
      applyMotionPath();
      if (isInitialized) {
        initDraggable();
      }
    }, 100);
  }

  // ResizeObserver로 container 크기 변화 감지
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      console.log("📐 크기 변화:", width, "x", height);

      if (width > 0 && height > 0) {
        setTimeout(() => {
          initialize();
        }, 150);
      } else {
        // 크기가 0이면 orbit 숨김
        orbit.classList.remove("ready");
      }
    }
  });

  resizeObserver.observe(container);

  // 페이지 로드 시 초기화
  initialize();

  // 윈도우 리사이즈 백업
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      initialize();
    }, 200);
  });
});

$(function () {
  const $slider = $(".mobile-slider");
  const $wrapper = $(".slider-wrapper");
  const $slides = $(".slide");
  const $indicators = $(".slider-indicators");
  const $prevBtn = $(".slider-button.prev");
  const $nextBtn = $(".slider-button.next");

  let currentIndex = 0;
  const totalSlides = $slides.length;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  let hasMoved = false; // ⭐ 실제로 드래그했는지 확인

  for (let i = 0; i < totalSlides; i++) {
    $indicators.append(
      `<span class="indicator ${
        i === 0 ? "active" : ""
      }" data-index="${i}"></span>`
    );
  }

  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;

    currentIndex = index;
    const offset = -currentIndex * 100;
    $wrapper.css("transform", `translateX(${offset}%)`);

    $(".indicator").removeClass("active");
    $(`.indicator[data-index="${currentIndex}"]`).addClass("active");
  }

  $prevBtn.on("click", function (e) {
    e.stopPropagation(); // ⭐ 이벤트 전파 차단
    goToSlide(currentIndex - 1);
  });

  $nextBtn.on("click", function (e) {
    e.stopPropagation(); // ⭐ 이벤트 전파 차단
    goToSlide(currentIndex + 1);
  });

  $indicators.on("click", ".indicator", function (e) {
    e.stopPropagation(); // ⭐ 이벤트 전파 차단
    const index = parseInt($(this).data("index"));
    goToSlide(index);
  });

  // ⭐ 이미지 클릭 이벤트 차단
  $(".slide-image").on("click touchend", function (e) {
    if (!hasMoved) {
      e.stopPropagation();
      // 이미지 클릭 시 원하는 동작 추가 가능
      console.log("이미지 클릭됨");
    }
  });

  $slider.on("mousedown touchstart", function (e) {
    // ⭐ 버튼이나 인디케이터 클릭은 무시
    if ($(e.target).closest(".slider-button, .indicator").length > 0) {
      return;
    }

    isDragging = true;
    hasMoved = false; // ⭐ 초기화
    startX =
      e.type === "touchstart" ? e.originalEvent.touches[0].clientX : e.clientX;
    $wrapper.css("transition", "none");
  });

  $(document).on("mousemove touchmove", function (e) {
    if (!isDragging) return;

    currentX =
      e.type === "touchmove" ? e.originalEvent.touches[0].clientX : e.clientX;
    const diffX = currentX - startX;

    // ⭐ 5px 이상 움직이면 드래그로 인식
    if (Math.abs(diffX) > 5) {
      hasMoved = true;
    }

    const offset = -currentIndex * 100 + (diffX / window.innerWidth) * 100;
    $wrapper.css("transform", `translateX(${offset}%)`);
  });

  $(document).on("mouseup touchend", function (e) {
    if (!isDragging) return;

    isDragging = false;
    $wrapper.css("transition", "transform 0.3s ease-out");

    const diffX = currentX - startX;
    const threshold = window.innerWidth * 0.2;

    // ⭐ 실제로 드래그한 경우에만 슬라이드 변경
    if (hasMoved && Math.abs(diffX) > 10) {
      if (diffX > threshold && currentIndex > 0) {
        goToSlide(currentIndex - 1);
      } else if (diffX < -threshold && currentIndex < totalSlides - 1) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex);
      }
    } else {
      // ⭐ 드래그 안 함 = 클릭 → 원위치
      goToSlide(currentIndex);
    }

    // ⭐ 리셋
    hasMoved = false;
  });
});
