// The production URL and map center are not included here to keep them
// out of version control and out of public view. -->
var url = 'URL';
var mapCenter = { lat: 'lat', lng: 'lng'};

function initMap() {
  $.ajax({url: url, success: function(response) {
    // When the AJAX call to the server has responded...
    // Put a map in the UI.
    const map = new google.maps.Map(document.getElementById('map'), {
      center: mapCenter,
      zoom: 15
    });

    // Iterate through the data in the response body.
    // For each datapoint, display a marker on the map
    // When the mouse hovers over the marker, the species common name should
    //   be displayed
    response.forEach(function(observation) {

      var latLng = {
        lat: parseFloat(observation.latitude),
        lng: parseFloat(observation.longitude)
      };

      var contentString = '<div>Common Name: ' + observation.species_common_name + '</div>'
        + '<div>Scientific Name: ' + observation.species_scientific_name + '</div>'
        + '<div>Latitude: ' + observation.latitude + '</div>'
        + '<div>Longitude: ' + observation.longitude + '</div>';

      var infoWindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: observation.species_common_name
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    });
  }});
}
