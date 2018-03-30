

// toggle grid
$(function(){
	$('.toggle-grid').click(function(){
	  if ( $('.grid-overlay').css('visibility') == 'hidden' )
	    $('.grid-overlay').css('visibility','visible')
	  else
	    $('.grid-overlay').css('visibility','hidden');
	});
});