import { createModal } from "./modal";

const techIcons = document.querySelector('.tech-icons-container').children;

for(let i = 0; i < techIcons.length; i++){

  techIcons[i].addEventListener('click', createModal);

}