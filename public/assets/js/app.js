
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
	templateUrl: '/partial/dashboard.html',
	controller: 'DashboardCtrl'
      }).
      when('/ShowOrders', {
	templateUrl: 'show_orders.html',
	controller: 'ShowOrdersController'
      }).
      otherwise({
	redirectTo: '/dashboard'
      });
}]);


myApp.controller('DashboardCtrl', function($scope) {
	
	$scope.message = 'This is Add new order screen';
	
});


myApp.controller('ShowOrdersController', function($scope) {

	$scope.message = 'This is Show orders screen';

});
