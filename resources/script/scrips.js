

// ------Skills Section --------------

let skillHeadingOver = document.getElementById('skillsHeading');
let skillsTarget = document.getElementById('skills');

function blackSkills() {
    skills.style.color = '#000';
}
function greySkills() {
    skills.style.color = '#2f3641';
}

skillHeadingOver.addEventListener('mouseover', blackSkills);
skillHeadingOver.addEventListener('mouseout', greySkills);

let skillsOver = document.getElementById('skills');

function color() {
    skillColor.style.zIndex = '3';
    blackSkills();
}
function bw() {
    skillColor.style.zIndex = '0';
    greySkills()
}

skillsOver.addEventListener('mouseover', color);
skillsOver.addEventListener('mouseout', bw);

