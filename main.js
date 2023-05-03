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

const menuButtonContainer = document.querySelector('.menu-button-container');
menuButtonContainer.addEventListener('click', () => menuButtonContainer.classList.add('active'));
const menuClose = document.querySelector('.menu-close');
menuClose.addEventListener('click', () => menuButtonContainer.classList.remove('active'));

const menuLinks = document.querySelectorAll('.dropdown a');
for(let i = 0; i < menuLinks.length; i++){
  menuLinks[i].addEventListener('click', () => menuButtonContainer.classList.remove('active'))
}

