$(function() {

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var cont_top = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
$('.stage').ready(function(){
	$('.preloader').fadeOut('fast');

	if( cont_top < 10 && !isMobile.any() ){
		$('html, body').stop().delay(5000).animate({
			scrollTop: $("#nav-panel").offset().top+40
			}, 800, 'swing', function(){

			$('body').delay(1000).removeClass('oh');
	    });

	}else{
		
		$('body').removeClass('oh');
	}

});

$("img.lazy").lazyload({
	effect : "fadeIn",
	threshold : 200
});

new WOW().init();



});
