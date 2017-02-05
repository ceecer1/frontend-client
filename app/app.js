'use strict';

var serviceBase = 'http://localhost:8080/';
// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute'
]);

myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/', {
    controller: 'dashboardController',
    templateUrl: 'view/dashboard.html'
  });

  $routeProvider.otherwise({redirectTo: '/'});
}]).config(['$httpProvider', function ($httpProvider) {


}]);
