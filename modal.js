
export const createModal = event => {

  const techIcon = event.target
  console.log(event.target)
  
  const modalBackground = document.createElement('div');
  modalBackground.classList.add('modal-background');
  modalBackground.style.width = `${document.body.clientWidth}px`;
  modalBackground.style.height = `${document.body.clientHeight}px`;


  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');
  modalContainer.style.top = `calc(${window.scrollY}px + 10vh)`;

  modalContainer.innerHTML = `
    <img src=${techIcon.src}>
    <h3>${techIcon.dataset.name}</h3>
    <p lang="en">${techIcon.dataset.description}</p>
    <a href="${techIcon.dataset.url}" target="_blank">Learn More</a>
  `;

  document.body.appendChild(modalBackground);
  document.body.appendChild(modalContainer); 

  modalBackground.addEventListener('click', () => {
    modalBackground.remove();
    modalContainer.remove();
  });

}

export const resizeModalBackground = event => {

};

export const scrollModalContainer = event => {

};