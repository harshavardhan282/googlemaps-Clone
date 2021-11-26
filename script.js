mapboxgl.accessToken ="pk.eyJ1IjoiaGFyc2hhLTEyMzQiLCJhIjoiY2t3ZWZ5YjdlMDQ0bjJubXByb3JnNDRlcSJ9.w5tAakupplI7s0imi4ok4g";

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