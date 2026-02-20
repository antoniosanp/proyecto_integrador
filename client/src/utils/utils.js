function obtenerUbicacion() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

export function useMap() {
    /* Dibujar el mapa en medellín */
    var map = L.map('map').setView([6.2442, -75.5812], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    var marker;
    obtenerUbicacion()
        .then(pos => {
            console.log("Lat:", pos.coords.latitude);
            console.log("Lon:", pos.coords.longitude);

            let lat = pos.coords.latitude;
            let lng = pos.coords.longitude;

            // Centrar mapa en ubicación actual
            map.setView([lat, lng], 16);

            // Crear marcador inicial
            marker = L.marker([lat, lng], { draggable: true }).addTo(map);


            getAddress(lat, lng);


            map.setView([pos.coords.latitude.pos.coords.longitude], 200);
            if (marker) {
                marker.setLatLng(pos.coords.latitud);
            } else {
                marker = L.marker(pos.coords.latitud, { draggable: true }).addTo(map);
            }
        })
        .catch(err => {
            console.error(err.message);
        });



    map.on('click', function (e) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;

        if (marker) {
            marker.setLatLng(e.latlng);
        } else {
            marker = L.marker(e.latlng, { draggable: true }).addTo(map);
        }

        console.log(lat, lng);
        console.log(getAddress(lat, lng))

        marker.on('dragend', function (e) {
            var position = marker.getLatLng();
            document.getElementById('lat').value = position.lat;
            document.getElementById('lng').value = position.lng;
        });
    });
}
function getAddress(lat, lng) {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('direction').textContent = data.display_name;
        });
}