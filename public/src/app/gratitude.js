angular.module('gratitude', ['ngRoute', 'ngResource','jkuri.datepicker']).config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/journal', {
		templateUrl: 'fragments/journal.html',
		controller: 'JournalController'
	});

	$routeProvider.when('/journal-entries', {
		templateUrl: 'fragments/journal-entries.html',
		controller: 'JournalEntriesController'
	});

	$routeProvider.when('/login', {
		templateUrl: 'fragments/login.html',
		controller: 'LoginController'
	});

	$routeProvider.when('/select', {
		templateUrl: 'fragments/select.html',
		controller: 'SelectController'
	});

	$routeProvider.when('/share', {
		templateUrl: 'fragments/share.html',
		controller: 'ShareController'
	});

	$routeProvider.when('/why', {
		templateUrl: 'fragments/why.html',
		controller: 'WhyController'
	});

	$routeProvider.otherwise({
		templateUrl: 'fragments/welcome.html',
		controller: 'WelcomeController'
	});
}]);
