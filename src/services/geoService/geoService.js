export const geoService = {
	getLocation: async () => {
		return fetch('https://get.geojs.io/v1/ip/geo.json')
			.then(async (res) => await res.json())
			.then((res) => ({
				lat: res.latitude,
				long: res.longitude
			}))
	}
}
