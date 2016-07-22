/**
 * Simple note music player
 */
angular.module('gratitude').controller('WelcomeController', ['$scope', '$location', '$timeout',
	function($scope, $location, $timeout) {
		// $scope.select = function (){
    //   $location.path('/select');
    // };
    // $scope.login = function (){
    //   $location.path('/login');
    // };
		// window.setTimeout(function (){
		// 	console.log('logging in...');
		// 	$location.path('#/login');
		// }, 7000);

		$timeout(function(){
		  // logged_in = true;
		  $location.path("/login");
		},7000);
	}
]);
