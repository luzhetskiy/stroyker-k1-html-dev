document.addEventListener('DOMContentLoaded', function() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  function initShowMoreButtons() {
    const affiliateNetworks = document.querySelectorAll('[data-city]');
    
    affiliateNetworks.forEach(function(network) {
      const partnersContainer = network.querySelector('[data-partners-container]');
      const showMoreBtn = network.querySelector('[data-show-more-btn]');
      const showMoreWrapper = network.querySelector('.partners-show-more');
      
      if (!partnersContainer) return;
      
      const allCards = partnersContainer.querySelectorAll('[data-partner-card]');
      const hiddenCards = partnersContainer.querySelectorAll('[data-partner-card][data-hidden]');
      
      if (allCards.length <= 8) {
        if (showMoreWrapper) {
          showMoreWrapper.style.display = 'none';
        }
        return;
      }
      
      if (showMoreWrapper && hiddenCards.length > 0) {
        showMoreWrapper.style.display = 'flex';
      }
      
      if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
          const isExpanded = showMoreBtn.classList.contains('expanded');
          
          if (!isExpanded) {
            hiddenCards.forEach(function(card) {
              card.removeAttribute('data-hidden');
              card.style.animation = 'fadeInUp 0.5s ease forwards';
            });
            
            showMoreBtn.textContent = 'Скрыть';
            showMoreBtn.classList.add('expanded');
          } else {
            hiddenCards.forEach(function(card) {
              card.setAttribute('data-hidden', '');
            });
            
            showMoreBtn.textContent = 'Смотреть все';
            showMoreBtn.classList.remove('expanded');
            
            network.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      }
    });
  }

  function initCityFilter() {
    const citySelect = document.querySelector('.city-select-dropdown');
    const cityOptions = document.querySelectorAll('.city-select-box__option');
    const affiliateNetworks = document.querySelectorAll('[data-city]');
    
    function filterCities(selectedCity) {
      affiliateNetworks.forEach(function(network) {
        const cityValue = network.getAttribute('data-city');
        
        if (selectedCity === '' || selectedCity === cityValue) {
          network.classList.remove('city-filtered');
        } else {
          network.classList.add('city-filtered');
        }
      });
    }
    
    if (citySelect) {
      citySelect.addEventListener('change', function() {
        const selectedValue = this.value;
        filterCities(selectedValue);
      });
    }
    
    if (cityOptions.length > 0) {
      cityOptions.forEach(function(option) {
        option.addEventListener('click', function() {
          const selectedValue = this.getAttribute('data-value');
          filterCities(selectedValue);
        });
      });
    }
  }

  initShowMoreButtons();
  initCityFilter();
});
