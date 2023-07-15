// navbar fixed 
$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('header').addClass('fixed');
  } else {
    $('header').removeClass('fixed');
  }
});


$(document).ready(function () {
  $('.owl_home_main').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    //animateOut: 'fadeOut',
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5500,
    autoplayHoverPause: false,
    navText: ["<i class='la la-angle-left'>", "<i class='la la-angle-right'>"],
    responsive: {
      0: {        
        nav: false
      },
      700: {
        dots: true,
        nav: true
      }
    }
  });
});


$(document).ready(function () {
  $('.owl_top_courses').owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    navText: ["<i class='la la-angle-left'>", "<i class='la la-angle-right'>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      700: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});

$(document).ready(function () {
  $('.owl_news').owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4500,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: ["<i class='la la-angle-left'>", "<i class='la la-angle-right'>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      700: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  });
});

$(document).ready(function () {
  $('.owl_partners').owlCarousel({
    items: 4,
    margin: 30,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4500,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: ["<i class='la la-angle-left'>", "<i class='la la-angle-right'>"],
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: true
      },
      700: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
});

