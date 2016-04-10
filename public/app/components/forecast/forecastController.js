thor.controller('forecastController', ['$scope', '$http', '$routeParams', '$log', 'cityService', function($scope, $http, $routeParams, $log, cityService) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || '5';

	var req = {
		method: 'POST',
		url: 'http://localhost:3000/weather',
		headers: {
			'Content-Type': 'application/json'
		},
		data: {
			q: $scope.city,
			cnt: $scope.days
		}
	};

	$scope.loading = true;
	$http(req).then(function(data){
		$scope.loading = false;
		$scope.weatherResult = data.data;
	}, function(){
		$log.error('There was an error.');
	});

	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	};

	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	};

}]);