/**
 * Simple note music player
 */
angular.module('gratitude').controller('ShareController', ['$scope', '$location',
	function($scope, $location) {
		// $scope.select = function (){
    //   $location.path('/select');
    // };
		$scope.recName = null;
		$scope.message = null;

		$scope.share = function (){
			console.log('Username of Recipient: ' + recName);
			console.log('Message' + message);
		};
	}
]);
