(function() {
    'use strict';

    var app = angular.module('kickers.directives.page-fragments', []);

    /**
     * @ngdoc directive
     */
    app.directive('kickerHeader', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/header.html'
        };
    });

    /**
     * @ngdoc directive
     */
    app.directive('kickerFooter', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/footer.html'
        };
    });

})();