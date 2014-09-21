
var myApp = angular.module('myApp', ['ngRoute', 'angular-loading-bar', 'ngAnimate']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
	templateUrl: '/partial/dashboard.html',
	controller: 'DashboardCtrl'
      }).
      when('/students', {
	templateUrl: '/partial/students.html',
	controller: 'StudentsController'
      }).
      when('/student', {
	templateUrl: '/partial/student.html',
	controller: 'StudentController'
      }).      
      otherwise({
	redirectTo: '/dashboard'
      });
}]);


myApp.controller('DashboardCtrl', function($scope) {
	
	$scope.message = 'This is Add new order screen';
	
});


myApp.controller('StudentsController', function($scope, $http) {

	$scope.students = [];

	$http.get('/api/students')
		.success(function(data) {
			$scope.students = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});	

	$scope.oigabby = function()
	{
		alert("oi gabby!!!");
	}

});

myApp.controller('StudentController', function($scope, $http) {

	$scope.student = {};

	$scope.save = function()
	{
		$http.post('/api/students', $scope.student)
			.success(function(data) {
				alert('Salvo com sucesso!');
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

});
