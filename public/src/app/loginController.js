/**
 * Simple note music player
 */
angular.module('gratitude').controller('LoginController', ['$scope', '$location',
	function($scope, $location) {
		$scope.select = function (){
      $location.path('/select');
    };
	}
]);
