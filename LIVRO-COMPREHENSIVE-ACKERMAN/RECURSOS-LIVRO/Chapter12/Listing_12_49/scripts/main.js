function getPosition() {
  function successHandler(position) {
    document.getElementById('latitude').value = position.coords.latitude;
    document.getElementById('longitude').value = position.coords.longitude;
    document.getElementById('altitude').value = position.coords.altitude;
    document.getElementById('accuracy').value = position.coords.accuracy;
    document.getElementById('altitudeAccuracy').value =  
      position.coords.altitudeAccuracy;
    document.getElementById('heading').value = position.coords.heading;
    document.getElementById('speed').value = position.coords.speed;
    document.getElementById('timestamp').value = position.timestamp;
  }
  function errorHandler(error) {
    // User refuses position determination.
  }
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }
}
