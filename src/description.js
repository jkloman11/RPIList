
$(document).ready(function() {
		
//Displays popup on click
	$('#contact').click(function() {
		$('.screen').css('display','flex');
	}); 
//Close popup when "X" is clicked
	$('.close').click(function(){
		$('.screen').css('display','none');
	});
//On screen click if(screen display is flex AND if click location isn't popup AND event.target is not X). Still figuring out how to make it work
/*	$('.screen').click(function() {
		if($(Event.target)!=$('.popup')){
			$('.screen').css('display','none');
		}
	});
*/
});