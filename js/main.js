$(document).ready(function(){

	// $('#splash-name').delay(2000).fadeIn(500,"linear");
	
	// $('#dot-1').addClass("animated-dot");
	// setTimeout(function(){
	
	// $('#dot-2').addClass("animated-dot");
	// }, 1200);

	// setTimeout(function(){
	
	// $('#dot-3').addClass("animated-dot");
	// }, 500);

	// setTimeout(function(){
	
	// $('#dot-4').addClass("animated-dot");
	// }, 1700);

	// setTimeout(function(){
	
	// $('#splash-name').addClass("animated-name");
	// }, 2300);
	
	// $('#splash').delay(5000).fadeOut(500,"linear");


	$('.image').on('click',function(){
	  	$("#lightbox-wrap").fadeIn(300,function(){
	 	});
	});

	$('#lightbox-wrap').on('click',function(){
	  	$("#lightbox-wrap").fadeOut(300,function(){
	 	});
	});

});