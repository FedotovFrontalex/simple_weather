import './style.css'
import {geoService} from "./src/services/geoService/geoService.js";
import {mapService} from "./src/services/mapService/mapService.js";
import {formService} from "./src/services/formService/formService.js";
import {controller} from "./src/controller/controller.js";
import {getWeatherByCoords} from "./src/helpers/getWeather.js";
import {renderService} from "./src/services/renderService/renderService.js";

const init = async () => {
	const location = await geoService.getLocation();
	controller.initialize(location);
}

init();
