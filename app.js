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

const url = "http://localhost:1337/api/menu-types?populate=menu";

const fetchMenus = async () => {
  const response = await fetch(url);
  const data = await response.json();
  renderMenuTypes(data.data);

  const togglers = document.querySelectorAll(".menu-item-toggler");

  if (togglers) {
    togglers.forEach((toggler) => {
      toggler.addEventListener("click", (e) => {
        const menuItemWrapper =
          e.currentTarget.parentElement.parentElement.children[1];
        menuItemWrapper.classList.toggle("active");
      });
    });
  }
};
fetchMenus();

const renderMenuTypes = (menuTypes) => {
  menuTypes.forEach((menuType) => {
    renderMenuCard(menuType);
  });
};

const renderMenuCard = (menuType) => {
  if (menuType) {
    const menuTypesWrapper = document.querySelector(".menu-types-wrapper");
    const { attributes } = menuType;
    const menuCard = `<div class="menu-type">
                        <h4 class="menu-type-title">${attributes.name}</h4>
                        <div class="line-separator"></div>
                        ${renderMenuContent(attributes.menu)}
                      </div>`;
    menuTypesWrapper.insertAdjacentHTML("beforeend", menuCard);
  }
};

const renderMenuContent = (menuContent) => {
  let menuNames = "";
  if (menuContent) {
    menuContent.forEach((item) => {
      const menuName = `
      <div class="menu-item">
        <div class="menu-item-title-container">
          <h5 class="menu-item-title">${item.menuName}</h5>
          <p class="menu-item-toggler">+</p>
        </div>
        <div class="menu-positions-wrapper">
          <p class="menu-positions">${item.positions.replace(
            /-/g,
            "</br> -"
          )}</p>
        </div>
      </div>`;
      menuNames += menuName;
    });
  }
  return menuNames;
};
