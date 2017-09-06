document.addEventListener("DOMContentLoaded", function(e){
  
})

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var coords = new google.maps.LatLng(latitude, longitude); //Creates variable for map coordinates
      var mapOptions = {
        zoom: 15,  //Sets zoom level (0-21)
        center: coords, //zoom in on users location
        mapTypeControl: true, //allows you to select map type eg. map or satellite
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
        mapTypeId: google.maps.MapTypeId.ROADMAP //sets type of map Options:ROADMAP, SATELLITE, HYBRID, TERRIAN
      };
      var map = new google.maps.Map(document.getElementById("map"), mapOptions )
    })
  }
}