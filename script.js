mapboxgl.accessToken ="pk.eyJ1IjoiaGFyc2hhLTEyMzQiLCJhIjoiY2w1NHo1ejV0MTJ6bjNkdDdrZnd1bTQ2aSJ9.EorqqpBo_rOqkbukv_oixQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })
  
  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }
  
  function errorLocation() {
    setupMap([-96, 37.8])
  }
  
  function setupMap(center) {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 15
    })
  
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
  
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    })


    // Add geolocate control to the map.
map.addControl(
  new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  
  trackUserLocation: true,

  showUserHeading: true
  }))
  
    map.addControl(directions, "top-left")
  }
