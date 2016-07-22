/**
 * Simple note music player
 */
angular.module('gratitude').controller('WelcomeController', ['$scope', '$location',
	function($scope, $location) {
		$scope.journal = function (){
      console.log('asdf');
      $location.path('/journal');
    };
	}
]);
