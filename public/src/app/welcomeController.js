/**
 * Simple note music player
 */
angular.module('gratitude').controller('WelcomeController', ['$scope', '$location',
	function($scope, $location) {
		$scope.select = function (){
      $location.path('/select');
    };
    $scope.login = function (){
      $location.path('/login');
    };
	}
]);
