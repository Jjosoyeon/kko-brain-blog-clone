window.addEventListener("load", () => {
  const modal = document.querySelector(".modal");
  const closemodal = document.querySelector(".modal .bt-wrap");

  closemodal.addEventListener("click", () => {
    const isactive = modal.classList.contains("active");

    if (isactive) {
      modal.classList.remove("active");
    }
  });
});
