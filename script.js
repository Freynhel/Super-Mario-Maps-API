
function insertKey() {
	const APIKEY = prompt("Insert a Google Maps APIKEY to load the map");
	
	const script = document.createElement('script');
	script.src = `https://maps.googleapis.com/maps/api/js?key=${APIKEY}&callback=initMap&v=weekly`;
	script.defer = true;

	document.body.appendChild(script);
}

function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		mapId: "5604ee2c7c4b55f5",
		center: { 
			lat: 34.66767774804736, 
			lng: 135.43076145097373
		},

		zoom: 18,
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});

	/* Name, Latitude, Longitude, Image URL, scaledSize: width, height */
	const markers = [
		[ "Yoshi\'s House", 34.66671371670297, 135.43096388576777, "yoshi_house.svg", 37, 30 ],
		[ "You Are Here", 34.66767112713121, 135.4297887322531, "pointer.svg", 30, 47.8 ],
		[ "Ghost House", 34.66832715150856, 135.43292762674864, "ghosthouse.svg", 40, 48 ],
		[ "Castle", 34.66775608022106, 135.43139547897843, "castle.svg", 40, 53 ],
		[ "Warp Pipe", 34.66739738878135, 135.43225049775214, "pipe.svg", 38, 42.5 ],
		[ "Star World", 34.667959023359266, 135.42866400953733, "star.svg", 38, 38 ],
		[ "Donut Plains", 34.66830355359945, 135.4320565322381, "hill_with_eyes.svg", 50, 60.7 ],
		[ "Donut Plains", 34.66829411443392, 135.43231361996433, "hill_with_eyes.svg", 50, 60.7 ],
		[ "Donut Plains", 34.6683781779677, 135.43217016043528, "hill_with_eyes.svg", 50, 60.7 ],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];
		const markerName = currMarker[0];
		const markerLatitude = currMarker[1];
		const markerLongitude = currMarker[2];
		const markerImgURL = currMarker[3];
		const markerWidth = currMarker[4];
		const markerHeight = currMarker[5];

		const marker = new google.maps.Marker({
			title: markerName,
			position: { 
				lat: markerLatitude, 
				lng: markerLongitude
			},
			icon: { 
				url: `./assets/${markerImgURL}`, 
				scaledSize: new google.maps.Size(markerWidth, markerHeight)
			},
			map,
			animation: google.maps.Animation.DROP
		});

		const infowindow = new google.maps.InfoWindow({
			content: markerName,
			ariaLabel: markerName,
		});

		marker.addListener("click", () => {
			infowindow.open({ anchor: marker, map });
		});
	}
}

insertKey();
window.initMap = initMap;