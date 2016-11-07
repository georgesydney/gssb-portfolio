$(document).ready(function(){

	$('.plus').on('click', function(){

		if ($('.plus').hasClass('active')) {

		$('.about-panel').removeClass('about-visible');
		$('.plus').removeClass('active');

		} else {

			$('.about-panel').addClass('about-visible');
			$('.plus').addClass('active');

		}

	});

	// $(function(){
	// 	$('.image').draggable();
	// });

	// $('.image').on('mousedown', function(){

	// 	$(this).css("z-index", "2").siblings().css("z-index", "1");

	// });


});