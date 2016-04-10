thor.controller('forecastController', ['$scope', '$routeParams', '$log', 'cityService', 'weatherService', function($scope, $routeParams, $log, cityService, weatherService) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || '5';

	$scope.loading = true;
	$scope.error = false;
	weatherService.getWeather($scope.city, $scope.days).then(function(data) {
		$scope.loading = false;
		$scope.weatherResult = data.data;
	}, function() {
		$scope.loading = false;
		$scope.error = true;
		$log.error('There was an error.');
	});

	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	};

	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	};

}]);