document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('projects-search-input');
  const searchButton = document.querySelector('.projects-search__button');
  const portfolioContent = document.querySelector('.portfolio-content');
  
  if (!searchInput || !portfolioContent) {
    return;
  }
  
  const projectCards = portfolioContent.querySelectorAll('.project-card');
  
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    projectCards.forEach(function(card) {
      const title = card.querySelector('.project-card-title');
      const badge = card.querySelector('.project-card-badge');
      
      let titleText = title ? title.textContent.toLowerCase() : '';
      let badgeText = badge ? badge.textContent.toLowerCase() : '';
      
      if (searchTerm === '' || titleText.includes(searchTerm) || badgeText.includes(searchTerm)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  searchInput.addEventListener('input', performSearch);
  
  if (searchButton) {
    searchButton.addEventListener('click', performSearch);
  }
  
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch();
    }
  });
});
