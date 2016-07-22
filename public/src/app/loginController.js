/**
 * Simple note music player
 */
angular.module('gratitude').controller('LoginController', ['$scope', '$location',
	function($scope, $location) {
		// $scope.select = function (){
    //   $location.path('/select');
    // };
		$scope.userName = null;
		$scope.password = null;

		$scope.login = function (){
			console.log('un: ' + userName);
			console.log('pw: ' + password);
		};
	}
]);
