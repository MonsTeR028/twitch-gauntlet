document.getElementById('games_form').addEventListener('submit', function(event) {

    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="game[]"]');
    const errorMessage = document.getElementById('error-message');

    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    const maxCount = parseInt(document.getElementById('result').innerText.split('/')[1], 10);

    if (checkedCount < maxCount) {
        event.preventDefault();
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});