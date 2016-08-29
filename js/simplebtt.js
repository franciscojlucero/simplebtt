(function ($) {
  Drupal.behaviors.simplebtt = {
    attach: function(context) {
      $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
          $('#sbtt').fadeIn();
        } else {
          $('#sbtt').fadeOut();
        }
      });
      $('#sbtt', context).once('simplebtt-bind').each(function() {
        $('#sbtt').click(function() {
          $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function() {
              $('html, body').stop();
          });
          $('html,body').animate({ scrollTop: 0 }, 1200, function() {
            $("html, body").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
          });
          return false;
        });
      });
    }
  };
})(jQuery);

