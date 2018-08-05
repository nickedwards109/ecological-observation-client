// The production URL and map center are not included here to keep them
// out of version control and out of public view. -->
var url = <URL string>;
var mapCenter = { lat: <latitude number>, lng: <longitude number>};

function initMap() {
  $.ajax({url: url, success: function(response) {
    // We are in a callback function executed in response to the request to the
    // Google Maps JS API. There is a google.maps object available in the scope
    // of this callback, and we need to explicitly pass it into the scope of a
    // few other functions. This is facilitated by defining it as a variable
    // called mapsApiInstance.
    var mapsApiInstance = google.maps;

    // Put a map in the UI.
    var mapInUI = generateMap(mapsApiInstance, mapCenter);

    // For each observation in the response from the server, display a marker
    // that will open an informational window when clicked.
    response.forEach(function(observation) {

      var marker = generateMarker(mapsApiInstance, mapInUI, observation);

      var informationWindowContent = generateInformationWindowContent(observation);

      var infoWindow = generateInformationWindow(mapsApiInstance, informationWindowContent);

      addClickListenerOnMarker(mapInUI, marker, infoWindow);
    });
  }});
}

function generateMap(mapsApiInstance, mapCenter) {
  return new mapsApiInstance.Map(document.getElementById('map'), {
    center: mapCenter,
    zoom: 15
  });
}

function generateMarker(mapsApiInstance, mapInUI, observation) {
  var latLng = {
    lat: parseFloat(observation.latitude),
    lng: parseFloat(observation.longitude)
  };

  return new mapsApiInstance.Marker({
    position: latLng,
    map: mapInUI,
    title: observation.species_common_name
  });
}

function generateInformationWindowContent(observation) {
  return '<div>Common Name: ' + observation.species_common_name + '</div>'
    + '<div>Scientific Name: ' + observation.species_scientific_name + '</div>'
    + '<div>Latitude: ' + observation.latitude + '</div>'
    + '<div>Longitude: ' + observation.longitude + '</div>';
}

function generateInformationWindow(mapsApiInstance, informationWindowContent) {
  return new mapsApiInstance.InfoWindow({
    content: informationWindowContent
  });
}

function addClickListenerOnMarker(mapInUI, marker, infoWindow) {
  marker.addListener('click', function() {
    infoWindow.open(mapInUI, marker);
  });
}
