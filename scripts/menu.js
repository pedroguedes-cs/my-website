/* RESPONSIVE MENU */
let sidebar = document.querySelector('.mobile-sidebar')
let menuIcon = document.querySelector('.js-hamburguer-icon');
let closeIcon = document.querySelector('.js-close-icon');

menuIcon.addEventListener('click', displayMenu);
closeIcon.addEventListener('click', closeMenu);

function displayMenu()
{
    menuIcon.classList.add('hamburguer-icon-hidden');
    sidebar.classList.add('mobile-sidebar-open');
}

function closeMenu()
{
    menuIcon.classList.remove('hamburguer-icon-hidden');
    sidebar.classList.remove('mobile-sidebar-open');
}
