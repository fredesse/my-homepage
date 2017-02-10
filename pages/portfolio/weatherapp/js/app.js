$(document).ready(function() {
	loadCity("Tallinn");

	$("a.city").bind("click", function() {
		loadCity($(this).html());
	});
});

var icons = {
	"clear-day" : "B",
	"clear-night" : "C",
	"rain" : "R",
	"snow" : "G",
	"sleet" : "X",
	"wind" : "S",
	"fog" : "N",
	"cloudy" : "Y",
	"partly-cloudy-day" : "H",
	"partly-cloudy-night" : "I"
};

var cities = {
	"tallinn" : {coords: {latitude: 59.436962, longitude: 24.753574}},
	"riga" : {coords: {latitude: 56.946285, longitude: 24.105078}},
	"vilnius" : {coords: {latitude: 54.687157, longitude: 25.279652}},
	"london" : {coords: {latitude: 51.509865, longitude: -0.118092}},
	"san francisco" : {coords: {latitude: 37.774929, longitude: -122.419416}},
	"current location" : ""
};

function loadWeather(cityCoords) {

	var latlng = cityCoords.coords.latitude + "," + cityCoords.coords.longitude;

	var forecastURL = "https://api.darksky.net/forecast/3145b5f96ccde54017c4f7ef552422a2/"+latlng;

	$.ajax({
		url: forecastURL,
		jsonCallback: 'jsonCallback',
		contentType: "application/json",
		dataType: 'jsonp',
		success: function(json) {
			console.log(json);
			$("#current_temp").html(Math.round(json.currently.temperature)+"&#176;F");
			$("#current_summary").html(json.currently.summary);
			$("#current_temp").attr("data-icon", icons[json.currently.icon]);
		},
		error: function(e) {
			console.log(e.message);
		}
	});
}

function loadCity(city) {
	$("#location").html(city);

	if(city.toLowerCase() === "current location") {
		if ( navigator.geolocation )
			navigator.geolocation.getCurrentPosition(loadWeather, loadDefaultCity);
		else {
			loadDefaultCity();
			}
		} else {
		loadWeather(cities[city.toLowerCase()]);
		}
}

function loadDefaultCity() {
	loadCity("Tallinn");
}






























