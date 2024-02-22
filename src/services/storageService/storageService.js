import {isExistingValue} from "../../helpers/isExistingValue.js";

const WEATHER_KEY = 'history';

export const storageService = {
	get: function () {
		const jsonData = localStorage.getItem(WEATHER_KEY);
		if (jsonData) {
			return JSON.parse(jsonData);
		}
		return [];
	},
	update: function (city) {
		const data = this.get();

		if (isExistingValue(data, city)) {
			const idx = data.findIndex((value) => value === city);
			this.set([city, ...data.slice(0, idx), ...data.slice(idx+1)])
			return;
		}

		if (data.length === 10) {
			this.set([city, ...data.slice(0, 9)]);
		} else {
			this.set([city, ...data]);
		}
	},
	set: function (data) {
		if (typeof data !== 'string') {
			localStorage.setItem(WEATHER_KEY, JSON.stringify(data));
		} else {
			localStorage.setItem(WEATHER_KEY, data);
		}
	},
}
