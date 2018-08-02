// The production URL is not included here to keep it out of version control and
// out of public view. -->
var url = 'URL';
var mapCenter = { lat: 43.712629, lng: -72.261310 };

function initMap() {
  $.ajax({url: url, success: function(response) {
    // When the AJAX call to the server has responded...
    // Put a map in the UI
    const map = new google.maps.Map(document.getElementById('map'), {
      center: mapCenter,
      zoom: 15
    });

    // Iterate through the data in the response body
    // For each datapoint, display a marker on the map
    // When the mouse hovers over the marker, the species common name should
    //   be displayed
    response.forEach(function(observation) {
      var latLng = {
        lat: parseFloat(observation.latitude),
        lng: parseFloat(observation.longitude)
      };
      console.log(observation.species_common_name)
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: observation.species_common_name
      });
    });
  }});
}
