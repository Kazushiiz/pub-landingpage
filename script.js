const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-list")[0];
const navbar = document.getElementsByClassName("nav")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbar.classList.toggle("active");
});
