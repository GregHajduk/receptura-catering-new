const togglers = document.querySelectorAll(".menu-item-toggler");

togglers.forEach((toggler) => {
  toggler.addEventListener("click", (e) => {
    const menuItemWrapper =
      e.currentTarget.parentElement.parentElement.children[1];
    menuItemWrapper.classList.toggle("active");
  });
});
const burger = document.querySelector(".fa-solid");
const menu = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  burger.classList.toggle("fa-bars");
  burger.classList.toggle("fa-xmark");
});

menu.addEventListener("click", (e) => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});
