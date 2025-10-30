import { projectsData } from "../data/projects_data.js";


// HTML elements 
let projectsArea = document.querySelector('.js-projects-area');


function renderProjectsPage()
{
    let projectPageHTML = '';


    // Generate highlights
    projectPageHTML += `      <section class="category-section highlights-section">
                                            <div class="category-section-container highlights-section-container">
                                
                                                <h2 class="category-header">
                                                    <svg class="category-header-icon highlights-category-header-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320.3 192L235.7 51.1C229.2 40.3 215.6 36.4 204.4 42L117.8 85.3C105.9 91.2 101.1 105.6 107 117.5L176.6 256.6C146.5 290.5 128.3 335.1 128.3 384C128.3 490 214.3 576 320.3 576C426.3 576 512.3 490 512.3 384C512.3 335.1 494 290.5 464 256.6L533.6 117.5C539.5 105.6 534.7 91.2 522.9 85.3L436.2 41.9C425 36.3 411.3 40.3 404.9 51L320.3 192zM351.1 334.5C352.5 337.3 355.1 339.2 358.1 339.6L408.2 346.9C415.9 348 418.9 357.4 413.4 362.9L377.1 398.3C374.9 400.5 373.9 403.5 374.4 406.6L383 456.5C384.3 464.1 376.3 470 369.4 466.4L324.6 442.8C321.9 441.4 318.6 441.4 315.9 442.8L271.1 466.4C264.2 470 256.2 464.2 257.5 456.5L266.1 406.6C266.6 403.6 265.6 400.5 263.4 398.3L227.1 362.9C221.5 357.5 224.6 348.1 232.3 346.9L282.4 339.6C285.4 339.2 288.1 337.2 289.4 334.5L311.8 289.1C315.2 282.1 325.1 282.1 328.6 289.1L351 334.5z"/></svg>
                                                    <p class="category-header-name highlights-category-header-name">HIGHLIGHTS</p>
                                                </h2>
                                
                                                <div class="projects-container highlights-projects-container">`;

    for (let category = 0; category < projectsData.length; category++)
    {
        for (let project = 0; project < projectsData[category].categoryProjects.length; project++)
        {
            if (projectsData[category].categoryProjects[project].isHighlight)
            {
                projectPageHTML += ` <div class="project-card highlight-card">
                                        <img class="project-card-image highlight-card-image" src="${projectsData[category].categoryProjects[project].projectImageSource}" alt="Project">
                                        <div class="project-card-content highlight-card-content">
                                            <div class="project-card-text-area">
                                                <h3 class="project-card-content-name highlight-card-content-name">${projectsData[category].categoryProjects[project].projectName}</h3>
                                                <p class="project-card-content-description highlight-card-content-description">${projectsData[category].categoryProjects[project].projectDescription}</p>
                                            </div>
                                            <a href="${projectsData[category].categoryProjects[project].projectLink}" target="_blank"><button class="project-card-github-button highlight-card-github-button">GitHub</button></a>
                                        </div>
                                    </div>`;
            }
        }
    }
    console.log('highlights done');


    projectPageHTML += `                 </div>
                                    </div>
                                </section>`;



    // Generate categories
    for (let category = 0; category < projectsData.length; category++)
    {
        projectPageHTML += `    <section class="category-section">
                                    <div class="category-section-container">
                                        <h2 class="category-header">
                                            ${projectsData[category].categoryIcon}
                                            <p class="category-header-name">${projectsData[category].categoryName.toUpperCase()}</p>
                                        </h2>
                                        <div class="projects-container">`;

        for (let project = 0; project < projectsData[category].categoryProjects.length; project++)
        {
            projectPageHTML += `<div class="project-card">
                                    <img class="project-card-image" src="${projectsData[category].categoryProjects[project].projectImageSource}" alt="Project">
                                    <div class="project-card-content">
                                        <div class="project-card-text-area">
                                            <h3 class="project-card-content-name">${projectsData[category].categoryProjects[project].projectName}</h3>
                                            <p class="project-card-content-description">${projectsData[category].categoryProjects[project].projectDescription}</p>
                                        </div>
                                        <a href="${projectsData[category].categoryProjects[project].projectLink}" target="_blank"><button class="project-card-github-button">GitHub</button></a>
                                    </div>
                                </div>`;
        }

        projectPageHTML += `                    </div>
                                            </div>
                                        </section>`;
    }
    console.log('categories done');

    projectsArea.innerHTML = projectPageHTML;
}


// Running
renderProjectsPage();