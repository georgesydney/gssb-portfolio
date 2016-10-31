$(document).ready(function(){

	$('.plus').on('click', function(){

		if ($('.plus').hasClass('active')) {

		$('.about-panel').removeClass('visible-side');
		$('.plus').removeClass('active');

		} else {

			$('.about-panel').addClass('visible-side');
			$('.plus').addClass('active');

		}

	});

});