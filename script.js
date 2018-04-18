
//show location

window.onload = getMyLocation;

function getMyLocation() {

    //test for geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
    } else {
        alert('No geolocation support');
    }
}

//get lat and lng 

function displayLocation(positon) {

    var latitude = positon.coords.latitude;
    var longitude = positon.coords.longitude;
    var latLng = new google.maps.LatLng(latitude, longitude);

    showMap(latLng);
    createMarker(latLng);
    //set lat and lng values in div 

    var div = document.getElementById('location');
    div.innerHTML = 'Your location - Latitud: ' + latitude + ', Longitude: ' + longitude;

}

function showMap(latLng) {
//Show Map with Google map options
var mapOptions = {
    center: latLng,
    zoom: 13,
    mapTypeId: google.maps.mapTypeId.ROADMAP
};
 map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function createMarker(latLng) {

//setup marker option

var markerOptions = {
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true
}

//marker obj to mark location
var marker = new google.maps.Marker(markerOptions);

var content = 'You are here: ' + latLng.lat() + ', ' + latLng.lng();
addInfoWindow(marker, latLng, content);

}

function addInfoWindow(marker, latLng, content) {

var infoWindowOptions = {
    content: content,
    position: latLng
};

var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map);
});
}