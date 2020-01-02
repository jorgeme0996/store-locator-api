mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZ2VtZTA5OTYiLCJhIjoiY2s0dzZ5bXcxMm1pbDNtdDJkd3BudWt3NiJ9.oQE4sTtrhpZYafAHumPiFw';
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

navigator.geolocation.getCurrentPosition(showPosition, error, options);

function showPosition(position) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 12,
        center: [position.coords.longitude, position.coords.latitude]
    });
}

function error(err){
    console.log('Algo salio mal', err);
}
