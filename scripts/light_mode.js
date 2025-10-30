let mode = JSON.parse(localStorage.getItem('lightMode'));
if (mode === null)
{
    mode = 1;
}

const lightModeButtons = document.querySelectorAll('.light-mode-button');
lightModeButtons.forEach((button) => {button.addEventListener('click', changeLightMode)})

function applyMode()
{
    if (mode === 1)
    {
       document.body.classList.remove('dark-mode');
    }
    else
    {
        document.body.classList.add('dark-mode');
    }
}

function changeLightMode()
{
    console.log('Changing color');

    if (mode === 1)
    {
        mode = 0;
    }
    else
    {
        mode = 1;
    }

    applyMode();

    saveModeToStorage();
}

function saveModeToStorage()
{
    localStorage.setItem('lightMode', JSON.stringify(mode));
}

applyMode();