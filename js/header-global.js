document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(t){t.target.matches(".contact-box p")&&t.target.classList.add("toggled")});var e=document.querySelector(".catalog-btn"),o=document.querySelector(".catalog-box"),n=document.querySelector(".menu-btn"),c=document.querySelector(".menu-box");document.addEventListener("click",function(t){t.target.matches(".catalog-btn")&&(e.classList.toggle("toggled"),o.classList.toggle("show"),n)&&(n.classList.remove("toggled"),c.classList.remove("show"))}),document.addEventListener("click",function(t){t.target.matches(".menu-btn")&&(n.classList.toggle("toggled"),c.classList.toggle("show"),e)&&(e.classList.remove("toggled"),o.classList.remove("show"))})}),$("#my-menu").mmenu({extensions:["position-front"]});var API=$("#my-menu").data("mmenu");function addButton(){$(".mm-panel .mm-navbar").append(`<button id='my-button-close'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <rect x="1.41406" width="17" height="2" rx="1" transform="rotate(45 1.41406 0)" fill="white"/>
                                      <rect y="12.0208" width="17" height="2" rx="1" transform="rotate(-45 0 12.0208)" fill="white"/>
                                      </svg></button>`)}$("#my-button").click(function(){API.open()}),$(".close_mm_menu").click(function(){API.close(),$(this).hide()}),addButton(),$(document).on("click",".mm-panel #my-button-close",function(){API.close()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWdsb2JhbC5qcyIsInNvdXJjZXMiOlsiaGVhZGVyLWdsb2JhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gcGhvbmUgdG9nZ2xlXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoXCIuY29udGFjdC1ib3ggcFwiKSkgcmV0dXJuO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGVkXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBjYXRhbG9nIGFuZCBtZW51IHZhcnNcclxuICB2YXIgY2F0YWxvZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0YWxvZy1idG5cIik7XHJcbiAgdmFyIGNhdGFsb2dCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGFsb2ctYm94XCIpO1xyXG4gIHZhciBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcclxuICB2YXIgbWVudUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1ib3hcIik7XHJcblxyXG4gIC8vIGNhdGFsb2cgb3BlblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuY2F0YWxvZy1idG5cIikpIHtcclxuICAgICAgY2F0YWxvZ0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlZFwiKTtcclxuICAgICAgY2F0YWxvZ0JveC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICAgICAgaWYgKG1lbnVCdG4pIHtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2dnbGVkXCIpO1xyXG4gICAgICAgIG1lbnVCb3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gbWVudSBvcGVuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5tZW51LWJ0blwiKSkge1xyXG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGVkXCIpO1xyXG4gICAgICBtZW51Qm94LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICBpZiAoY2F0YWxvZ0J0bikge1xyXG4gICAgICAgIGNhdGFsb2dCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRvZ2dsZWRcIik7XHJcbiAgICAgICAgY2F0YWxvZ0JveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIjbXktbWVudVwiKS5tbWVudSh7XHJcbiAgZXh0ZW5zaW9uczogW1wicG9zaXRpb24tZnJvbnRcIl0sXHJcbn0pO1xyXG5cclxudmFyIEFQSSA9ICQoXCIjbXktbWVudVwiKS5kYXRhKFwibW1lbnVcIik7XHJcbi8vINC+0YLQutGA0YvRgtGMIG1tZW51XHJcbiQoXCIjbXktYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICBBUEkub3BlbigpO1xyXG59KTtcclxuLy8g0LfQsNC60YDRi9GC0YwgbW1lbnVcclxuJChcIi5jbG9zZV9tbV9tZW51XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICBBUEkuY2xvc2UoKTtcclxuICAkKHRoaXMpLmhpZGUoKTtcclxufSk7XHJcblxyXG4vLyBjbG9zZSBidXR0b24gYXBwZW5kIGluIG1tZW51XHJcbmZ1bmN0aW9uIGFkZEJ1dHRvbigpIHtcclxuICAkKFwiLm1tLXBhbmVsIC5tbS1uYXZiYXJcIikuYXBwZW5kKGA8YnV0dG9uIGlkPSdteS1idXR0b24tY2xvc2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTQgMTRcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxLjQxNDA2XCIgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjJcIiByeD1cIjFcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNDUgMS40MTQwNiAwKVwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB5PVwiMTIuMDIwOFwiIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIyXCIgcng9XCIxXCIgdHJhbnNmb3JtPVwicm90YXRlKC00NSAwIDEyLjAyMDgpXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPjwvYnV0dG9uPmApO1xyXG59XHJcbmFkZEJ1dHRvbigpO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5tbS1wYW5lbCAjbXktYnV0dG9uLWNsb3NlXCIsIGZ1bmN0aW9uICgpIHtcclxuICBBUEkuY2xvc2UoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwibWF0Y2hlcyIsImNsYXNzTGlzdCIsImFkZCIsImNhdGFsb2dCdG4iLCJxdWVyeVNlbGVjdG9yIiwiY2F0YWxvZ0JveCIsIm1lbnVCdG4iLCJtZW51Qm94IiwidG9nZ2xlIiwicmVtb3ZlIiwiJCIsIm1tZW51IiwiZXh0ZW5zaW9ucyIsIkFQSSIsImRhdGEiLCJhZGRCdXR0b24iLCJhcHBlbmQiLCJjbGljayIsIm9wZW4iLCJjbG9zZSIsInRoaXMiLCJoaWRlIiwib24iXSwibWFwcGluZ3MiOiJBQUFBQSxTQUFTQyxpQkFBaUIsbUJBQW9CLFdBRTVDRCxTQUFTQyxpQkFBaUIsUUFBUyxTQUFVQyxHQUN0Q0EsRUFBRUMsT0FBT0MsUUFBUSxnQkFBZ0IsR0FFcENGLEVBQUVDLE9BQU9FLFVBQVVDLElBQUksU0FBUyxDQUVwQyxDQUFDLEVBR0QsSUFBSUMsRUFBYVAsU0FBU1EsY0FBYyxjQUFjLEVBQ2xEQyxFQUFhVCxTQUFTUSxjQUFjLGNBQWMsRUFDbERFLEVBQVVWLFNBQVNRLGNBQWMsV0FBVyxFQUM1Q0csRUFBVVgsU0FBU1EsY0FBYyxXQUFXLEVBR2hEUixTQUFTQyxpQkFBaUIsUUFBUyxTQUFVQyxHQUN2Q0EsRUFBRUMsT0FBT0MsUUFBUSxjQUFjLElBQ2pDRyxFQUFXRixVQUFVTyxPQUFPLFNBQVMsRUFDckNILEVBQVdKLFVBQVVPLE9BQU8sTUFBTSxFQUM5QkYsS0FDRkEsRUFBUUwsVUFBVVEsT0FBTyxTQUFTLEVBQ2xDRixFQUFRTixVQUFVUSxPQUFPLE1BQU0sRUFLckMsQ0FBQyxFQUdEYixTQUFTQyxpQkFBaUIsUUFBUyxTQUFVQyxHQUN2Q0EsRUFBRUMsT0FBT0MsUUFBUSxXQUFXLElBQzlCTSxFQUFRTCxVQUFVTyxPQUFPLFNBQVMsRUFDbENELEVBQVFOLFVBQVVPLE9BQU8sTUFBTSxFQUMzQkwsS0FDRkEsRUFBV0YsVUFBVVEsT0FBTyxTQUFTLEVBQ3JDSixFQUFXSixVQUFVUSxPQUFPLE1BQU0sRUFLeEMsQ0FBQyxDQUNILENBQUMsRUFFREMsRUFBRSxVQUFVLEVBQUVDLE1BQU0sQ0FDbEJDLFdBQVksQ0FBQyxpQkFDZixDQUFDLEVBRUQsSUFBSUMsSUFBTUgsRUFBRSxVQUFVLEVBQUVJLEtBQUssT0FBTyxFQVlwQyxTQUFTQyxZQUNQTCxFQUFFLHNCQUFzQixFQUFFTTs7OztzREFJMEIsQ0FDdEQsQ0FoQkFOLEVBQUUsWUFBWSxFQUFFTyxNQUFNLFdBQ3BCSixJQUFJSyxLQUFLLENBQ1gsQ0FBQyxFQUVEUixFQUFFLGdCQUFnQixFQUFFTyxNQUFNLFdBQ3hCSixJQUFJTSxNQUFNLEVBQ1ZULEVBQUVVLElBQUksRUFBRUMsS0FBSyxDQUNmLENBQUMsRUFVRE4sVUFBVSxFQUVWTCxFQUFFZCxRQUFRLEVBQUUwQixHQUFHLFFBQVMsNkJBQThCLFdBQ3BEVCxJQUFJTSxNQUFNLENBQ1osQ0FBQyJ9
