thor.config(['$routeProvider', function($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'app/components/home/homeView.html',
		controller: 'homeController'
	})

	.when('/forecast', {
		templateUrl: 'app/components/forecast/forecastView.html',
		controller: 'forecastController'
	})

	.when('/forecast/:days', {
		templateUrl: 'app/components/forecast/forecastView.html',
		controller: 'forecastController'
	})

}]);