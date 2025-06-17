// Fichier à sauvegarder comme typing-animation.js ou à ajouter à votre fichier JS existant

document.addEventListener('DOMContentLoaded', function() {
    // Liste des passions à afficher
    const passions = [
        "la course à pied",
        "la musculation",
        "la création numérique"
    ];
    
    // Sélectionnez l'élément h2 dans .box-navbar
    const textElement = document.querySelector('.box-navbar h2');
    
    // Texte initial jusqu'à "passioné par"
    const baseText = "Bonjour 👋 Je m'appelle Youen et je suis étudiant à l'IUT de Lannion en BUT MMI, <br> passioné par ";
    
    // Variables pour contrôler l'animation
    let currentPassionIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseTime = 1500;
    
    function typeText() {
        // Passion actuelle
        const currentPassion = passions[currentPassionIndex];
        
        // Si on est en train de supprimer le texte
        if (isDeleting) {
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            currentCharIndex++;
            typingSpeed = 100;
        }
        
        // Définir le texte affiché - texte normal sans span spéciaux
        const displayedPassion = currentPassion.substring(0, currentCharIndex);
        textElement.innerHTML = baseText + displayedPassion + "|";
        
        // Si on a fini d'écrire la passion actuelle
        if (!isDeleting && currentCharIndex === currentPassion.length) {
            isDeleting = true;
            typingSpeed = pauseTime;
        } 
        // Si on a fini de supprimer la passion actuelle
        else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPassionIndex = (currentPassionIndex + 1) % passions.length;
        }
        
        // Continuer l'animation
        setTimeout(typeText, typingSpeed);
    }
    
    // Démarrer l'animation
    typeText();
});