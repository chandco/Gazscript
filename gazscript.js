// JavaScript Document for Gaz


// JavaScript Document




(function($) {
	function vef_iframeReady() {
		$("#itawp-overlay, #itawp-iframe").fadeIn('slow');
	}
	
	
	$(document).ready(function() {
		$("button.enquire").click(function(e) {
            
			_gaq.push(['_trackEvent', 	'venuefinder-search',	'clicked-enquire',	$(this).val(), 20 ]);
//		_gaq.push(['_trackEvent', 'Videos', 'Video Load Time', 'Gone With the Wind', downloadTime]);
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


jQuery(window).on("load",function(){var d=new RegExp(location.host);var b=new RegExp("#+");var a=new RegExp("^javascript:+");var g=new RegExp("plus|linkedin|pinterest|facebook|twitter+");var e=new RegExp("/go/+");var c=new RegExp(".pdf$");var f=new RegExp(".zip$");jQuery("a").each(function(){var h=jQuery(this).attr("href");if(a.test(h)){}else{if(e.test(h)){jQuery(this).attr("onclick","_gaq.push(['_trackEvent', 'Outbound', 'Affiliate', '"+h+"']);")}else{if(g.test(h)){jQuery(this).attr("onclick","_gaq.push(['_trackEvent', 'Outbound', 'Social Media', '"+h+"']);")}else{if(b.test(h)){jQuery(this).attr("onclick","_gaq.push(['_trackEvent', 'Anchor', 'Click', '"+h+"']);")}else{if(!d.test(h)){jQuery(this).attr("onclick","_gaq.push(['_trackEvent', 'Outbound', 'Other', '"+h+"']);")}else{if(f.test(h)){jQuery(this).attr("onclick","_gaq.push(['_trackEvent', 'Download', 'Zip', '"+h+"']);")}else{if(c.test(h)){jQuery(this).attr("onclick","_gaq.push(['_trackEvent', 'Download', 'Pdf', '"+h+"']);")}else{}}}}}}}})});





