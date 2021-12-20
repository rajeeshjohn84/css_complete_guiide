const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

const modalNoBtn = document.querySelector(".modal__action--negative");

const selectPlanBtns = document.querySelectorAll(".plan button");

const toggleBtn = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

selectPlanBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = "open"; // overrides complete classList
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
});

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

modalNoBtn.addEventListener("click", closeModal);

function closeModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  modal.classList.remove("open");
  backdrop.classList.remove("open");
}

toggleBtn.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
