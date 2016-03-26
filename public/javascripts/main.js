angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope','$http', function($scope, $http){
		
		// $scope.createApplicant = function(){
		// 	$http.post("api/applicants", $scope.newApplicant)
		// 		.then(function(returnData){
		// 		$scope.applicants = $scope.applicants || []
		// 		$scope.applicants.push(returnData.data)
		// 		$scope.newApplicant = {}
		// 	})
		// }




	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', "$http", function($scope, $http){
	
		
		$scope.createApplicant = function(){
			$http.post("api/applicants", $scope.newApplicant)
				.then(function(returnData){
				$scope.applicants = $scope.applicants || []
				$scope.applicants.push(returnData.data)
				$scope.newApplicant = {}
			})
		}



	}]);
