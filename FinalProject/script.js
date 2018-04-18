(function(window, goog) {

    //map options

    var options = {
        center: {

            lat: 43.85,
            lng: -79.43
            // lat: 37.79135,
            // lng: -133.435883
        },
        zoom: 10,
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE

    },

    
    element = document.getElementById('map-canvas'),
    //map

    map = new google.maps.Map(element, options);

}(window, google));