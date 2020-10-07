<script src="script.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />
</head>
<body>
<div id="map"></div>
<script src="https://unpkg.com/es6-promise@4.2.4/dist/es6-promise.auto.min.js"></script>
<script src="https://unpkg.com/@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js"></script>
<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoiZGlkZGllIiwiYSI6ImNrZndkMWpncjBhanQycm84bTJubjJ2MTkifQ.7SP-31MWRRKXtHtAdj3fag';
var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
mapboxClient.geocoding
.forwardGeocode({
query: 'Ladefogedvej 9, 8200 aarhus, denmark',
autocomplete: false,
limit: 1
})
.send()
.then(function (response) {
if (
response &&
response.body &&
response.body.features &&
response.body.features.length
) {
var feature = response.body.features[0];
 
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: feature.center,
zoom: 10
});
new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
}
});
</script>