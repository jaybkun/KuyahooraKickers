(function() {
    'use strict';

    var app = angular.module('kickers.directives.carousel', []);

    /**
     * @ngdoc directive
     */
    app.directive('kickerCarousel', function() {
        return {
            restrict: 'A',
            templateUrl: 'partials/carousel.html',
            compile : function(scope, element, attrs) {
                element.id = attrs.id;
                scope.id = attrs.id;
                scope.files = attrs.files;
            }
        };
    });

})();