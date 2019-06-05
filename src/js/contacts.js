import 'bootstrap';

function initMap() {
  var uluru = {
      lat: 48.637355,
      lng: 24.575067
  };
  var map = new google.maps.Map(document.getElementById('map'),
   {
      zoom: 17,
      center: uluru,
      mapTypeId: 'satellite',
      heading: 90,
      tilt: 45
  
  });
  var marker = new google.maps.Marker({
      position: uluru,
      map: map
  });
};
global.initMap = initMap;

window.initMap = initMap;

