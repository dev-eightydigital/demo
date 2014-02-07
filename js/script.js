$(document).ready(function() {
	var au = $("#aboutus"), ser = $("#Services");
    var aupos = au.position(), serpos = ser.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        //$('#navbar').html("Distance from top:" + aupos.top + "<br />Scroll position: " + windowpos);
        if (windowpos >= aupos.top) {
            $("#navbar").css({
				position: 'relative',
				top: '100px'
				});
			
        } 
		
		else {
            $("#navbar").css({
				position: 'fixed',
				top: '0'
				});
        }
		
    });
});