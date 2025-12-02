/* 
This JQuery calculates the distance between the user's location
and the 7 wonders, which are expressed in decimal coordinates. 
This is done using the haversine formula.
*/

$(document).ready(function () {
  getLocation();
});

var latChina = 40.68;
var lonChina = 117.23;
var latPetra = 30.328611;
var lonPetra = 35.441944;
var latMachu = -13.163333;
var lonMachu = -72.545556;
var latItza = 20.683056;
var lonItza = -88.568611;
var latColosseum = 41.890278;
var lonColosseum = 12.492222;
var latTaj = 27.175;
var lonTaj = 78.041944;
var latChrist = -22.951944;
var lonChrist = -43.210556;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(calculateDistances, showError);
  }
}

// haversine formula

function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in kilometers
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = R * c; // Distance in km
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function calculateDistances(position) {
  var latCurrent = position.coords.latitude;
  var lonCurrent = position.coords.longitude;

  var distanceToChina;
  var distanceToPetra;
  var distaneToMachu;
  var distanceToItza;
  var distanceToColosseum;
  var distanceToTaj;
  var distanceToChrist;

  distanceToChina = calculateDistance(
    latChina,
    lonChina,
    latCurrent,
    lonCurrent
  );
  $("#china_distance").html(distanceToChina.toFixed(0) + " km");

  distanceToPetra = calculateDistance(
    latPetra,
    lonPetra,
    latCurrent,
    lonCurrent
  );
  $("#petra_distance").html(distanceToPetra.toFixed(0) + " km");

  distaneToMachu = calculateDistance(
    latMachu,
    lonMachu,
    latCurrent,
    lonCurrent
  );
  $("#machu_distance").html(distaneToMachu.toFixed(0) + " km");

  distanceToItza = calculateDistance(latItza, lonItza, latCurrent, lonCurrent);
  $("#itza_distance").html(distanceToItza.toFixed(0) + " km");

  distanceToColosseum = calculateDistance(
    latColosseum,
    lonColosseum,
    latCurrent,
    lonCurrent
  );
  $("#colosseum_distance").html(distanceToColosseum.toFixed(0) + " km");

  distanceToTaj = calculateDistance(latTaj, lonTaj, latCurrent, lonCurrent);
  $("#taj_distance").html(distanceToTaj.toFixed(0) + " km");

  distanceToChrist = calculateDistance(
    latChrist,
    latChrist,
    latCurrent,
    lonCurrent
  );
  $("#christ_distance").html(distanceToChrist.toFixed(0) + " km");
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      $(".distance_label").html("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      $(".distance_label").html("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      $(".distance_label").html("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      $(".distance_label").html("An unknown error occurred.");
      break;
  }
}
