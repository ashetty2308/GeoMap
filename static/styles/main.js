var count = 0;
var clearClicked = false;
var map = new L.map('map').setView([0, 0], 14);
var marker = new L.map('marker').setView([0,0]);


function userLatLong(){

  count++;

  var userCity = document.getElementById("userCity").value;
  let url = "http://api.openweathermap.org/geo/1.0/direct?q="+userCity+"&limit=5&appid=7e3eac24249fda8fc39ac0f291163bb2";
  let url_2 = " https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+userCity+"&origin=*";
  fetch(url).then(function (response) {
     return response.json();    
  }).then(function (obj){

    city_lat= obj[0]["lat"];
    city_long = obj[0]["lon"];

    if(count%2==1){
      map = new L.map('map').setView([city_lat, city_long], 14);
      marker = L.marker([city_lat, city_long], {title:userCity, fillOpacity: 0.5}).addTo(map);
      marker.bindPopup(userCity).openPopup();

      
      L.circle([city_lat, city_long], {
        color: 'yellow',
        fillColor: 'green',
        fillOpacity: 0.5,
        radius: 500
      }).addTo(map);

    
      L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=fZY5lvXJupgHWwlCqMFd', {
      attribution: '<a href="<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      }).addTo(map) 
    }
    else{
      destroyMap(map);
    }
  })
  fetch(url_2).then(function (response) {
    return response.json();    
 }).then(function (obj_2){

  var query = obj_2["query"];
  console.log(query);
  //snippet = query{"search"}[0]


 })


}

function destroyMap(map){
  map.remove();
  userLatLong();
}
