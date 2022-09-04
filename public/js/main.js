// * Preloader
$(document).ready(function(){
  setTimeout(
    function() {
      $("#preloader").fadeOut();
    }, 1000);
});

// * AOS
AOS.init({
  duration: 600,
  once: true
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  navbarDropdown.classList.remove('show');
}

// * Responsive navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  scrollFunction();
  responsiveNav();
}