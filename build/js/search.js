"use strict";function processSearchResult(t,a){var e=t.data("search-url"),r=t.data("min-chars");t.on("focus keyup paste",(function(t){var c=$(this);this.dataset.minChars;c.val().length>=r?$.ajax({type:"get",url:e,data:c.serialize(),dataType:"html"}).done((function(t){t.replace(/\s/g,"").length>0?(a.html(t),a.show(),$(document).mouseup((function(t){a.is(t.target)||0!==a.has(t.target).length||a.hide()}))):(a.html(""),a.hide())})):a.hide().empty()}))}function processSearchBtnClick(t){var a=t.next("button");a.click((function(){var a=t.val();if(a){var e=t.data("search-url");window.location=e+"?q="+a}})),t.keyup((function(t){13===t.keyCode&&a.click()}))}jQuery(document).ready((function(t){var a,e,r=!1;screen.width>767?(a=t(".search_input"),e=t(".header-search-results")):(a=t(".search_input_mobile"),e=t("#search-result-mob"),r=!0),processSearchResult(a,e,r),processSearchBtnClick(a)})),$(document).ready((function(t){t("[data-search-button]").on("click",(function(a){var e=t(a.currentTarget).attr("data-search-button"),r=t('[data-search-input="'.concat(e,'"]')),c=r.val(),n=r.attr("data-search-url");window.location=n+"?q="+c})),t("[data-search-input]").on("focus keyup paste",(function(a){var e=t(a.currentTarget),r=e.val(),c=e.attr("data-search-input"),n=e.attr("data-min-chars"),s=e.attr("data-search-url"),i=t('[data-search-results="'.concat(c,'"]')),o=function a(e){e.target.closest("[data-search-results-active]")||(t(e.target).removeAttr("data-search-results-active"),t(document).off("click",a))};if("enter"===a.key)return window.location=s+"?q="+r;if(!(r.length<n))try{t.ajax({type:"get",url:s,data:e.serialize(),dataType:"html"}).done((function(a){if(a.replace(/\s/g,"").length<=0)return resultBoxEl.html(""),void resultBoxEl.removeAttr("data-search-results-active");i.html(a),i.attr("data-search-results-active"),t(document).on("click",o)}))}catch(t){}}))}));