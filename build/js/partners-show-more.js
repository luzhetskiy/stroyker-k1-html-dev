/**
 * Функциональность кнопки "Смотреть все" для партнеров
 * Показывает скрытые карточки партнеров при клике
 */

document.addEventListener('DOMContentLoaded', function() {
  // Находим все секции с партнерами по городам
  const affiliateNetworks = document.querySelectorAll('[data-city]');
  
  affiliateNetworks.forEach(function(network) {
    const partnersContainer = network.querySelector('[data-partners-container]');
    const showMoreBtn = network.querySelector('[data-show-more-btn]');
    const showMoreWrapper = network.querySelector('.partners-show-more');
    
    if (!partnersContainer || !showMoreBtn) return;
    
    // Получаем все карточки партнеров
    const allCards = partnersContainer.querySelectorAll('[data-partner-card]');
    const hiddenCards = partnersContainer.querySelectorAll('[data-partner-card][data-hidden]');
    
    // Если карточек 6 или меньше, скрываем кнопку
    if (allCards.length <= 6) {
      if (showMoreWrapper) {
        showMoreWrapper.style.display = 'none';
      }
      return;
    }
    
    // Обработчик клика на кнопку
    showMoreBtn.addEventListener('click', function() {
      const isExpanded = showMoreBtn.classList.contains('expanded');
      
      if (!isExpanded) {
        // Показываем скрытые карточки
        hiddenCards.forEach(function(card) {
          card.removeAttribute('data-hidden');
          card.style.animation = 'fadeInUp 0.5s ease forwards';
        });
        
        // Меняем текст кнопки
        showMoreBtn.textContent = 'Скрыть';
        showMoreBtn.classList.add('expanded');
      } else {
        // Скрываем карточки обратно
        hiddenCards.forEach(function(card) {
          card.setAttribute('data-hidden', '');
        });
        
        // Меняем текст кнопки обратно
        showMoreBtn.textContent = 'Смотреть все';
        showMoreBtn.classList.remove('expanded');
        
        // Прокручиваем к началу секции города
        network.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// CSS анимация для появления карточек (добавляется динамически)
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
