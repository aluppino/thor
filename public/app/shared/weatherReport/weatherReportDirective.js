thor.directive('weatherReport', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/shared/weatherReport/weatherReportView.html',
		replace: true,
		scope: {
			weatherDay: '=',
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat: '@'
		}
	};
});