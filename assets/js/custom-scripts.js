// Reveal animation on scroll
var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: false,
  live: true
});
wow.init();

// Smooth scrolling for all
$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top-0
  }, 500);
});

// Fullscreen menu
$('#toggleNav').click(function() {
 event.preventDefault();
 $(this).toggleClass('active');
 $('#navbarMobile').toggleClass('open');
});

// Esc overlay
var KEYCODE_ESC = 27;

$(document).keyup(function(e) {
  if (e.keyCode == KEYCODE_ESC) {
    $( "#navbarMobile" ).removeClass('open');
    $( "#toggleNav" ).removeClass('active');
  }
});

// Parallax init
jarallax(document.querySelectorAll('.jarallax'));

// Case Studies
$(document).ready(function(){
  $('.gallery-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.gallery-nav',
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false
        }
      }
    ]
  });
  $('.gallery-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.gallery-for',
    arrows: false,
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });
});

// Team page
$(".basic-toggle .toggle-label").on("click", function() {
    $(".basic-toggle .toggle-label").toggleClass("is-active"),
    $("body").toggleClass("is-teamToggled")
}),
$(".isolation-overlay, .team-item .btn-wrap").on({
    click: function(t) {
        t.stopPropagation(),
        $("body").removeClass("is-isolationOverlayOpen"),
        $(".team-item").removeClass("is-active"),
        setTimeout(function() {
            $(".team-item").removeClass("setZ")
        }, 300)
    }
}),
$(".team-item").on({
    click: function() {
        var t = $(this)
          , e = $(this).offset().top - $(this).height() / 2;
        $("html,body").animate({
            scrollTop: e
        }, 300, function() {
            $(".team-item").removeClass("is-active setZ"),
            t.addClass("is-active setZ"),
            $("body").addClass("is-isolationOverlayOpen")
        })
    }
});
