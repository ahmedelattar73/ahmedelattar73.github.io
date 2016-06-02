/*global $,WOW*/
$(document).ready(function () {

// Mobile Nav Button
    "use strict";
	$("nav .mobile-button").click(function () {
		$("nav .mobile-menu").slideToggle();
	});

	if ($(window).width() < 977) {
		$("nav .menu").addClass("mobile-menu");
		$("nav .mobile-button").show();
		$("nav .menu").css("display", "none");
	} else {
		$("nav .menu").removeClass("mobile-menu");
		$("nav .mobile-button").hide();
		$("nav .menu").css("display", "block");
	}

    $(window).resize(function () {
        if ($(window).width() < 977) {
            $("nav .menu").addClass("mobile-menu");
            $("nav .mobile-button").show();
            $("nav .menu").css("display", "none");
        } else {
            $("nav .menu").removeClass("mobile-menu");
            $("nav .mobile-button").hide();
            $("nav .menu").css("display", "block");
        }
    }); // End window resize


// =======  start  owl Carousel slider
	$('.slider .owl-carousel').owlCarousel({
	    loop: true,
	    responsiveClass: true,
	    responsiveRefreshRate: 1,
	    nav: true,
	    autoplay: true,
	    navText: ['<div class="angel"> <i class="fa fa-angle-left" aria-hidden="true"></i> </div> ', '<div class="angel"> <i class="fa fa-angle-right" aria-hidden="true"></i> </div> '],
	    autoplayHoverPause: true,
	    addClassActive: true,
	    transitionStyle : "fade",
	    animateOut: "fadeOut",
	    animateIn: "fadeIn",
        items: 1
	});

	// hide and show owl-nav  while hover   
	$(".slider").hover(function () {
		$(".slider .owl-nav").fadeIn();
    },
		function () {
            $(".slider .owl-nav").fadeOut();
        });

		// =======  start  owl Carousel featured
	$('.featured .owl-carousel').owlCarousel({
	    loop: true,
	    margin: 30,
	    responsiveClass: true,
	    responsiveRefreshRate: 1,
	    nav: true,
	    dots: false,
	    autoplay: true,
	    autoplayHoverPause: true,
	    navText: ['<div class="angel"> <i class="fa fa-angle-left" aria-hidden="true"></i> </div> ', '<div class="angel"> <i class="fa fa-angle-right" aria-hidden="true"></i> </div> '],

	    responsive: {
	        0: {
	            items: 1
	        },
	        400: {
	            items: 2
	        },
	        600: {
	            items: 3
	        },
	        1000: {
	            items: 4

	        }
	    }
	});

		// =======  start  owl Carousel deals-slider
	$('.deals-slider .owl-carousel').owlCarousel({
	    loop: true,
	    responsiveClass: true,
	    responsiveRefreshRate: 1,
	    nav: true,
	    dots: false,
	    autoplay: true,
	    autoplayHoverPause: true,
	    navText: ['<div class="angel"> <i class="fa fa-angle-left" aria-hidden="true"></i> </div> ', '<div class="angel"> <i class="fa fa-angle-right" aria-hidden="true"></i> </div> '],
	    items: 1
	});

		// =======  start  owl Carousel testemonials
	$('.testemonials .owl-carousel').owlCarousel({
	    loop: true,
	    responsiveClass: true,
	    responsiveRefreshRate: 1,
	    nav: true,
	    dots: false,
	    autoplay: true,
	    autoplayHoverPause: true,
	    navText: ['<div class="angel"> <i class="fa fa-angle-left" aria-hidden="true"></i> </div> ', '<div class="angel"> <i class="fa fa-angle-right" aria-hidden="true"></i> </div> '],
	    items: 1
	});

// deals Vertical Align Center
	window.onload = function () {

		$(".hot-categories .cat-content").each(function () {
	        var catheight = $(this).height(),
	            hotCategoriesHeight = $(this).parents(".category-box").height(),
	            catMargin = (hotCategoriesHeight - catheight) / 2;
			$(this).css("marginTop", catMargin);
		});
		$(window).resize(function () {
			$(".hot-categories .cat-content").each(function () {
	            var catheight = $(this).height(),
	                hotCategoriesHeight = $(this).parents(".category-box").height(),
	                catMargin = (hotCategoriesHeight - catheight) / 2;
				$(this).css("marginTop", catMargin);
			});
		});	
	};



// =======  featured-brand tabs
	$(".featured-brand ul li").click(function () {
		$(".featured-brand ul li").removeClass("tab-active");
		$(this).addClass("tab-active");

		if ($(".featured-brand .last-wrap li").hasClass("tab-active")) {
			$(this).addClass("tab-active-right");
		} else {
			$(this).removeClass("tab-active-right");
		}
		var liName = $(this).attr("data-li-name");
		$(".featured-brand .brand-content img").hide();
		$("." + liName).fadeIn(1000);
	});// ======= End featured-brand tabs


//=======  Wow scroll Animation Plugin =======

	new WOW().init();


// Scroll Top
	$(".scrooltop").click(function () {
		$("html, body").animate({scrollTop: 0}, 1200);
	});

	$(window).scroll(function () {
		var windowTop = $(window).scrollTop();
		if (windowTop > 300) {
			$(".scrooltop").fadeIn(1500);
		} else {
			$(".scrooltop").fadeOut(1500);
		}
	});


	// Option Box
	$(".option-box-collapse").click(function () {
		var optionBox = $(".option-box");
		optionBox.toggleClass("op-active");
		if (optionBox.hasClass("op-active")) {
			$(this).parent().animate({
				left: 0
			}, 1000);
		} else {
			$(this).parent().animate({
				left: -170
			}, 1000);
		}
	});
// colorise

	$(".option-box ul li").click(function () {
        var liColor = $(this).attr("data-color-skin");

        $(".angel, .search button, .my-cart, nav .menu li:first-child a,nav .menu li a:hover, nav .mobile-menu li a,.deals .deal-content,.slider .capture button, .slide-box .slide-options .button:hover,.hot-categories .cat-title button,.featured-brand .title, footer .fast-links h4:after, .scrooltop:hover,.option-box .option-box-collapse")
            .css("background", liColor);

        $(".search form,.deals .deal-content h3,.help form,.help form button")
            .css("borderColor", liColor);

        $(".shipping i,nav .social li:hover i,.deals .time > div,.featured h3 span,.slide-box .slide-options .button:nth-child(2),.hot-categories .cat-title h3 span,.latest-blog .blog-content a,footer .lower-fotter .copyright a,.option-box p")
            .css("color", liColor);

	});


}); // End document ready
