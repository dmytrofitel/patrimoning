$(document).ready(function () {
	$('.bg-img').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});
	$('.visual').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplay: true,
		fade: true,
		autospeed: 2000,
		speed: 2500
	});/*Post-slider*/

	$('.arrow-up').click(function (e) {
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 1000);
		return false;
	});/*Arrow Up*/

	$('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('#header');
	$('<span class="fader"/>').appendTo('#header');
	$('.open-menu').click(function(){
		$('body').toggleClass('menu-opened');
		return false;
	});

	$('.fader').click(function(){
		$('body').removeClass('menu-opened');
	});		

});
/* Map */
google.maps.event.addDomListener(window, 'load', init);

function init() {
	
	var mapOptions = {
		zoom: 11,
		center: new google.maps.LatLng(40.743566, -73.4069479), 
		scrollwheel: false,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.LEFT_TOP
		},
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_TOP
		},
		streetViewControl: true,
		streetViewControlOptions: {
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
		styles: [{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#444444"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [{
				"color": "#f2f2f2"
			}]
		}, {
			"featureType": "poi",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "all",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 45
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"color": "#719fe5"
			}, {
				"visibility": "on"
			}]
		}]
	};
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.713566, -73.559479),
		icon: {
			url: "images/ico-marker.png",
			scaledSize: new google.maps.Size(57, 85)
		},
		map: map
	});
	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(40.665934, -73.488181),
		map: map,
		icon: {
			url: "images/ico-marker.png",
			scaledSize: new google.maps.Size(57, 85)
		},
	});
}