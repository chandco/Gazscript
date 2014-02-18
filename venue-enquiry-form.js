// JavaScript Document




(function($) {
	function vef_iframeReady() {
		$("#itawp-overlay, #itawp-iframe").fadeIn('slow');
	}
	
	
	$(document).ready(function() {
		$("button.enquire").click(function(e) {
            
			params = '?q=' + encodeURI($(this).val());
			$("#itawp-iframe iframe").attr("src", "http://itstheagency.coffeecup.com/forms/venue_enquiry/" + params);
			
			$("#itawp-iframe iframe").load(function() {
        	vef_iframeReady(this);
    });
			
			
        });
		
		
		$("button.itawp-close, #itawp-overlay").click(function(e) {
			$("#itawp-overlay, #itawp-iframe").fadeOut('slow');
			$("#item9_textarea_1").val("");
		});
	
	});
	
	
})( jQuery );


function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

// var me = getUrlVars()["me"];
// var name2 = getUrlVars()["name2"]; 