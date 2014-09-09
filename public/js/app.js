//Define an angular module for our app
var sampleApp = angular.module('myApp', ['ngRoute']);
 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'dashboard.html',
        controller: 'DashboardController'
    }).
      when('/ShowOrders', {
        templateUrl: 'templates/show_orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
 
 
sampleApp.controller('DashboardController', function($scope) {
     
    $scope.message = 'This is Add new order screen';
     
});
 
 
sampleApp.controller('ShowOrdersController', function($scope) {
 
    $scope.message = 'This is Show orders screen';
 
});