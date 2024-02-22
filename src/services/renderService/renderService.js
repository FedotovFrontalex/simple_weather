import {storageService} from "../storageService/storageService.js";
import {createHistoryItem} from "../../helpers/createHistoryItem.js";

export const renderService = {
	renderWeather: function(weather) {
		console.log('WEATHER: ', weather)
		const container = document.getElementById('weatherInfo');

		container.innerHTML = '';

		const iconEl = document.createElement('img');
		const descriptionEl = document.createElement('p');
		const tempRealEl = document.createElement('p');
		const tempFeel = document.createElement('p');

		iconEl.setAttribute('src', `https://openweathermap.org/img/wn/${weather.icon}@2x.png`);
		iconEl.classList.add('weatherIcon');

		descriptionEl.innerHTML = weather.description;

		tempRealEl.innerHTML = `Температура воздуха ${weather.temp}`;

		tempFeel.innerHTML = `Оцуцается, как ${weather.tempLike}`;

		container.appendChild(iconEl);
		container.appendChild(descriptionEl);
		container.appendChild(tempRealEl);
		container.appendChild(tempFeel);
	},
	renderHistory: () => {
			const historyEl = document.getElementById('history');
			const listEl = document.createElement('ul');
			const data = storageService.get();

			for (let i = 0; i < data.length; i++) {
				listEl.appendChild(createHistoryItem(data[i]));
			}

			historyEl.innerHTML = '';
			historyEl.appendChild(listEl);
	}
}
