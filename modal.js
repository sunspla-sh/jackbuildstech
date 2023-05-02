export const createModal = event => {

  const techIcon = event.target
  
  const modalBackground = document.createElement('div');
  modalBackground.classList.add('modal-background');

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  modalContainer.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <img src=${techIcon.src}>
    <h3>${techIcon.title}</h3>
    <p>${techIcon.dataset.description}</p>
    <a href="${techIcon.dataset.url}" target="_blank">Learn More</a>
  `;

  document.body.appendChild(modalBackground);
  document.body.appendChild(modalContainer)

  modalBackground.addEventListener('click', () => {
    modalBackground.remove();
    modalContainer.remove();
  });

  const closeButton = document.querySelector('.modal-container svg');

  closeButton.addEventListener('click', () => {
    modalBackground.remove();
    modalContainer.remove();
  });

}



export const scrollModalContainer = event => {

};