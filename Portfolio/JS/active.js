document.addEventListener("DOMContentLoaded", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".navbar a");
  let logo = document.querySelector(".logo");
  
  // Fonction de défilement personnalisée plus lente
  function smoothScroll(targetPosition, duration = 1000) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    requestAnimationFrame(animation);
  }
  
  navLinks.forEach(link => {
    if (link.getAttribute("href").startsWith("#")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        let targetId = link.getAttribute("href").substring(1);
        let targetSection = document.getElementById(targetId);
        if (targetSection) {
          const targetPosition = targetSection.offsetTop - 80;
          smoothScroll(targetPosition);
        }
      });
    }
  });
  
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      smoothScroll(0);
    });
  }
  
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (id && scrollY >= offset && scrollY < offset + height) {
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(".navbar a[href='#" + id + "']");
        if (activeLink) activeLink.classList.add("active");
      }
    });
  });
  
  let scrollArrow = document.querySelector(".scroll-arrow");
  if (scrollArrow) {
    scrollArrow.addEventListener("click", (e) => {
      e.preventDefault();
      let target = document.querySelector("#competences");
      if (target) {
        const targetPosition = target.offsetTop - 80;
        smoothScroll(targetPosition);
      }
    });
  }
});