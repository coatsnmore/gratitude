/**
 * Simple note music player
 */
angular.module('gratitude').controller('JournalController', ['$scope','gratitudeResource',
	function($scope, gratitudeResource ) {
		$scope.username = "coatsn";
		$scope.allGratitudes = [];

		$scope.getAllGratitudes = function (){
			gratitudeResource.getAllGratitudes().$promise.then(function (data) {
					allGratitudes = data;
			}, function errorCallBack(error) {
			//  handleInvalidAddressCall();
				console.log('error: ' + error);
			});
		}
	}
]);
