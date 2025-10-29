import { projectsData } from "../data/projects_data.js";

// HTML SLIDER CONTENT
let projectsPreviewContainer = document.querySelector('.js-projects-preview-slider');


function renderProjectsPreview()
{
    let projectsPreviewHTML = '<div class="projects-preview-slider-content js-projects-preview-slider-content">';
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

    projectsPreviewHTML += '</div>'

    if (cardsCounter > 0)
    {
        projectsPreviewHTML += '<button class="control-button js-previous-button previous-button"><svg class="chevronIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z"/></svg></button>';

        projectsPreviewHTML += '<button class="control-button js-next-button next-button"><svg class="chevronIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></button>';   
    }

    projectsPreviewContainer.innerHTML = projectsPreviewHTML;
}

renderProjectsPreview();


// SLIDER 
const sliderCardsArray = document.querySelectorAll('.project-preview-card');
const sliderContent = document.querySelector('.js-projects-preview-slider-content');
const nextButton = document.querySelector('.js-next-button');
const previousButton = document.querySelector('.js-previous-button');
let timeoutId = null;
let intervalId = null;

let index = 0;

nextButton.addEventListener('click', () => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    nextSlide();
    timeoutId = setTimeout(() => {intervalId = setInterval(() => {nextSlide()}, 6000)}, 8000);
})

previousButton.addEventListener('click', () => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    previousSlide();
    timeoutId = setTimeout(() => {intervalId = setInterval(nextSlide, 6000)}, 8000);
})

function nextSlide()
{
    index++;

    if (index >= sliderCardsArray.length)
    {
        index = 0;
    }

    showSlide();
}

function previousSlide()
{
    index--;

    if (index < 0)
    {
        index = sliderCardsArray.length - 1;
    }

    showSlide();
}

function showSlide()
{
    sliderContent.style.transform = `translateX(-${index * 100}%)`;
}

showSlide();
