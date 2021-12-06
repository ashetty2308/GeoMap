var count = 0;

function generateMap(userLat, userLong){
 

}
function userLatLong(){
  count++;
  var latUser = document.getElementById("lat").value;
  var longUser = document.getElementById("long").value;

  var map = new L.map('map').setView([latUser, longUser], 12);

  // destroyMap(map);

  // map = L.map('map').setView([latUser, longUser], 12);

  L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=fZY5lvXJupgHWwlCqMFd', {
    attribution: '<a href="<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map) 


  generateMap(latUser, longUser);
}
function destroyMap(map){
  map.remove();
}

  /*
  const api_request = new XMLHttpRequest();
  api_request.open("GET", "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=7e3eac24249fda8fc39ac0f291163bb2")

  alert(latUser);

   registering : DONE 
    */
