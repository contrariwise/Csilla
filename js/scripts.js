jQuery(document).ready(function ($) {

	/*
	 * Animated scroll
	 */
    $(".navbar a[href^='#']").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top  /*- $(window).scrollTop()*/
		}, 400, function(){
   
           // when done, add hash to url
           // (default click behaviour)
         /*  var scrollTop = $(window).scrollTop();
           var place = $(".active a").attr('href');
           if (scrollTop < 10) {
           		place = '';
           }
           
           	window.location.hash = place; */
           
           		
           
         });

    });
    
    
    /*
     * Portfolio
     */
	$('.thumbnail').magnificPopup({ 
	  type: 'image',
	  mainClass: 'mfp-zoom-out', // this class is for CSS animation below
	
	   // Delay in milliseconds before popup is removed
	  removalDelay: 500
	
	});
	
});