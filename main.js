function showMenu (toggleId,navId,homepageId) {
    var toggle = document.getElementById(toggleId);
    var nav = document.getElementById(navId);
    var home= document.getElementById(homepageId);

    toggle.addEventListener('click', function (){
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-image');
        home.classList.toggle('blur');
    });
};
showMenu('nav-toggle', 'nav-menu', 'homepage');

function showDropdownMenu(imageId,menuId){
    var toggle= document.getElementById(imageId);
    var menu = document.getElementById(menuId);

    toggle.addEventListener('click', function(){
        menu.classList.toggle('show-dropdownmenu');
        toggle.classList.toggle('toggle-image');
    });
};
showDropdownMenu('nav-toggledown', 'dropdown-menu');

function showDropdownMenu(imageId,menuId){
    var toggle= document.getElementById(imageId);
    var menu = document.getElementById(menuId);

    toggle.addEventListener('click', function(){
        menu.classList.toggle('show-dropdownmenu2');
        toggle.classList.toggle('toggle-image');
    });
};
showDropdownMenu('nav-toggledown2', 'dropdown-menu2');