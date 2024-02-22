export const mapService = {
	mapContainer: null,
	updateMap: function (location) {
		const map = document.getElementById('map');
		if (this.mapContainer) {
			this.mapContainer.remove();
		}
		if (DG) {
			DG.then((arg) => {
				this.mapContainer = DG.map('map', {
					center: [location.lat, location.long],
					zoom: 13,
					dragging : false,
					touchZoom: false,
					scrollWheelZoom: false,
					doubleClickZoom: false,
					boxZoom: false,
					geoclicker: false,
					zoomControl: false,
					fullscreenControl: false
				})
			})
		}
	}
}
