import {storageService} from "../services/storageService/storageService.js";
import {getWeather, getWeatherByCoords} from "../helpers/getWeather.js";
import {mapService} from "../services/mapService/mapService.js";
import {renderService} from "../services/renderService/renderService.js";
import {formService} from "../services/formService/formService.js";

export const controller = {
	initialize: async function(location) {
		mapService.updateMap(location);
		const weather = await getWeatherByCoords(location);
		renderService.renderWeather(weather);
		formService.initForm(this.inputCityHandler)
		renderService.renderHistory();
	},
	inputCityHandler: async function(city) {
		const weather = await getWeather(city);

		if (weather.coordinates) {
			mapService.updateMap({
				lat: weather.coordinates.lat,
				long: weather.coordinates.lon
			})
		}

		renderService.renderWeather(weather);
		storageService.update(weather.name);
		renderService.renderHistory();
	}
}
