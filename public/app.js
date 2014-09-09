
var sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
	templateUrl: 'dashboard.html',
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


sampleApp.controller('DashboardCtrl', function($scope) {
	
	$scope.message = 'This is Add new order screen';
	
});


sampleApp.controller('ShowOrdersController', function($scope) {

	$scope.message = 'This is Show orders screen';

});
