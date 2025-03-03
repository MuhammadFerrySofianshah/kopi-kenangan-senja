// Toggle Class Active.
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Humbuerger-menu di klik.
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Fungsi ketika mengklik diluar sidebar akan menghilangkan navbar
const humburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
