(() => {
//  This snippet take care of the tabs
  const tabs = document.querySelectorAll('ul.nav-tabs > li');

  const navigateTab = (event) => {
    event.preventDefault();

    document.querySelector('ul.nav-tabs li.active').classList.remove('active');
    document.querySelector('.tab-pane.active').classList.remove('active');

    const clickedTab = event.currentTarget;
    const anchor = event.target;
    const activePaneID = anchor.getAttribute('href');

    clickedTab.classList.add('active');
    document.querySelector(activePaneID).classList.add('active');
  };

  for (let index = 0; index < tabs.length; index++) {
    tabs[index].addEventListener('click', navigateTab);
  }

  // This snippet take care of the modal
  const modal = document.querySelector('.modal');
  const clickedMessage = document.querySelectorAll('.content-item-wrapper');
  const closeButton = document.querySelector('.close-button');

  const toggleModal = () => {
    modal.classList.toggle('show-modal');
  };

  const documentOnClick = (event) => {
    if (event.target === modal) {
      toggleModal();
    }
  };

  // const addClassActive = event => event.classList.add('active');

  for (let index = 0; index < clickedMessage.length; index++) {
    // console.log(clickedMessage[index]);
    clickedMessage[index].addEventListener('click', toggleModal);
    // clickedMessage[index].addEventListener('click', addClassActive);
  }

  if (closeButton) {
    closeButton.addEventListener('click', toggleModal);
  }

  document.addEventListener('click', documentOnClick);
})();
