const allItems = document.getElementsByClassName('menu-item'); //all menu-items
const allOpens = document.getElementsByClassName('menu-open'); //all menus

const menu = [];

for (let i = 0; i < allItems.length; i++) {

  submenu = {
    menuItemElement: allItems[i],
    menuElement: allOpens[i],
    selected: false
  };

  menu.push(submenu);
}

activateMenu = (e) => {

  const overlay = document.getElementById('overlay');
  const clickedItem = e.target; //selected menu-item

  overlay.style.display = 'block';
  clickedItem.style.color = 'var(--primary-color)';

  menu.map(( submenu => {
    submenu.menuElement.style.display = 'none',
    submenu.menuElement.style.color = 'var(--text-color)'
  }
  ));

  removeSelection = () => {
    menu.map(( submenu => 
      submenu.selected = false ))
  }

  openMenu = (submenu) => {
  if (menu[submenu].selected) {
    menu[submenu].selected = false;
     closeMenu();
   } else {
    menu.map( submenu => {
      submenu.menuItemElement.style.color = 'var(--text-color)'
    });
     menu[submenu].menuItemElement.style.color = 'var(--primary-color)';
     removeSelection();
     menu[submenu].selected = true;
     menu[submenu].menuElement.style.display = "flex";
    }
  }

  // establishing which menu item has been clicked and
  // calling the activateMenu function for the current instance
  const clickedMenu = menu.findIndex(submenu => submenu.menuItemElement === clickedItem);
  openMenu(clickedMenu);
}

//event listeners for menu items
const menuItems = document.getElementsByClassName('menu-item');
  for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', activateMenu);
  };

closeMenu = () => {

  menu.map( submenu => {
    submenu.selected = false,
    submenu.menuElement.style.display = 'none',
    submenu.menuItemElement.style.color = 'var(--text-color)'
  });
  document.getElementById('menu-first-item').style.color = 'var(--text-color)';
  document.getElementById('overlay').style.display = 'none';
  }

//close menu with Esc key
window.addEventListener('keydown', function(event){
  if(event.key === 'Escape'){
    localStorage.clear('selectedArray');
    closeMenu();
  }
  });

//close menu with a click on the page overlay
document.getElementById('overlay').addEventListener('click', closeMenu);

//header image
const headerImg = document.getElementById('header-image');
removeOverlay = () => {
  headerImg.classList.remove('img-overlay');
}

putOverlay = () => {
  headerImg.classList.add('img-overlay');
}

//3rd element hover
const contentVideo = document.getElementById('content-video');
const contentVideoH = document.getElementById('content-video-h');
const contentVideoImg = document.getElementById('content-video-img');
const contentVideoImgOverlay = document.getElementById('content-video-img-overlay');
const contentVideoControls = document.getElementById('content-video-controls');
const contentVideoArrow = document.getElementById('content-video-arrow');
const contentVideoArrowBlue = document.getElementById('content-video-arrow-blue');

contentVideoMouseEnter = () => {
  contentVideoH.style.color = 'var(--primary-color)';
  contentVideoImgOverlay.style.display = 'none';
  contentVideoControls.style.color = 'var(--primary-color)';
  contentVideoArrow.style.display = 'none';
  contentVideoArrowBlue.style.display = 'inline-block';
}

contentVideoMouseLeave = () => {
  contentVideoH.style.color = 'var(--text-color)';
  contentVideoImgOverlay.style.display = 'block';
  contentVideoControls.style.color = 'var(--text-color)';
  contentVideoArrow.style.display = 'inline-block';
  contentVideoArrowBlue.style.display = 'none';
}

if (window.innerWidth > 375) {
  contentVideoImg.style.display = 'block';
  contentVideo.addEventListener('mouseenter', contentVideoMouseEnter);
  contentVideo.addEventListener('mouseleave', contentVideoMouseLeave);
}

//console warning: if the number of menu-items is different than the number of menus in HTML file
checkMenu = () => {
  if (allItems.length != allOpens.length) {
    console.warn('There may be a problem, the number of menu-items is different than the number of menus.');
  }
}
checkMenu();

