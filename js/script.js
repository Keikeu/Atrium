let navOpened = false;
const nav = document.getElementsByClassName("nav--mobile")[0];
const navItems = document.getElementsByClassName("nav__item");
const btnOpen = document.getElementsByClassName("nav-btn--open")[0];
const btnClose = document.getElementsByClassName("nav-btn--close")[0];

function toggleNav() {
  if (navOpened) {
    nav.style.right = "-100%";
    btnOpen.style.display = "block";
    btnClose.style.display = "none";
    for(let i = 0; i < navItems.length; i++) {
      navItems[i].style.opacity = 0;
    }
  } else {
    nav.style.right = "0";
    btnOpen.style.display = "none";
    btnClose.style.display = "block";
    for(let i = 0; i < navItems.length; i++) {
      navItems[i].style.opacity = 1;
    }
  }
  navOpened = !navOpened;
}
