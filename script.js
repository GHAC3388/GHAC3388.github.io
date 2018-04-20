
//Swipe to reveal input section

var element = document.getElementById('hide-block');

Hammer(element).on("swipe", function(event) {
  element.style.backgroundColor="blue";
  
});

var map;
var shopType; 
shopType = '';   
var proximity;
 

//update html with lat and lng values
// function getMyLocation(shopType,proximity) {
function getMyLocation() {
    
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    alert('Oops, no geolocation support');
  }
}

//This function is inokved asynchronously by the HTML5 geolocation API.
function displayLocation(position,shopType,proximity) {
  //The latitude and longitude values obtained from HTML 5 API.
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  //Creating a new object for using latitude and longitude values with Google map.
  var latLng = new google.maps.LatLng(latitude, longitude);

  var whichPlace = document.getElementsByName('place');
  var len = whichPlace.length;
  for(i=0;i<len;i++) {
      if(whichPlace[i].checked) {
          shopType = whichPlace[i].value;
          alert(shopType);
      }
  }

  //shopType = document.getElementById('shopTypeText').value;
  proximity = parseInt(document.getElementById('proximity').value) * 1000;
  
  alert(shopType);
  alert(proximity);
  
  showMap(latLng);
  addNearByPlaces(latLng, shopType, proximity);
  createMarker(latLng);
  navigator.vibrate(1000); //vibrate once places are found
  //Also setting the latitude and longitude values in another div.
  var div = document.getElementById('location');
  div.innerHTML = 'You are at Latitude: ' + latitude + ', Longitude: ' + longitude;
}

function showMap(latLng) {
  //Setting up the map options like zoom level, map type.
 
  var mapOptions = {
    center: latLng,
    zoom: 14,
    maxZoom: 15,
    minZoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  //Creating the Map instance and assigning the HTML div element to render it in.
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function addNearByPlaces(latLng, shopType, proximity) {
 
  var nearByService = new google.maps.places.PlacesService(map);

  var request = {
    location: latLng,
    radius: proximity,
    types: [shopType]
  };

  nearByService.nearbySearch(request, handleNearBySearchResults);
}

function handleNearBySearchResults(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(place.geometry.location, place);
    }
  }
}

function createMarker(latLng, placeResult) {
  var markerOptions = {
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
  }
  //Setting up the marker object to mark the location on the map canvas.
  var marker = new google.maps.Marker(markerOptions);



  if (placeResult) {
    var content = placeResult.name+'<br/>'+placeResult.vicinity;  
    //var content = placeResult.name+'<br/>'+placeResult.vicinity+'<br/>'+placeResult.types;
    addInfoWindow(marker, latLng, content);
  }
  else {
    var content = 'You are here: ' + latLng.lat() + ', ' + latLng.lng();
    addInfoWindow(marker, latLng, content);
  }

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

$(document).ready(function () {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    // Determine if vibration is supported in this web browser
    if (!navigator.vibrate) {
        $('#supported').hide();
        return;
    }
    $('#unsupported').hide();
    // One second vibration
    $('#buzz').click(function () {
        navigator.vibrate(1000);
    });
   
    
});



//Swipe to reveal input section

var element = document.getElementById('hide-block');

Hammer(element).on("swipe", function(event) {
  element.style.display="none";
  
});


//progress bar

// var numValid = 0;
// $("#search-form input[required]").each(function() {
  
//   if (this.validity.valid) {
//       numValid++;
//   }

// });

// // Progress update
// var progress = $("#progress"),
//     progressMessage = $("#progressMessage");

// // Logic that runs after counting every time
// if (numValid == 0) {
//     progress.attr("value", "0");
//     progressMessage.text("0%");
// }
// if (numValid == 1) {
//     progress.attr("value", "50");
//     progressMessage.text("50%");
// }
// if (numValid == 2) {
//   progress.attr("value", "100");
//   progressMessage.text("100%");
// }