// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function() {
    header.classList.toggle("menu-open");
}

// Slider

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  focusOnSelect: true
});

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno -1);
});

// Carousel

$('.carousel').slick({
  centerMode: true,
  dots: false,
  arrows: false,
  centerPadding: '60px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 360,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1280,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

  //Accordion
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }