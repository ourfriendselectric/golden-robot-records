$(document).ready(function(){
	$('.contact-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
	});

	$('#contact_address').change(function(){
		$('#contact_form').attr('action', 'https://formspree.io/' + $(this).val());

		// Remove all name attributes the inputs with id="cc_#"
		// Remove all name attributes the inputs with id="department_#"
		$($("[id^=cc_]")).removeAttr('name');
		$($("[id^=department_]")).removeAttr('name');

		const selected_id = $(this).children(":selected").attr('id');
		const cc_id = selected_id.replace("option_", "cc_"); // option's id is 'option_#' and cc field is 'cc_#'
		const department_id = selected_id.replace("option_", "department_"); // option's id is 'option_#' and cc field is 'cc_#'
		$('#' + cc_id).attr('name', '_cc');
		$('#' + department_id).attr('name', 'department');
	});

	var success = getUrlParameter('success');

	if(success) {
		$('.email-success').removeClass('invisible');
	}

	showNewsletterModal();
});

function showNewsletterModal() {
	// only run this script if the newsletter is enabled
	if ($('#newsletter').length){
		if (typeof $.cookie('newsletter') === 'undefined' || $.cookie("newsletter") === 'false') { // Checks to see if the cookie exists
			setTimeout(function() { 
				$('#newsletter').modal('show')
				$.cookie('newsletter', 'true', { expires: null, path: '/' });
			}, 2000);
		}
	} else {
		// remove the cookie do users see it next time it's turned on
		$.cookie("newsletter", 'false', { path: '/' });
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