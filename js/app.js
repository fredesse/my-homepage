///////////// Mobile nav

	$(function(){
		$('#menu2').slicknav({
			label: '',
			prependTo: "#mobile-nav",
			closeOnClick: "true"
		});
	});




///////////// Slider

/*For home page*/

$(document).ready(function(){
  $('.one-time').slick({
  fade: true,
  autoplay: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  slidesToShow: 1,
  adaptiveHeight: false,
  dots: true
  });
});

/*For about page*/

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


