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
	$('.slider2').flexslider({
    slideshow: false,
    animation: "slide",
		easing: "easeInOutQuint",
		prevText: "",
		nextText: "",
    animationLoop: false,
  });
});