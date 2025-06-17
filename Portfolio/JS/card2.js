gsap.registerPlugin(ScrollTrigger);

const scrollSection = document.querySelectorAll(".scroll-section");

scrollSection.forEach((section) => {
  const wrapper = section.querySelector(".wrapper");
  const items = wrapper.querySelectorAll(".item");

  let direction = null;

  if (section.classList.contains("vertical-section")) {
    direction = "vertical";
  } else if (section.classList.contains("horizontal-section")) {
    direction = "horizontal";
  }

  initScroll(section, items, direction);
});

function initScroll(section, items, direction) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      pin: true,
      start: "top top+=80",
      end: () => `+=${items.length * 100}%`,
      scrub: 1,
      invalidateOnRefresh: true,
    },
    defaults: { ease: "none" },
  });
  
  items.forEach((item, index) => {
    if (index === 0) return;
    
    if (direction === "horizontal") {
      gsap.set(item, { xPercent: 100 }); 
    } else {
      gsap.set(item, { yPercent: 100 });
    }
  });
  
  items.forEach((item, index) => {
    if (index === 0) return;
    
    if (direction === "horizontal") {
      timeline.to(items[index], { xPercent: 0 }); 
    } else {
      timeline.to(items[index], { yPercent: 0 }); 
    }
  });
}

function createFullscreenContainer() {
  const fullscreenContainer = document.createElement('div');
  fullscreenContainer.className = 'fullscreen-img';
  fullscreenContainer.style.display = 'none';
  
  fullscreenContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; 
  fullscreenContainer.style.backdropFilter = 'blur(8px)'; 
  
  const fullscreenImage = document.createElement('img');
  fullscreenContainer.appendChild(fullscreenImage);
  
  fullscreenContainer.addEventListener('click', function() {
    fullscreenContainer.style.display = 'none';
    document.body.style.overflow = 'auto'; 
  });
  
  document.body.appendChild(fullscreenContainer);
  return { container: fullscreenContainer, image: fullscreenImage };
}

const { container: fullscreenContainer, image: fullscreenImage } = createFullscreenContainer();

document.querySelectorAll('.item_media').forEach(img => {
  img.style.cursor = 'pointer'; 
  
  img.addEventListener('click', function() {
    fullscreenImage.src = this.src;
    
    fullscreenContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
  });
});

