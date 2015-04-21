'use strict';

angular.module('frostyGlass.library', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/library', {
			templateUrl: 'library/library.html',
			controller: 'LibraryCtrl'
		});
	}])

	.controller('LibraryCtrl', [function() {

	}]);