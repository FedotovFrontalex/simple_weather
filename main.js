import './style.css'
import {geoService} from "./src/services/geoService/geoService.js";
import {mapService} from "./src/services/mapService/mapService.js";
import {formService} from "./src/services/formService/formService.js";
import {controller} from "./src/controller/controller.js";

const init = async () => {
	const location = await geoService.getLocation();
	mapService.updateMap(location);
	formService.initForm(controller.inputCityHandler)
}

init();
