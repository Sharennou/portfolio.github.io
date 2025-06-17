document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.createElement('div');
    tooltip.className = 'logo-tooltip';
    tooltip.style.position = 'fixed';
    tooltip.style.color = 'rgb(240, 240, 245)';
    tooltip.style.padding = '5px 10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.fontSize = '12px';
    tooltip.style.whiteSpace = 'nowrap';
    tooltip.style.zIndex = '1000';
    tooltip.style.opacity = '0';
    tooltip.style.transition = 'opacity 0.3s';
    tooltip.style.pointerEvents = 'none';
    document.body.appendChild(tooltip);
  
    const logos = document.querySelectorAll('.logos-slide img');
  
    logos.forEach(img => {
      img.style.transition = 'transform 0.3s ease';
      
      img.addEventListener('mouseover', function(e) {
        this.style.transform = 'translateY(-5px)';
        
        const tooltipText = this.getAttribute('data-tooltip');
        tooltip.textContent = tooltipText;
        tooltip.style.opacity = '1';
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = (rect.left + rect.width/2) + 'px';
        tooltip.style.top = (rect.bottom + 10) + 'px';
        tooltip.style.transform = 'translateX(-50%)';
        
        console.log('Tooltip text:', tooltipText);
      });
      
      img.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        
        tooltip.style.opacity = '0';
      });
      
      console.log('Image:', img.src, 'Tooltip:', img.getAttribute('data-tooltip'));
    });
  });