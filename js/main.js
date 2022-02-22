// Vue
const vue = new Vue({
  el: '#app',
  router
})

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

// * Scroll to top
let scrollButton = document.getElementById("scroll-top");
let navbar = document.getElementById("navbar");

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        scrollButton.style.opacity = "100";
        scrollButton.style.cursor = "pointer";
        navbar.classList.add("shadow");
    } else {
        scrollButton.style.opacity = "0";
        scrollButton.style.cursor = "default";
        navbar.classList.remove("shadow");
    }
}

$(function() {
    $("#scroll-top").click(function() {
        $('body, documentElement').animate({
            scrollTop: 0
          }, 1500, 'easeInOutExpo');
        navbarDropdown.classList.remove('show');
    });
});

// * Responsive navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  scrollFunction();
  responsiveNav();
}
