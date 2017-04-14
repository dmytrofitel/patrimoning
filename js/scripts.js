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
function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: new google.maps.LatLng(40.713566, -73.5069479),
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
	});
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.713566, -73.559479),
		icon: {
			url: "images/ico-marker-03.png",
			scaledSize: new google.maps.Size(49, 86)
		},
		map: map
	});
	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(40.665934, -73.488181),
		map: map,
		icon: {
			url: "images/ico-marker-03.png",
			scaledSize: new google.maps.Size(49, 86)
		},
	});
}