window.addEventListener("load", () => {
  const iconmore = document.querySelector(".icon-more");
  const mbmenu = document.querySelector(".mb-menu");
  const mbinner = document.querySelector(".mb-inner");

  //  isClick 변수 이용해서 사용자 연속 버튼 클릭 막기
  //  isClick 이 true 면 클릭 가능, false 면 클릭 불가능

  let isClick = true;

  iconmore.addEventListener("click", (e) => {
    e.preventDefault(); //a태그 기본동작 방지

    if (isClick === false) return;
    isClick = false;

    // 모바일 메뉴 보이기, 숨기기 기능
    const isopen = mbmenu.classList.contains("active");
    if (isopen) {
      // 메뉴가 줄어들고
      mbinner.classList.remove("active");
      iconmore.classList.remove("active");

      // 배경이 사라진다.
      setTimeout(() => {
        mbmenu.classList.remove("active");
        isClick = true;
      }, 500);
    } else {
      mbmenu.classList.add("active");
      mbinner.classList.add("active");
      iconmore.classList.add("active"); // 아이콘 x 로 교체

      isClick = true;
    }

    window.addEventListener("resize", () => {
      if (innerWidth > 1024) {
        mbmenu.classList.remove("active");
        mbinner.classList.remove("active");
        iconmore.classList.remove("active");
      }
    });
  });
});
