const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

const modalNoBtn = document.querySelector(".modal__action--negative");

const selectPlanBtns = document.querySelectorAll(".plan button");

selectPlanBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
});

backdrop.addEventListener("click", closeModal);

modalNoBtn.addEventListener("click", closeModal);

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
