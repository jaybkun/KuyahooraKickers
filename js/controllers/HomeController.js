(function() {
    'use strict';

    var app = angular.module('kickers.controllers.HomeController', []);

    /**
     * Controls the home page for the site.
     * @ngdoc controller
     */
    app.controller('HomeController', ['$scope', function($scope) {
        $scope.nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    }]);

})();
