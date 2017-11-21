$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var scrollDown = 0;
  $(window).scroll(function(){
      var scrollValue = $(this).scrollTop();
      if (scrollValue - scrollDown > 50) {
        var navbarHeight = $('.navbar').css('height');
        $('.navbar').animate({top: '-' + navbarHeight}, 150);
        scrollDown = scrollValue;
      } else if (scrollDown - scrollValue > 50) {
        $('.navbar').animate({top: '0px'}, 150);
        scrollDown = scrollValue;
      }
    });
  });
