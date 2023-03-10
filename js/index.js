const sideMenu = document.querySelector('#menu_side');
const btnOpen = document.querySelector('#btn_open');
const body = document.querySelector('#body');

btnOpen.addEventListener('click', () => {
    body.classList.toggle('body_move');
    sideMenu.classList.toggle('menu__side_move');
});
/* function toggleMenuClasses() {
    if (window.innerWidth < 815) {
      body.classList.add("body_move");
      sideMenu.classList.add("menu__side_move");
    } else {
      body.classList.remove("body_move");
      sideMenu.classList.remove("menu__side_move");
    }
  }
  toggleMenuClasses();
  
  window.addEventListener("resize", toggleMenuClasses);
 */

window.addEventListener('resize', function() {
  
});
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 815) {
        body.classList.add("body_move");
        sideMenu.classList.add("menu__side_move");
    } else {
        body.classList.remove("body_move");
        sideMenu.classList.remove("menu__side_move");
    }

    if (window.matchMedia("(orientation: landscape) and (max-width: 1080px)").matches) {
        body.classList.add("body_move");
        sideMenu.classList.add("menu__side_move");
    } 
  });
  
  
  