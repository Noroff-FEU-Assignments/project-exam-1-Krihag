const openBtn = document.querySelector(".hamburger-open");
const closeBtn = document.querySelector(".hamburger-close");
const navBar = document.querySelector(".nav-bar");

openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide-hamburger");
  closeBtn.classList.toggle("hide-hamburger");
  navBar.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide-hamburger");
  closeBtn.classList.toggle("hide-hamburger");
  navBar.style.display = "none";
});
