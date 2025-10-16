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


/* COPY EMAIL USERNAME */
let emailContainer = document.querySelector('.js-email-contact-container');
let emailUsername = document.querySelector('.js-email-username');
let username = emailUsername.textContent;
let copyIconArea = document.querySelector('.email-copy-icon-area');

let timeoutId = null;


emailContainer.addEventListener('click', copyEmailUsername);

function copyEmailUsername()
{
    clearTimeout(timeoutId);

    navigator.clipboard.writeText(username);

    copyIconArea.innerHTML = `<svg class="email-copied-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 283 440.5 289.9 440C296.8 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z"/></svg>`;

    console.log(copyIconArea.innerHTML);

    emailContainer.classList.add('email-contact-container-copied');


    timeoutId = setTimeout(() => 
    {
        emailContainer.classList.remove('email-contact-container-copied');
        copyIconArea.innerHTML = `                            <svg class="email-copy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448L480 448C515.3 448 544 419.3 544 384L544 183.4C544 166 536.9 149.3 524.3 137.2L466.6 81.8C454.7 70.4 438.8 64 422.3 64L288 64zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L352 496L352 512L160 512L160 256L176 256L176 192L160 192z"/></svg>`;
    }, 2000)
}

