angular.module('gratitude', ['ngRoute', 'ngResource']).config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/journal', {
		templateUrl: 'fragments/journal.html',
		controller: 'JournalController'
	});

	$routeProvider.otherwise({
		templateUrl: 'fragments/welcome.html'
	});
}]);
