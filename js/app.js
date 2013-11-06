$(window).load(function() {
	$('.alfa-slider').flexslider({
		slideshow: true,
		animation: "slide",
		easing: "easeInOutQuint",
		controlNav: false,
		prevText: "",
		nextText: "",
		keyboard: true,
		multipleKeyboard: true,
		controlsContainer: ".main-slider-container",
	});

	$('.flexslider2').flexslider({
    slideshow: true,
    animation: "slide",
		easing: "easeInOutQuint",
		controlNav: false,
		prevText: "",
		nextText: "",
    animationLoop: false,
		controlsContainer: ".slider2",
  });
});