
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.850, lng: 18.390},
    zoom: 14
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
    }, function() {
        alert("Error: The Geolocation service failed.");
    });
  } else {
    alert("Browser doesn't support Geolocation")
  }
}
