import { skillsData } from "../data/skills_data.js";

// HTML elements
let skillsContainer = document.querySelector('.js-skills-container');

function renderSkills()
{
    let skillsHTML = '';

    for (let i = 0; i < skillsData.length; i++)
    {
        skillsHTML +=   `   <div class="skill-card">
                                <p class="skill-name">${skillsData[i].skillName}</p>
                                ${skillsData[i].skillIcon}
                            </div>`;
    }

    skillsContainer.innerHTML = skillsHTML;
}

renderSkills();