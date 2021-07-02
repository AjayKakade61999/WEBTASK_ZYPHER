var app = angular.module('simpleApp', [])
app.controller('simpleController', function ($scope) {
	$scope.collection = [
		{ client: 1, agent: 'Nandha', company: 'BooksApp',order:1,paid:250,pending:280 },
		{ client: 2, agent: 'Ashley', company: 'NotarizedDocs',order:13,paid:150,pending:180 },
		{ client: 4, agent: 'Rajal', company: 'Conneqtly',order:14,paid:500,pending:580 },
		{ client: 5, agent: 'Ajay', company: 'Student',order:14,paid:0,pending:0 }


	
	]
	$scope.addEntry = function () {
		$scope.collection.push($scope.newData)
        $scope.newData = client
		
		
	}
})
