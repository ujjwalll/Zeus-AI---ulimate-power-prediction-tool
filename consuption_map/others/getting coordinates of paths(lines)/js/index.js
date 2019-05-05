//var myPolygon;
function initialize() {
  // Map Center
  var myLatLng = new google.maps.LatLng(28.54673,77.2734);
  // General Options
  var mapOptions = {
    zoom: 17,
    center: myLatLng,
    mapTypeId: 'roadmap'    //    'roadmap'      'satellite' 
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
  // Polygon Coordinates
  var triangleCoords = [
    new google.maps.LatLng(28.54712,77.27232),
    new google.maps.LatLng(28.54666,77.2729),
    //new google.maps.LatLng(28.544925, 77.271100)
  ];
  // Styling & Controls
  myPolygon = new google.maps.Polyline({
    path: triangleCoords,
    draggable: true, // turn off if it gets annoying
    editable: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1,
    strokeWeight: 2,
    //fillColor: '#FF0000',
    //fillOpacity: 0.35
  });

  myPolygon.setMap(map);
  //google.maps.event.addListener(myPolygon, "dragend", getPolygonCoords);
  google.maps.event.addListener(myPolygon.getPath(), "insert_at", getPolygonCoords);
  //google.maps.event.addListener(myPolygon.getPath(), "remove_at", getPolygonCoords);
  google.maps.event.addListener(myPolygon.getPath(), "set_at", getPolygonCoords);
}

//Display Coordinates below map
function getPolygonCoords() {
  var len = myPolygon.getPath().getLength();
  var htmlStr = "";
  for (var i = 0; i < len; i++) {
    htmlStr += "[" + myPolygon.getPath().getAt(i).toUrlValue(5) + "],"+"\n";
    //Use this one instead if you want to get rid of the wrap > new google.maps.LatLng(),
    //htmlStr += "" + myPolygon.getPath().getAt(i).toUrlValue(5);
  }
  document.getElementById('info').innerHTML = htmlStr;
}
function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}