// 모든 .snack li 요소를 선택
const snackItems = document.querySelectorAll(".con03 .snack li");

snackItems.forEach((item) => {
  const img = item.querySelector("img");
  const innerBox = item.querySelector(".inner_box");
  const closeBtn = item.querySelector(".fa-circle-xmark");

  // 이미지 클릭 시 inner_box 표시
  if (img && innerBox) {
    img.addEventListener("click", () => {
      innerBox.classList.add("active");
    });
  }

  // X 버튼 클릭 시 inner_box 숨김
  if (closeBtn && innerBox) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // 이벤트 버블링 방지
      innerBox.classList.remove("active");
    });
  }
});
