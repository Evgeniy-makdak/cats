document.addEventListener('DOMContentLoaded', () => {
    const modalWindow = document.querySelector('.modal-window');
    const editButtons = document.querySelectorAll('.card__edit-button');

    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalWindow.showModal();
        });
    });
});