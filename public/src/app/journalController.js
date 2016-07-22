/**
 * Simple note music player
 */
angular.module('gratitude').controller('JournalController', ['$scope','gratitudeResource',
	function($scope, gratitudeResource ) {
		$scope.username = "coatsn";

		$scope.getAllGratitudes = function (){
			gratitudeResource.getAllGratitudes().$promise.then(function (data) {
			//  handleAddressValidate(addressResponse);
				console.log('data: ' + data);
			}, function errorCallBack(error) {
			//  handleInvalidAddressCall();
				console.log('error: ' + error);
			});
		}
	}
]);
