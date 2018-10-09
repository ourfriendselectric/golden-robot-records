$(document).ready(function(){
	$('.contact-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
	});

	var success = getUrlParameter('success');

	if(success) {
		console.log('asd');
		$('.email-success').removeClass('invisible');
	}
});

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