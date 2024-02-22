import './style.css'
import {geoService} from "./src/services/geoService/geoService.js";
import {controller} from "./src/controller/controller.js";

const init = async () => {
	const location = await geoService.getLocation();
	controller.initialize(location);
}

init();
