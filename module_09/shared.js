const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

const modalNoBtn = document.querySelector(".modal__action--negative");

const selectPlanBtns = document.querySelectorAll(".plan button");

const toggleBtn = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

selectPlanBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
});

backdrop.addEventListener("click", function () {
  mobileNav.style.display = "none";
  closeModal();
});

modalNoBtn.addEventListener("click", closeModal);

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

toggleBtn.addEventListener("click", function () {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
