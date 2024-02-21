import './style.css'
import {geoService} from "./src/services/geoService/geoService.js";
import {mapService} from "./src/services/mapService/mapService.js";

const init = async () => {
	const location = await geoService.getLocation();
	mapService.updateMap(location);
}

init();
