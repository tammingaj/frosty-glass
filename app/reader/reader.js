'use strict';

angular.module('frostyGlass.reader', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/reader', {
			templateUrl: 'reader/reader.html',
			controller: 'ReaderCtrl'
		});
	}])

	.controller('ReaderCtrl', [function() {

	}]);