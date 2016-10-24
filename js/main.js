$(document).ready(function(){

	$( window ).resize(function() {
  		location.reload();
	});

	$('.slideshow').cycle({

	speed: 1000,
	timeout: 0, 
	fx: 'scrollHorz',
	next: '.next',
	prev: '.previous',

	});

	$('.captions').cycle({

	speed: 250,
	timeout: 0, 
	fx: 'fade',
	next: '.next',
	prev: '.previous',

	});

	$('.plus').on('click', function(){

		if ($('.plus').hasClass('active')) {

		$('.about-panel').removeClass('visible');
		$('.plus').removeClass('active');

		} else {

			$('.about-panel').addClass('visible');
			$('.plus').addClass('active');

		}

	});

});