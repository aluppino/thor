thor.service('weatherService', ['$http', function($http) {
	this.getWeather = function(city, days) {
		var req = {
			method: 'POST',
			url: 'http://localhost:3000/weather',
			headers: {
				'Content-Type': 'application/json'
			},
			data: {
				q: city,
				cnt: days
			}
		};

		return $http(req);
	};
}]);