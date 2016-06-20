$(document).ready(function () {


// =======  start  owl Carousel slider
	$('.slider .owl-carousel').owlCarousel({
	    loop: true,
	    responsiveClass: true,
	    responsiveRefreshRate: 1,
	    nav: true,
	    // autoplay: true,
	    navText: ['<div class="angel"> <i class="fa fa-angle-left" aria-hidden="true"></i> </div> ', '<div class="angel"> <i class="fa fa-angle-right" aria-hidden="true"></i> </div> '],
	    autoplayHoverPause: true,
	    addClassActive: true,
	    transitionStyle : "fade",
	    animateOut: "fadeOut",
	    animateIn: "fadeIn",
        items: 1
	});


});
