const allItems = document.getElementsByClassName('menu-item'); //all menu-items
const allOpens = document.getElementsByClassName('menu-open'); //all menus
const burger = document.getElementById('burger');
const mainMenu = document.getElementById('menu-items');
const close = document.getElementById('close');

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
     if (window.innerWidth > 1000) {
       menu[submenu].menuElement.style.display = "flex";
       menu[submenu].menuElement.style.animationPlayState = "running";
      } else {
        console.log('small screen');
        const openSubmenu = menu[submenu].menuItemElement;
        const openMenu = menu[submenu].menuElement;
        openMenu.style.display = 'block';
        // const submenuText = document.createElement('p');
        // openSubmenu.appendChild(submenuText);
        // submenuText.innerHTML = 'test';
        openSubmenu.appendChild(openMenu);
        console.log(openSubmenu, openMenu);
      }
    }
  }

  // establishing which menu item has been clicked and
  // calling the activateMenu function for the current instance
  const clickedMenu = menu.findIndex(submenu => submenu.menuItemElement === clickedItem);
  openMenu(clickedMenu);
}

showItems = () => {
  mainMenu.style.display = 'block';
  burger.style.display = 'none';
  close.style.display = 'inline-block';
}

hideItems = () => {
  mainMenu.style.display = 'none';
  burger.style.display = 'inline-block';
  close.style.display = 'none';
}

adjustMenu = () => {
  closeMenu();
  if (window.innerWidth > 500) {
      burger.style.display = 'none';
      mainMenu.style.display = 'flex';
      close.style.display = 'none';

    } else {
      burger.style.display = 'flex';
      mainMenu.style.display = 'none';
    }
}

//event listeners for menu items
const menuItems = document.getElementsByClassName('menu-item');
  for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', activateMenu);
  };

burger.addEventListener('click', showItems);
close.addEventListener('click', hideItems);
window.addEventListener('resize', adjustMenu);

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

//console warning: if the number of menu-items is different than the number of menus in HTML file
checkMenu = () => {
  if (allItems.length != allOpens.length) {
    console.warn('The number of menu-items is different than the number of menus.');
  }
}
checkMenu();

