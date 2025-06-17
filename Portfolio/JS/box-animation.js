// Animation de déploiement de la box compétences
document.addEventListener("DOMContentLoaded", function() {
    // Créer un wrapper autour du contenu actuel pour l'animation
    const box = document.querySelector('.box');
    const competences = document.querySelector('.competences');
    
    // Sauvegarder le contenu original
    const originalContent = competences.innerHTML;
    
    // Vider le contenu temporairement
    competences.innerHTML = '';
    
    // Définir l'état initial (box aplatie)
    gsap.set(box, { 
      opacity: 1,
      height: 0,
      scaleY: 0,
      transformOrigin: "center top"
    });
    
    // Animation de déploiement
    const boxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#competences",
        start: "top center",
        // markers: true, // Décommenter pour débogage
        toggleActions: "play none none none"
      }
    });
    
    // Étape 1: Déployer la boîte verticalement
    boxTimeline.to(box, {
        height: "300px",
        scaleY: 1,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          ScrollTrigger.refresh(); // Recalcule la hauteur des éléments après l'animation
        }
      })
    
    // Étape 2: Faire apparaître le texte une fois la boîte déployée
    .call(() => {
      competences.innerHTML = originalContent;
      gsap.from(competences, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power1.out"
      });
    });
  });