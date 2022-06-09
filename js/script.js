// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function() {
    header.classList.toggle("menu-open");
}

//carousel
// $(document).ready(function(){
//     $('.carousel').slick({
//         dots: false,
//         arrows: false
//     });
// });
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