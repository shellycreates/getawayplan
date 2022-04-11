//landing page

function goToHome() {
    location.href = "home.html";
}

// nav overlay menu

const navSlide = () => {
  const overlayMenu = document.querySelector(".overlay-menu");
  const overlayMenuBg = document.querySelector(".overlay-menu-bg");
  const menuBtn = document.querySelector(".menu");

  //toggle overlay
  menuBtn.addEventListener('click', () => {
    overlayMenu.classList.toggle('overlay-active');
    overlayMenuBg.classList.toggle('overlaybg-active');
  });

  //close overlay
  overlayMenuBg.addEventListener('click', () => {
    overlayMenu.classList.toggle('overlay-active');
    overlayMenuBg.classList.toggle('overlaybg-active');
    document.querySelector(".menu").style.transform = "translateX(0%)";
  })

}

navSlide();

// hide menu after active

function hideMenu() {
    document.querySelector(".menu").style.transform = "translateX(-100%)";
}

// prompt to escape

function goToEscape() {
    location.href = "escape.html";
}

