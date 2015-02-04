//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        if($($anchor.attr('data-target')).length > 0) {
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('data-target')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
        }
    });
});
