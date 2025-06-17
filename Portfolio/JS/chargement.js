       // Script simple pour le loader
       document.addEventListener("DOMContentLoaded", function() {
        const loaderWrapper = document.getElementById("loader-wrapper");
        const progressBar = document.getElementById("progress-bar");
        
        // Animation de la barre de progression
        let width = 0;
        const interval = setInterval(function() {
            if (width >= 100) {
                clearInterval(interval);
                // Fade out du loader
                loaderWrapper.style.opacity = "0";
                setTimeout(function() {
                    loaderWrapper.style.display = "none";
                }, 500);
            } else {
                width += 1;
                progressBar.style.width = width + "%";
            }
        }, 30);
        
        // Garantie que l'écran de chargement disparaitra après 4 secondes
        setTimeout(function() {
            clearInterval(interval);
            // Forcer à 100% pour l'effet visuel final
            progressBar.style.width = "100%";
            setTimeout(function() {
                loaderWrapper.style.opacity = "0";
                setTimeout(function() {
                    loaderWrapper.style.display = "none";
                }, 500);
            }, 300);
        }, 4000);
    });