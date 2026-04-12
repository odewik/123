document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav__toggle');
    const navList = document.querySelector('.nav__list');
    const subscribeButton = document.querySelector('.sidebar__button');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('nav__toggle--active');
            navList.classList.toggle('nav__list--active');
        });
    }

    if (subscribeButton) {
        subscribeButton.addEventListener('click', () => {
            const emailInput = document.querySelector('#email').value;
            if (emailInput && modal) {
                modal.classList.add('modal--active');
            }
        });
    }

    if (modalClose && modal) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('modal--active');
        });
    }
});