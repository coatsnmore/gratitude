/**
 * Simple note music player
 */
angular.module('gratitude').controller('JournalController', ['$scope','gratitudeResource',
	function($scope, gratitudeResource ) {
		// $scope.username = "coatsn";
		$scope.journal = {};
		// $scope.allGratitudes = [];
		$scope.journal.gratitude1 = '';
		$scope.journal.gratitude2 = '';
		$scope.journal.gratitude3 = '';
		$scope.journal.date = '2016-07-22';
		// $scope.date = Date.now();

		// $scope.getAllGratitudes = function (){
		// 	gratitudeResource.getAllGratitudes().$promise.then(function (data) {
		// 			allGratitudes = data;
		// 	}, function errorCallBack(error) {
		// 	//  handleInvalidAddressCall();
		// 		console.log('error: ' + error);
		// 	});
		// }

		$scope.journal = function(){
			console.log($scope.journal.gratitude1);
			console.log($scope.journal.date)
		};

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
