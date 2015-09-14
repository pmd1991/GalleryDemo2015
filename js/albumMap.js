var map;    // declares a global map variable

function initializeMap(locations) {

    var mapOptions = {
        disableDefaultUI: true
    };

    // This next line makes `map` a new Google Map JavaScript Object and attaches it to
    // <div id="map">, which is appended as part of an exercise late in the course.
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    console.log("found map = " + map);

    /*
     createMapMarker(placeData) reads Google Places search results to create map pins.
     placeData is the object returned from search results containing information
     about a single location.
     */
    function createMapMarker(placeData, id) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.latlong[0];  // latitude from the place service
        var lon = placeData.latlong[1];  // longitude from the place service
        var name = placeData.name;   // name of the place from the place service
        var bounds = window.mapBounds;            // current boundaries of the map window

        console.log("creating map marker at" + lat + lon + "bounds = " + bounds);


        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            title: name,
            position: { lat: lat, lng: lon }
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        google.maps.event.addListener(marker, 'click', function () {
            location.href = "index.html#/gallery/" + id;
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
     pinPoster(locations) takes in the array of locations created by locationFinder()
     and fires off Google place searches for each location
     */
    function pinPoster(locations) {

        console.log("pin posting");

        // Iterates through the array of locations, creates a search object for each location
        for (var i = 0; i < locations.length; i++) {

            createMapMarker(locations[i], i);

            console.log("searching");
        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings
    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

    console.log("Finished init");
}