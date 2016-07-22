/**
 * Simple note music player
 */
angular.module('gratitude').controller('SelectController', ['$scope', '$location',
	function($scope, $location) {
		$scope.why = function (){
      $location.path('/why');
    };
    $scope.share = function (){
      $location.path('/share');
    };
	$scope.journal = function(){
		$location.path('/journal');
	};
	}
]);
