import { useMap } from "../utils/utils.js";

export function Map() {
    return `
   <p id="direction"></p>
    <button id="calculate-position" class="bg-violet-50" type="button">calcular</button>
    <div class="border " id="map" style="height: 400px;"></div>
    `
}


window.addEventListener('click', (e) => {
    if (e.target.id == 'calculate-position') {
        const mapContainer = e.target.nextElementSibling
        console.log(mapContainer);
        useMap()
    }
})