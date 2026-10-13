document.addEventListener('DOMContentLoaded', function() {
  initCitySelect();
});

function initCitySelect() {
  const citySelects = document.querySelectorAll('.city-select-box');
  
  citySelects.forEach(select => {
    const trigger = select.querySelector('.city-select-box__trigger');
    const dropdown = select.querySelector('.city-select-box__dropdown');
    const searchInput = select.querySelector('.city-select-box__search-input');
    const options = select.querySelectorAll('.city-select-box__option');
    const valueDisplay = select.querySelector('.city-select-box__value');
    const hiddenSelect = select.parentElement.querySelector('.city-select-dropdown');
    
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      
      document.querySelectorAll('.city-select-box.open').forEach(otherSelect => {
        if (otherSelect !== select) {
          otherSelect.classList.remove('open');
        }
      });
      
      select.classList.toggle('open');
      
      if (select.classList.contains('open')) {
        setTimeout(() => {
          searchInput.focus();
        }, 100);
      } else {
        searchInput.value = '';
        filterOptions('');
      }
    });
    
    options.forEach(option => {
      option.addEventListener('click', function(e) {
        e.stopPropagation();
        
        options.forEach(opt => opt.classList.remove('selected'));
        
        option.classList.add('selected');
        
        const selectedText = option.textContent;
        const selectedValue = option.getAttribute('data-value');
        
        valueDisplay.textContent = selectedText;
        
        if (hiddenSelect) {
          hiddenSelect.value = selectedValue;
          
          const event = new Event('change', { bubbles: true });
          hiddenSelect.dispatchEvent(event);
        }
        
        select.classList.remove('open');
        
        searchInput.value = '';
        filterOptions('');
      });
    });
    
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      filterOptions(searchTerm);
    });
    
    searchInput.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    function filterOptions(searchTerm) {
      let visibleCount = 0;
      const optionsList = select.querySelector('.city-select-box__options');
      
      const noResultsMsg = optionsList.querySelector('.no-results');
      if (noResultsMsg) {
        noResultsMsg.remove();
      }
      
      options.forEach(option => {
        const optionText = option.textContent.toLowerCase();
        
        if (optionText.includes(searchTerm)) {
          option.classList.remove('hidden');
          visibleCount++;
        } else {
          option.classList.add('hidden');
        }
      });
      
      if (visibleCount === 0 && searchTerm !== '') {
        const noResults = document.createElement('li');
        noResults.className = 'city-select-box__option no-results';
        noResults.textContent = 'Город не найден';
        optionsList.appendChild(noResults);
      }
    }
    
    document.addEventListener('click', function(e) {
      if (!select.contains(e.target)) {
        select.classList.remove('open');
        searchInput.value = '';
        filterOptions('');
      }
    });
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && select.classList.contains('open')) {
        select.classList.remove('open');
        searchInput.value = '';
        filterOptions('');
      }
    });
    
    searchInput.addEventListener('keydown', function(e) {
      const visibleOptions = Array.from(options).filter(opt => !opt.classList.contains('hidden'));
      const currentIndex = visibleOptions.findIndex(opt => opt.classList.contains('selected'));
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = currentIndex < visibleOptions.length - 1 ? currentIndex + 1 : 0;
        if (visibleOptions[nextIndex]) {
          visibleOptions[nextIndex].scrollIntoView({ block: 'nearest' });
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : visibleOptions.length - 1;
        if (visibleOptions[prevIndex]) {
          visibleOptions[prevIndex].scrollIntoView({ block: 'nearest' });
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (visibleOptions[0]) {
          visibleOptions[0].click();
        }
      }
    });
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initCitySelect };
}
