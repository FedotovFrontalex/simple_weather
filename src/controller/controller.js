import {storageService} from "../services/storageService/storageService.js";
import {getWeather} from "../helpers/getWeather.js";
import {mapService} from "../services/mapService/mapService.js";

export const controller = {
	inputCityHandler: async (city) => {
		const weather = await getWeather(city);
		if (weather.coordinates) {
			mapService.updateMap({
				lat: weather.coordinates.lat,
				long: weather.coordinates.lon
			})
		}
		storageService.update(city);
	}
}
