const togglers = document.querySelectorAll(".menu-item-toggler");

togglers.forEach((toggler) => {
  toggler.addEventListener("click", (e) => {
    const menuItemWrapper = e.currentTarget.parentElement.parentElement.children[1];
    menuItemWrapper.classList.toggle("active");
  })
});

