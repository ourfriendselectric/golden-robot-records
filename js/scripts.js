$(document).ready(function(){
	$('.contact-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
	});

	$('#department').change(function(){
		$('#contact_form').attr('action', 'https://formspree.io/' + $(this).val());
	});

	var success = getUrlParameter('success');

	if(success) {
		$('.email-success').removeClass('invisible');
	}

	showNewsletterModal();
});

function showNewsletterModal() {

	if (typeof $.cookie('newsletter') === 'undefined'){ // Checks to see if the cookie exists
		setTimeout(function() { 
			$('#newsletter').modal('show')
			$.cookie('newsletter', true, { expires: null, path: '/' });
		}, 2000);
	}

}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};