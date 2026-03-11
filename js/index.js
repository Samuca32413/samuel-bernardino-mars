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


const messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName,usersEmail,usersMessage);
    
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    
    newMessage.innerHTML = ` <a href="mailto:${usersEmail}">
    ${usersName}</a> <span> ${usersMessage} </span> `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
        removeButton.addEventListener("click", function() {
            const entry = removeButton.parentNode;
            entry.remove();
        });
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
messageForm.reset();
});

/*Fetch API */

fetch('https://api.github.com/users/Samuca32413/repos')
.then(function(response) {
    return response.json();
})
.then(function(repositories) {
    console.log(repositories);

    const projectSection = document.querySelector("#projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement("li");
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
    }
})
.catch(function(error) {
    console.error("Error fetching repositories:", error);
});



