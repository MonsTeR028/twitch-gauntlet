document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('#games_form .checkbox');
    const maxCount = parseInt(document.getElementById('result').innerText.split('/')[1], 10);
    const gameList = document.getElementById('game-list');

    // Tableau pour suivre l'ordre des cases cochées
    let selectionOrder = [];

    const updateCheckedCount = () => {
        const resultElement = document.getElementById('result');

        // Met à jour le compteur
        resultElement.innerText = `${selectionOrder.length}/${maxCount}`;

        // Réinitialise les indicateurs d'ordre
        checkboxes.forEach(checkbox => {
            const orderElement = checkbox.parentNode.querySelector('.selection-order');
            orderElement.innerText = '';
        });

        // Met à jour les numéros d'ordre
        selectionOrder.forEach((checkbox, index) => {
            const orderElement = checkbox.parentNode.querySelector('.selection-order');
            orderElement.innerText = `${index + 1}`; // Affiche l'ordre (1, 2, 3, ...)
        });

        // Désactive les cases excédentaires
        checkboxes.forEach(checkbox => {
            checkbox.disabled = selectionOrder.length >= maxCount && !checkbox.checked;
        });

        // Met à jour la liste des jeux sélectionnés avec les images
        updateGameList();
    };

    const updateGameList = () => {
        // Réinitialise la liste
        gameList.innerHTML = '';

        // Ajoute chaque jeu sélectionné dans l'ordre
        selectionOrder.forEach(checkbox => {
            const listItem = document.createElement('li');

            // Crée l'image pour le jeu
            const gameImage = document.createElement('img');
            gameImage.src = checkbox.dataset.image; // Récupère l'URL de l'image depuis data-image
            gameImage.alt = checkbox.dataset.name; // Utilise le nom comme texte alternatif
            gameImage.style.width = '100px'; // Taille des images (optionnel)
            gameImage.style.margin = '5px';

            // Ajoute l'image à l'élément de liste
            listItem.appendChild(gameImage);

            // Ajoute l'élément à la liste
            gameList.appendChild(listItem);
        });
    };

    const handleCheckboxChange = (event) => {
        const checkbox = event.target;

        if (checkbox.checked) {
            // Ajoute la case au tableau si elle est cochée
            selectionOrder.push(checkbox);
        } else {
            // Retire la case du tableau si elle est décochée
            selectionOrder = selectionOrder.filter(item => item !== checkbox);
        }

        updateCheckedCount();
    };

    // Ajoute un événement "change" à chaque checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });

    // Initialisation
    updateCheckedCount();
});

document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.checkbox');
    const selectedGames = [];

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', function () {
            const gameId = this.value;

            // Si le jeu est déjà dans la liste, on le supprime pour réajouter à la fin
            const index = selectedGames.indexOf(gameId);
            if (index > -1) {
                selectedGames.splice(index, 1);
            }

            // Ajouter le jeu à la fin de la liste
            if (this.checked) {
                selectedGames.push(gameId);
            } else {
                // Si décoché, on le supprime simplement
                const idx = selectedGames.indexOf(gameId);
                if (idx > -1) {
                    selectedGames.splice(idx, 1);
                }
            }

            // Mettre à jour l'ordre dans un champ caché
            const orderInput = document.getElementById('selected-order');
            orderInput.value = JSON.stringify(selectedGames);
        });
    });
});