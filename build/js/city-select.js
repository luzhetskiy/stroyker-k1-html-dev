// Кастомный селект с поиском
document.addEventListener('DOMContentLoaded', function() {
  initCustomSelect();
});

function initCustomSelect() {
  const customSelects = document.querySelectorAll('.custom-select');
  
  customSelects.forEach(select => {
    const trigger = select.querySelector('.custom-select__trigger');
    const dropdown = select.querySelector('.custom-select__dropdown');
    const searchInput = select.querySelector('.custom-select__search-input');
    const options = select.querySelectorAll('.custom-select__option');
    const valueDisplay = select.querySelector('.custom-select__value');
    const hiddenSelect = select.parentElement.querySelector('.city-select-dropdown');
    
    // Открытие/закрытие селекта
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      
      // Закрываем другие открытые селекты
      document.querySelectorAll('.custom-select.open').forEach(otherSelect => {
        if (otherSelect !== select) {
          otherSelect.classList.remove('open');
        }
      });
      
      select.classList.toggle('open');
      
      // Фокус на поле поиска при открытии
      if (select.classList.contains('open')) {
        setTimeout(() => {
          searchInput.focus();
        }, 100);
      } else {
        searchInput.value = '';
        filterOptions('');
      }
    });
    
    // Выбор опции
    options.forEach(option => {
      option.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Убираем выделение со всех опций
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Выделяем выбранную опцию
        option.classList.add('selected');
        
        // Обновляем значение
        const selectedText = option.textContent;
        const selectedValue = option.getAttribute('data-value');
        
        valueDisplay.textContent = selectedText;
        
        // Обновляем скрытый select
        if (hiddenSelect) {
          hiddenSelect.value = selectedValue;
          
          // Триггерим событие change для возможной обработки
          const event = new Event('change', { bubbles: true });
          hiddenSelect.dispatchEvent(event);
        }
        
        // Закрываем селект
        select.classList.remove('open');
        
        // Очищаем поиск
        searchInput.value = '';
        filterOptions('');
      });
    });
    
    // Поиск по опциям
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      filterOptions(searchTerm);
    });
    
    // Предотвращаем закрытие при клике на поле поиска
    searchInput.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    // Функция фильтрации опций
    function filterOptions(searchTerm) {
      let visibleCount = 0;
      const optionsList = select.querySelector('.custom-select__options');
      
      // Удаляем предыдущее сообщение "Ничего не найдено"
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
      
      // Если ничего не найдено, показываем сообщение
      if (visibleCount === 0 && searchTerm !== '') {
        const noResults = document.createElement('li');
        noResults.className = 'custom-select__option no-results';
        noResults.textContent = 'Город не найден';
        optionsList.appendChild(noResults);
      }
    }
    
    // Закрытие при клике вне селекта
    document.addEventListener('click', function(e) {
      if (!select.contains(e.target)) {
        select.classList.remove('open');
        searchInput.value = '';
        filterOptions('');
      }
    });
    
    // Закрытие при нажатии Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && select.classList.contains('open')) {
        select.classList.remove('open');
        searchInput.value = '';
        filterOptions('');
      }
    });
    
    // Навигация клавиатурой (стрелки вверх/вниз)
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

// Экспорт для использования в других скриптах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initCustomSelect };
}
