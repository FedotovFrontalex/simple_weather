export const getWeather = (city) => {
	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=0f86b04b7f68189ff2685c07a953cefa`)
		.then((res) => res.json())
		.then(res => {
			return {
				temp: res.main.temp,
				tempLike: res.main.feels_like,
				description: res.weather.description,
				icon: res.weather.icon,
				coordinates: res.coord
			}
		});
}
