


$(function(){
	// toggle grid
	$('.toggle-grid').click(function(){
	  if ( $('.grid-overlay').css('visibility') == 'hidden' )
	    $('.grid-overlay').css('visibility','visible')
	  else
	    $('.grid-overlay').css('visibility','hidden');
	});
	// toggle bootstrap container type
	$('.toggle-container').click(function(){
		if ( $('*#js-bs-container').hasClass('container'))
			$('*#js-bs-container').removeClass('container').addClass('container-fluid')
		else if ($('*#js-bs-container').hasClass('container-fluid'))
			$('*#js-bs-container').removeClass('container-fluid').addClass('container')
	});
});