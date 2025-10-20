import { projectsData } from "../data/projects_data.js";

// HTML elements
let projectsPreviewContainer = document.querySelector('.js-projects-preview-container');


function renderProjectsPreview()
{
    let projectsPreviewHTML = '';

    for (let category = 0; category < projectsData.length; category++)
    {
        for (let project = 0; project < projectsData[category].categoryProjects.length; project++)
        {
            if (projectsData[category].categoryProjects[project].isHighlight)
            {
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

    projectsPreviewContainer.innerHTML = projectsPreviewHTML;
}

renderProjectsPreview();