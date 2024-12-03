document.addEventListener('DOMContentLoaded', () => {

    const checkboxes = document.querySelectorAll('#games_form .checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            const label = event.target.closest('.game');
            if (event.target.checked) {
                label.classList.add('darken');
            } else {
                label.classList.remove('darken');
            }
        });
    });
});