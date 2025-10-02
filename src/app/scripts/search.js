$(document).ready(function ($) {
  $("[data-search-button]").on("click", (event) => {
    console.log('click');
    const id = $(event.currentTarget).attr("data-search-button");
    const input = $(`[data-search-input="${id}"]`);
    const value = input.val();
    const searchUrl = input.attr("data-search-url");
    window.location = searchUrl + "?q=" + value;
  });

  $("[data-search-input]").on("focus keyup paste", (event) => {
    console.log('focus keyup paste');
    const input = $(event.currentTarget);
    const value = input.val();
    const id = input.attr("data-search-input");
    const searchMinChars = input.attr("data-min-chars");
    const searchUrl = input.attr("data-search-url");
    const resultContainer = $(`[data-search-results="${id}"]`);
    const clickOuterHandler = (event) => {
      if (!event.target.closest("[data-search-results-active]")) {
        $(event.target).removeAttr("data-search-results-active");
        $(document).off("click", clickOuterHandler);
      }
    };

    if (event.key === "Enter") {
      console.log('Enter');
      
      return (window.location = searchUrl + "?q=" + value)
    }

    if (value.length < searchMinChars) return;

    try {
      $.ajax({
        type: "get",
        url: searchUrl,
        data: input.serialize(),
        dataType: "html",
      }).done((result) => {
        if (result.replace(/\s/g, "").length <= 0) {
          resultContainer.html("");
          resultContainer.removeAttr("data-search-results-active");
          return;
        }
        resultContainer.html(result);
        resultContainer.attr("data-search-results-active", "");
        $(document).on("click", clickOuterHandler);
      });
    } catch {
      (error) => {
        console.log(error);
      };
    }
  });
});

// мобильный скролл результатов поиска
document.addEventListener('DOMContentLoaded', function() {
    function activateMobileScroll() {
        const searchContainer = document.querySelector('.search-modal-window__search-results');
        if (searchContainer) {
            searchContainer.style.maxHeight = '400px';
            searchContainer.style.overflowY = 'scroll';
            searchContainer.style.webkitOverflowScrolling = 'touch';
            
            searchContainer.addEventListener('touchstart', function(e) {
                e.stopPropagation();
            });
            
            searchContainer.addEventListener('touchmove', function(e) {
                e.stopPropagation();
            });
            
            console.log('Мобильный скролл активирован для:', searchContainer);
        }
    }
    
    // Проверяем каждые 500мс пока не найдем контейнер
    const interval = setInterval(function() {
        activateMobileScroll();
    }, 500);
    
    // Останавливаем через 10 секунд
    setTimeout(function() {
        clearInterval(interval);
    }, 10000);
});