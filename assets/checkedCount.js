function updateCheckedCount(maxCount) {
    const checkboxes = document.querySelectorAll('#games_form .checkbox');
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

    const resultElement = document.getElementById('result');
    resultElement.innerText = `${checkedCount}/${maxCount}`;

    checkboxes.forEach(checkbox => {
        checkbox.disabled = checkedCount >= maxCount && !checkbox.checked;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const maxCount = parseInt(document.getElementById('result').innerText.split('/')[1], 10) || 10; // Par défaut 10
    const checkboxes = document.querySelectorAll('#games_form .checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => updateCheckedCount(maxCount));
    });

    updateCheckedCount(maxCount);
});