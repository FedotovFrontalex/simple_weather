export const getWeather = (city) => {
	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=0f86b04b7f68189ff2685c07a953cefa`)
		.then((res) => res.json())
		.then(res => {
			return {
				name: res.name,
				temp: res.main.temp,
				tempLike: res.main.feels_like,
				description: res.weather[0].description,
				icon: res.weather[0].icon,
				coordinates: res.coord
			}
		})
		.catch((e) => {
			alert('Не удалось найти город')
		});
}

export const getWeatherByCoords = ({lat, long}) => {
	return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=ru&appid=0f86b04b7f68189ff2685c07a953cefa`)
		.then((res) => res.json())
		.then(res => {
			return {
				name: res.name,
				temp: res.main.temp,
				tempLike: res.main.feels_like,
				description: res.weather[0].description,
				icon: res.weather[0].icon,
				coordinates: res.coord
			}
		})
		.catch((e) => {
			alert('Не удалось найти город')
		});
}
