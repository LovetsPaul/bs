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

	if( cont_top < 10 && !isMobile.any() && $('body').hasClass('home') && ( getCookie('isVisitedHomePage') != 'true' )){
		$('html, body').stop().delay(5000).animate({
			scrollTop: $("#nav-panel").offset().top+40
			}, 800, 'swing', function(){

			$('body').delay(1000).removeClass('oh');
		});
		document.cookie = "isVisitedHomePage=true; path=/;";
	}else{

		$('body').removeClass('oh');
	}

});

$("img.lazy").lazyload({
	effect : "fadeIn",
	threshold : 300
});



new WOW().init();

$(document).ready(function(){
	if(isMobile.any()){
		$('.owl-carousel div').removeClass('col-md-4 col-sm-6 col-xs-12');
		$('.owl-carousel img').each(function(){
			var $img_src = $(this).attr('data-original');
			console.log($img_src);
			$(this).removeAttr('data-original').attr('data-src', $img_src);
		});
		$('.owl-carousel img').addClass('owl-lazy');
		$(".owl-carousel").owlCarousel({
				items: 3,
				center: true,
				loop: true,
				margin: -70,
				lazyLoad: true,
				responsive:{
				0:{
					items:1
				},
				480:{
					items: 1,
					margin: -300
				},
				1024:{
					items: 1,
					margin: -400
				}
		}
	
		});
	}
});

$('a.toogle-nav').click(function(e){
	e.preventDefault();
	$('.mobile-menu-popup-wrapp').toggleClass('mobile-menu-slide');
});

$('a.mobile-menu-close-toogle').click(function(e){
	e.preventDefault();
	$('.mobile-menu-popup-wrapp').toggleClass('mobile-menu-slide');
});



$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Загрузка #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1], // Will preload 0 - before current, and 1 after the current image
			arrowMarkup: '<i title="%title%" class="mfp-arrow fa fa-angle-%dir%"></i>', // markup of an arrow button

			tPrev: 'Назад', // title for left button
			tNext: 'Вперёд', // title for right button
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>' // markup of counter
		},
		image: {
			tError: '<a href="%url%">Изображение #%curr%</a> не загружено.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Bang Show</small>';
			}
		}
	});
});

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

});
