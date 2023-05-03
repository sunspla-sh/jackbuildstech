import { createModal } from "./modal";

const techIcons = document.querySelector('.tech-icons-container').children;
const projectCardTechIconsContainers = document.querySelectorAll('.project-card-tech-icons-container');

for(let i = 0; i < techIcons.length; i++){

  techIcons[i].addEventListener('click', createModal);

}

for(let i = 0; i < projectCardTechIconsContainers.length; i++){

  const projectCardTechIcons = projectCardTechIconsContainers[i].children;

  for(let j = 0; j < projectCardTechIcons.length; j++) {
    projectCardTechIcons[j].addEventListener('click', createModal);
  } 

}

