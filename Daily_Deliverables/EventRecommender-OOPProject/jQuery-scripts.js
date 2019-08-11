// $(document).ready(function(){
//     //this is another way of writing the initial document ready which means to load the jquery only AFTER the rest of the code is done
// //$(function() {

//     // $('#idlikebtn').on('click',function(){
//     //     //this here happen when you click the button
//     //     $(this).find('special').remove();
//     //     $(this).hide();
//     // });

//     //$(selector).action()

// });

(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 56)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 56
    });
  
  })(jQuery); // End of use strict