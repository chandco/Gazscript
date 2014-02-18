// JavaScript Document

function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time);
}




jQuery(document).ready(function($) {


// initialise
$("#jslide-wrapper ul.slides li").each(function(index, element) {
    $(this).hide().append("<button class='next'>Next</button>").prepend("<button class='prev'>Previous</button>");
});

$("#jslide-wrapper section.end").hide();

$("#jslide-wrapper section.intro").append("<button class='start'>View Trends</button>");

$(document).on("click", "button.start", function(e) {
	
	$(this).parent().fadeOut(function(e) {
	
		$("#jslide-wrapper ul.slides li").first().fadeIn();
	});
});

$("#jslide-wrapper section.end").append("<button class='reset'>Start Again</button>");

$(document).on("click", "button.reset", function(e) {
	
	$(this).parent().fadeOut(function(e) {
		$("#jslide-wrapper section.intro").fadeIn();
	});
});

    

$(document).on("click", "button.next", function(e) {
	
	$(this).parent().fadeOut(function(e) {
		if ($(this).next("li").length == 0)
		{
			$("#jslide-wrapper section.end").fadeIn();
		} else {
			$(this).next("li").fadeIn();
		}
	});
});


$(document).on("click", "button.prev", function(e) {
	
	$(this).parent().fadeOut(function(e) {
		if ($(this).prev("li").length == 0)
		{
			$("#jslide-wrapper section.intro").fadeIn();
		} else {
			$(this).prev("li").fadeIn();
		}
	});
});


	$("button.list").click(function(e) {
		if ($(this).hasClass("active"))
		{
			$("#jslide-wrapper ul.slides li").fadeOut( function(e)
			{
				$(this).find("button").show();	
			})
			$("section.intro button").fadeIn();
			$(this).html("Show as List").removeClass("active");
		} else {
			$("#jslide-wrapper ul.slides li").fadeIn().find("button").hide();
			$("section.intro").fadeIn();
			  $("section.intro button").fadeOut();
			$(this).html("Show as Slideshow").addClass("active");
		}
		});
	
		
		
	
	

});