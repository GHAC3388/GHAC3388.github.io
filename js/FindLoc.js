  var x = document.getElementById("demo");

  function getLocation() {
    x.innerHTML = 'getting location';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;

		var coords=position.coords.latitude+','+position.coords.longitude;
    $.ajax({

      url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + coords + "&key=AIzaSyAvBQ1Q9FjYfxdWJF6KPmO822RMMbY2w2o",
      type: "GET",
      success: function(data) {
        console.log('api geocode response', data);
      }
    });
  }

  var map, infoWindow;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 12
    });
    infoWindow = new google.maps.InfoWindow();

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log('position is', position);
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);

        infoWindow.setContent('Location found.');

        infoWindow.open(map);
        map.setCenter(pos);

      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

