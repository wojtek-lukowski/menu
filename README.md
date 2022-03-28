# Vanilla JavaScript menu

A simple menu, usually taken from some existing library, but I have built it from scratch using only vanilla JavaScript, HTML and CSS.

Features:

* opens when clicking on the element
* switches between the submenus
second click on the currently opened item closes the menu
* "Esc" and a click outside the menu closes the entire menu
* responsive - from 500px changes to hamburger with the same functionality for submenus
* menu items and menus can be added or removed in HTML only (with proper classes) without the need to adjust JavaScript

The menu-items should be added as the list items to the list according to the following template:

```HTML
<ul class="menu-items" id="menu-items">
  <li class="menu-item" id="menu-1">Menu-item 1</li>
  <li class="menu-item" id="menu-2">Menu-item 2</li>
  <li class="menu-item" id="menu-3">Menu-item 3</li>
  <li class="menu-item" id="menu-4">Menu-item 4</li>
</ul>
  ```
 The menus should be added as

 ```HTML
<div class="menu-open" id="menu-1-open">
  <p class="underline">Sumbenu 1</p>
    <ul>
        <li class="level-2">Item 1</li>
        <li class="level-2">Item 2</li>
        <li class="level-2">Item 3</li>
    </ul>
</div>
```
with level-s subitems (which need to be linked to the respective targets).
