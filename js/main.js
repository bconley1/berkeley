$(document).ready(function(){
  // Populate images from data attributes.
  $('.parallax').each(function(index) {
      var imageSrc = $(this).data('image-src')
      var imageHeight = $(this).data('height')
      $(this).css('background-image','url(' + imageSrc + ')')
      $(this).css('height', imageHeight)
  })
})


var menuOn = false;

function hamburger (){
	event.preventDefault();
	
	if(menuOn){

		$( "#menu1" ).fadeOut( 0 );

 		$( "#menu2" ).fadeOut( 0 );

 		$( "#menu3" ).fadeOut( 0 );

		document.getElementById("mainmenu").style.width = "0px";

		menuOn = false;

	}else{

		document.getElementById("mainmenu").style.width = "100%";
			
		$( "#menu1" ).delay( 200 ).fadeIn( 400 );

		$( "#menu2" ).delay( 300 ).fadeIn( 400 );

  		$( "#menu3" ).delay( 400 ).fadeIn( 400 );
		
		menuOn = true;

}
}

$('#hamburger').click(hamburger);