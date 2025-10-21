import { projectsData } from "../data/projects_data.js";

// HTML SLIDER CONTENT
// HTML elements
let projectsPreviewContainer = document.querySelector('.js-projects-preview-container');


function renderProjectsPreview()
{
    let projectsPreviewHTML = '';
    let cardsCounter = 0;

    for (let category = 0; category < projectsData.length; category++)
    {
        for (let project = 0; project < projectsData[category].categoryProjects.length; project++)
        {
            if (projectsData[category].categoryProjects[project].isHighlight)
            {
                cardsCounter++;

                projectsPreviewHTML += `    <div class="project-preview-card">
                                                <img class="project-preview-card-image" src="${projectsData[category].categoryProjects[project].projectImageSource}" alt="Project">
                                                <div class="project-preview-card-content">
                                                    <h3 class="project-preview-card-name">${projectsData[category].categoryProjects[project].projectName}</h3>
                                                    <p class="project-preview-card-description">${projectsData[category].categoryProjects[project].projectDescription}</p>
                                                </div>
                                                <a href="${projectsData[category].categoryProjects[project].projectLink}"><button class="projects-preview-github-button">GitHub</button></a>
                                            </div>`;
            }
        }
    }

    if (cardsCounter > 0)
    {
        projectsPreviewHTML += '<button class="control-button js-control-button previous-button"><svg class="chevronIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z"/></svg></button>';

        projectsPreviewHTML += '<button class="control-button js-control-button next-button"><svg class="chevronIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></button>';   
    }

    projectsPreviewContainer.innerHTML = projectsPreviewHTML;
}

renderProjectsPreview();



// SET CARDS HEIGHT

function calculateCardHeight()
{
    let cards = document.querySelectorAll('.project-preview-card');
    let cardsContainer = document.querySelector('.projects-preview-container');

    let maxHeight = 0;

    cards.forEach((card) => {
        card.style.display = 'flex';
        const currentHeight = card.offsetHeight;
        if (currentHeight > maxHeight) 
        {
            maxHeight = currentHeight;
        }
        card.style.display = "";
    })

    cardsContainer.style.height = `${maxHeight}px`;
}

window.addEventListener('resize', calculateCardHeight);

calculateCardHeight();





// SLIDER RUNNING
// HTML elements
const sliderCardsArray = document.querySelectorAll('.project-preview-card');
let nextButton = document.querySelector('.next-button');
let previousButton = document.querySelector('.previous-button');
let timeoutId = null;
let intervalId = null;

let index = 0;

nextButton.addEventListener('click', () => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    nextImage();
    timeoutId = setTimeout(() => {intervalId = setInterval(() => {nextImage()}, 6000)}, 8000);
})

previousButton.addEventListener('click', () => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    previousImage();
    timeoutId = setTimeout(() => {intervalId = setInterval(nextImage, 6000)}, 8000);
})

function InitializeImages()
{
    sliderCardsArray[index].classList.add('project-preview-card-show');
    intervalId = setInterval(nextImage, 8000)
    showImage();
}

function nextImage()
{
    index++;

    if (index >= sliderCardsArray.length)
    {
        index = 0;
    }

    showImage();
}

function previousImage()
{
    index--;

    if (index < 0)
    {
        index = sliderCardsArray.length - 1;
    }

    showImage();
}

function showImage()
{
    sliderCardsArray.forEach((card) => {card.classList.remove('project-preview-card-show')});
    sliderCardsArray[index].classList.add('project-preview-card-show');
}

InitializeImages();