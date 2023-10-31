"use strict";function cleanUp(t){return(t=-1!=(t=$.trim(t)).search(/^https?\:\/\//)?t.match(/^https?\:\/\/([^?#]+)(?:[?#]|$)/i,""):t.match(/^([^?#]+)(?:[?#]|$)/i,""))[1]}window.addEventListener("load",function(){Helper.init()});var Helper={init:function(){var t=this;this.$block=document.querySelector(".helper"),this.$trigger=this.$block.querySelector(".helper__trigger"),this.set_active_page(),this.$trigger.addEventListener("click",function(){t.state?t.close():t.open()})},set_active_page:function(){var t=cleanUp(location.href).split("/"),t=t[t.length-1],i=""==t?"index.html":t;this.$block.querySelectorAll("a").forEach(function(t){var e=t.getAttribute("href").split("/"),e=e[e.length-1];i==e&&t.classList.add("active")})},open:function(){this.state=!0,this.$block.classList.add("active")},close:function(){this.state=!1,this.$block.classList.remove("active")}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlcyI6WyJoZWxwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIEhlbHBlci5pbml0KCk7XHJcbn0pOyAvL3VybCBjbGVhblxyXG5cclxuZnVuY3Rpb24gY2xlYW5VcCh1cmwpIHtcclxuICB2YXIgdXJsID0gJC50cmltKHVybCk7XHJcbiAgaWYgKHVybC5zZWFyY2goL15odHRwcz9cXDpcXC9cXC8vKSAhPSAtMSkgdXJsID0gdXJsLm1hdGNoKC9eaHR0cHM/XFw6XFwvXFwvKFtePyNdKykoPzpbPyNdfCQpL2ksIFwiXCIpO1xyXG4gIGVsc2UgdXJsID0gdXJsLm1hdGNoKC9eKFtePyNdKykoPzpbPyNdfCQpL2ksIFwiXCIpO1xyXG4gIHJldHVybiB1cmxbMV07XHJcbn1cclxuXHJcbnZhciBIZWxwZXIgPSB7XHJcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy4kYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlbHBlclwiKTtcclxuICAgIHRoaXMuJHRyaWdnZXIgPSB0aGlzLiRibG9jay5xdWVyeVNlbGVjdG9yKFwiLmhlbHBlcl9fdHJpZ2dlclwiKTtcclxuICAgIHRoaXMuc2V0X2FjdGl2ZV9wYWdlKCk7XHJcbiAgICB0aGlzLiR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghX3RoaXMuc3RhdGUpIHtcclxuICAgICAgICBfdGhpcy5vcGVuKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgX3RoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXRfYWN0aXZlX3BhZ2U6IGZ1bmN0aW9uIHNldF9hY3RpdmVfcGFnZSgpIHtcclxuICAgIHZhciB2YWx1ZXMgPSBjbGVhblVwKGxvY2F0aW9uLmhyZWYpLnNwbGl0KFwiL1wiKSxcclxuICAgICAgbGFzdF92YWx1ZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0sXHJcbiAgICAgIHBhZ2UgPSBsYXN0X3ZhbHVlID09IFwiXCIgPyBcImluZGV4Lmh0bWxcIiA6IGxhc3RfdmFsdWU7XHJcbiAgICB2YXIgJGxpbmtzID0gdGhpcy4kYmxvY2sucXVlcnlTZWxlY3RvckFsbChcImFcIik7XHJcbiAgICAkbGlua3MuZm9yRWFjaChmdW5jdGlvbiAoJHRoaXMpIHtcclxuICAgICAgdmFyIGhyZWZfdmFsdWVzID0gJHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIi9cIiksXHJcbiAgICAgICAgaHJlZl9wYWdlID0gaHJlZl92YWx1ZXNbaHJlZl92YWx1ZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICBpZiAocGFnZSA9PSBocmVmX3BhZ2UpIHtcclxuICAgICAgICAkdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9wZW46IGZ1bmN0aW9uIG9wZW4oKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gdHJ1ZTtcclxuICAgIHRoaXMuJGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfSxcclxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLiRibG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjbGVhblVwIiwidXJsIiwiJCIsInRyaW0iLCJzZWFyY2giLCJtYXRjaCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJIZWxwZXIiLCJpbml0IiwiX3RoaXMiLCJ0aGlzIiwiJGJsb2NrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJHRyaWdnZXIiLCJzZXRfYWN0aXZlX3BhZ2UiLCJzdGF0ZSIsImNsb3NlIiwib3BlbiIsInZhbHVlcyIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwibGFzdF92YWx1ZSIsImxlbmd0aCIsInBhZ2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIiR0aGlzIiwiaHJlZl92YWx1ZXMiLCJnZXRBdHRyaWJ1dGUiLCJocmVmX3BhZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBLGFBTUEsU0FBU0EsUUFBUUMsR0FJZixPQUZ1Q0EsRUFBSixDQUFDLElBQWhDQSxFQURNQyxFQUFFQyxLQUFLRixDQUFHLEdBQ1pHLE9BQU8sZUFBZSxFQUFlSCxFQUFJSSxNQUFNLG1DQUFvQyxFQUFFLEVBQ2xGSixFQUFJSSxNQUFNLHVCQUF3QixFQUFFLEdBQ3BDLEVBQ2IsQ0FUQUMsT0FBT0MsaUJBQWlCLE9BQVEsV0FDOUJDLE9BQU9DLEtBQUssQ0FDZCxDQUFDLEVBU0QsSUFBSUQsT0FBUyxDQUNYQyxLQUFNLFdBQ0osSUFBSUMsRUFBUUMsS0FFWkEsS0FBS0MsT0FBU0MsU0FBU0MsY0FBYyxTQUFTLEVBQzlDSCxLQUFLSSxTQUFXSixLQUFLQyxPQUFPRSxjQUFjLGtCQUFrQixFQUM1REgsS0FBS0ssZ0JBQWdCLEVBQ3JCTCxLQUFLSSxTQUFTUixpQkFBaUIsUUFBUyxXQUNqQ0csRUFBTU8sTUFHVFAsRUFBTVEsTUFBTSxFQUZaUixFQUFNUyxLQUFLLENBSWYsQ0FBQyxDQUNILEVBQ0FILGdCQUFpQixXQUNmLElBQUlJLEVBQVNwQixRQUFRcUIsU0FBU0MsSUFBSSxFQUFFQyxNQUFNLEdBQUcsRUFDM0NDLEVBQWFKLEVBQU9BLEVBQU9LLE9BQVMsR0FDcENDLEVBQXFCLElBQWRGLEVBQW1CLGFBQWVBLEVBQzlCYixLQUFLQyxPQUFPZSxpQkFBaUIsR0FBRyxFQUN0Q0MsUUFBUSxTQUFVQyxHQUN2QixJQUFJQyxFQUFjRCxFQUFNRSxhQUFhLE1BQU0sRUFBRVIsTUFBTSxHQUFHLEVBQ3BEUyxFQUFZRixFQUFZQSxFQUFZTCxPQUFTLEdBRTNDQyxHQUFRTSxHQUNWSCxFQUFNSSxVQUFVQyxJQUFJLFFBQVEsQ0FFaEMsQ0FBQyxDQUNILEVBQ0FmLEtBQU0sV0FDSlIsS0FBS00sTUFBUSxDQUFBLEVBQ2JOLEtBQUtDLE9BQU9xQixVQUFVQyxJQUFJLFFBQVEsQ0FDcEMsRUFDQWhCLE1BQU8sV0FDTFAsS0FBS00sTUFBUSxDQUFBLEVBQ2JOLEtBQUtDLE9BQU9xQixVQUFVRSxPQUFPLFFBQVEsQ0FDdkMsQ0FDRiJ9
