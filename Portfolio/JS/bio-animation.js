document.addEventListener('DOMContentLoaded', function() {
  // Vérifier que GSAP et ScrollTrigger sont chargés
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Préparer les textes de la bio pour l'animation
      const bioTexts = document.querySelectorAll('.about-text p');
      
      // Traiter chaque paragraphe individuellement
      bioTexts.forEach((textElement, index) => {
          // Obtenir et stocker le texte original
          const originalText = textElement.innerText;
          // Vider l'élément
          textElement.innerHTML = '';
          
          // Diviser le texte en lettres et créer un span pour chaque lettre
          [...originalText].forEach(char => {
              const charSpan = document.createElement('span');
              if (char === ' ') {
                  charSpan.classList.add('letter', 'space');
              } else {
                  charSpan.classList.add('letter');
              }
              charSpan.textContent = char;
              // Les lettres commencent invisibles
              charSpan.style.opacity = 0;
              textElement.appendChild(charSpan);
          });
          
          // Sélectionner toutes les lettres de cet élément de texte
          const letters = textElement.querySelectorAll('.letter');
          
          // Créer un timeline pour l'animation
          gsap.timeline({
              scrollTrigger: {
                  trigger: textElement,
                  start: "top 90%", // Commence l'animation quand le paragraphe atteint 80% du haut de l'écran
                  end: "top 70%", // Termine l'animation quand le paragraphe atteint 30% du haut de l'écran
                  scrub: 0.3, // Lier l'animation au scroll avec un léger lissage
                  markers: false, // Mettre à true pour déboguer
                  id: `paragraph-${index}`
              }
          })
          .to(letters, {
              opacity: 1,
              stagger: {
                  each: 0.01, // Délai plus prononcé entre chaque lettre
                  from: "start"
              },
              ease: "power1.out" // Un easing plus naturel
          });
      });
      
      // Animation du titre synchronisée avec le scroll
      gsap.fromTo('.about-container h1',
          { opacity: 0, y: 20 },
          {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                  trigger: '.about-container',
                  start: "top 90%",
                  end: "top 70%",
                  scrub: 0.3,
                  id: "title"
              }
          }
      );
      
      // Animation de l'image synchronisée avec le scroll
      gsap.fromTo('.about-image img',
          { opacity: 0, scale: 0.9 },
          {
              opacity: 1,
              scale: 1,
              scrollTrigger: {
                  trigger: '.about-image',
                  start: "top 90%",
                  end: "top 60%",
                  scrub: 0.3,
                  id: "image"
              }
          }
      );
  } else {
      console.error('GSAP ou ScrollTrigger non chargés');
  }
});