function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 45.523, lng: -122.676},
    zoom: 8,
    mapTypeId:google.maps.MapTypeId.TERRAIN
  });

  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
}


$(document).ready (function(){
  initMap();
});


// https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
