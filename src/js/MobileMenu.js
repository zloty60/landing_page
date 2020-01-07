class MobileMenu {
  constructor() {
    this.menuBtn = document.querySelector("#menu-btn-js");
    this.menuContent = document.querySelector("#navbar-list-js");
  }

  events() {
    this.menuBtn.addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    this.menuContent.classList.toggle("navbar__list--active");
  }
}

export default MobileMenu;
