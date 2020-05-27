$(document).ready(function(){
	/* Owlcarousel start */
	$('.testi-slider').owlCarousel({
		items: 1,
		smartSpeed: 5000,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		margin: 0,
		autoplayTimeout: 5000,
		responsiveClass: true,
		
	});

	/* -- magnific-popup js --*/
	$('.play-btn').magnificPopup({
		type:'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>',

			patterns: {
				youtube: {
					index: 'youtube.com/',

					id: 'v=',

					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			},
			srcAction: 'iframe_src',
		}
	});


});