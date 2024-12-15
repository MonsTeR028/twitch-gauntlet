document.addEventListener("DOMContentLoaded", () => {
    const triangles = document.querySelectorAll(".gauntlet-triangle");
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const resetButton = document.getElementById("reset");

    let currentIndex = 0;

    // Fonction pour mettre à jour l'affichage des triangles
    function updateTriangles() {
        // Masquer tous les triangles
        triangles.forEach((triangle, index) => {
            if (index === currentIndex) {
                triangle.removeAttribute("hidden");
            } else {
                triangle.setAttribute("hidden", "true");
            }
        });

        // Activer/désactiver les boutons en fonction de l'index actuel
        previousButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === triangles.length - 1;
    }

    // Gestion du bouton "Suivant"
    nextButton.addEventListener("click", () => {
        if (currentIndex < triangles.length - 1) {
            currentIndex++;
            updateTriangles();
        }
    });

    // Gestion du bouton "Précédent"
    previousButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateTriangles();
        }
    });

    // Gestion du bouton "Redémarrer"
    resetButton.addEventListener("click", () => {
        currentIndex = 0;
        updateTriangles();
    });

    // Initialisation de l'affichage
    updateTriangles();
});

document.addEventListener("DOMContentLoaded", () => {
    const triangles = document.querySelectorAll(".gauntlet-triangle");
    const gameContainers = document.querySelectorAll(".gauntlet-game");
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const resetButton = document.getElementById("reset");

    let currentIndex = 0;

    // Fonction pour mettre à jour l'affichage des triangles et des conteneurs
    function updateView() {
        // Masquer tous les triangles sauf celui correspondant à l'index actuel
        triangles.forEach((triangle, index) => {
            if (index === currentIndex) {
                triangle.removeAttribute("hidden");
            } else {
                triangle.setAttribute("hidden", "true");
            }
        });

        // Assombrir les conteneurs passés
        gameContainers.forEach((container, index) => {
            if (index < currentIndex) {
                container.classList.add("dimmed");
            } else {
                container.classList.remove("dimmed");
            }
        });

        // Activer/désactiver les boutons en fonction de l'index actuel
        previousButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === gameContainers.length - 1;
    }

    // Gestion du bouton "Suivant"
    nextButton.addEventListener("click", () => {
        if (currentIndex < gameContainers.length - 1) {
            currentIndex++;
            updateView();
        }
    });

    // Gestion du bouton "Précédent"
    previousButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateView();
        }
    });

    // Gestion du bouton "Redémarrer"
    resetButton.addEventListener("click", () => {
        currentIndex = 0;
        updateView();
    });

    // Initialisation de l'affichage
    updateView();
});
