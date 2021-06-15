var mymap = L.map('mapid').setView([7.011004,-73.103320], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
   /* id: 'mapbox/streets-v11',*/
    //tileSize: 512,
    //ext: 'png',
    //zoomOffset: -1,
   /* accessToken: 'your.mapbox.access.token'*/
}).addTo(mymap);
var marker = L.marker([7.011004,-73.103320]).addTo(mymap);
/*var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");*/
marker.bindPopup("<b>Vivero Valand!</b><br>Estamos Aquí").openPopup();

/*var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

*/
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

//mymap.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

//mymap.on('click', onMapClick);