const body = document.querySelector("body");
const footer = document.createElement("footer");

body.appendChild(footer);

/* Copyright */

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");

copyright.innerHTML = `&copy; Samuel B ${thisYear}`;
footer.appendChild(copyright);

/* Skills */

const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "Github"];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
        skill.innerText = skills[i];
        skillsList.appendChild(skill);
}