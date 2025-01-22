$(document).ready(function ($) {
  $("[data-search-button]").on("click", (event) => {
    const id = $(event.currentTarget).attr("data-search-button");
    const input = $(`[data-search-input="${id}"]`);
    const value = input.val();
    const searchUrl = input.attr("data-search-url");
    window.location = searchUrl + "?q=" + value;
  });

  $("[data-search-input]").on("focus keyup paste", (event) => {
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

    if (event.key === "Enter") return (window.location = searchUrl + "?q=" + value);

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