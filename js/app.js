$(window).load(function() {
	$('.alfa-slider').flexslider({
		slideshow: false,
		animation: "slide",
		easing: "easeInOutQuint",
		controlNav: false,
		prevText: "",
		nextText: "",
		keyboard: true,
		multipleKeyboard: true,
		controlsContainer: ".main-slider-container",
	});
});