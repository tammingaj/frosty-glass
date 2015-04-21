'use strict';

angular.module('frostyGlass', [
  'ngRoute',
  'frostyGlass.reader',
  'frostyGlass.library'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/reader'});
}]);
