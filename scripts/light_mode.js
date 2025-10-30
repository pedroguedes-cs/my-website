const lightModeButtons = document.querySelectorAll('.light-mode-button');

lightModeButtons.forEach((button) => {button.addEventListener('click', changeLightMode)})

function changeLightMode()
{
    console.log('Changing color');
    document.body.classList.toggle('dark-mode');
}