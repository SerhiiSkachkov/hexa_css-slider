
$(document).ready(function() {

	$('.js-hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('nav').slideToggle()
	})

});