// ConeScroller v1.0
// Created by ConeDesign

$(document).ready(function(){

	$("a.scroll-to").click(function(){

		$('html, body').animate({
			// VERTICAL SCROLLING (DELETE OR COMMENT IF NOT NEEDED)
        scrollTop: $($(this).attr("data-scroll")).offset().top,

			// HORIZONTAL SCROLLING (DELETE OR COMMENT IF NOT NEEDED)
        scrollLeft: $($(this).attr("data-scroll")).offset().left
    	},{
					duration: 2000,
				});
	});
});
