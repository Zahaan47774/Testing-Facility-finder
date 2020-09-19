let map;
var clicker = 0;
function myFunction() {
  var isFever = document.getElementById("defaultCheck1");
  if(isFever.checked){
  clicker += 2;
}
var isCough = document.getElementById("defaultCheck2");
  if(isCough.checked){
  clicker += 2;
}
var isShortnessOfBreath = document.getElementById("defaultCheck3");
  if(isShortnessOfBreath.checked){
  clicker += 2;
}
var isPersistentPain = document.getElementById("defaultCheck4");
  if(isPersistentPain.checked){
  clicker += 2;
}

  console.log(clicker);
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
  var marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 150.644 },
    map: map,
    title: 'Hello World!'
  });
}