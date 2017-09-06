
function initMap() {
  if (navigator.geolocation) {
    infoWindow = new google.maps.InfoWindow;
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
      pos = {
        lat: latitude,
        lng: longitude
      };
      infoWindow.setPosition(pos)
      infoWindow.setContent('You are here!');
      infoWindow.open(map);
      map.setCenter(pos);

      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
         if (xhr.status === 200) {
           console.log(xhr.responseText);
         }
     }
     xhr.open("POST", "https://rolofson.me/api/classLocations");
     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhr.send("lat="+latitude+"&lng="+longitude)
    //  xhr.send({"lat": latitude, "lng": longitude})
    })
  }
}


