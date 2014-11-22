(function() {
    'use strict';

    var app = angular.module("kickers.controllers.EventsController", []);

    /**
     * @ngdoc controller
     */
    app.controller("EventsController", ['$scope', function($scope) {

        //console.log("Events Controller Loaded");

        $scope.events = [
            {
                title: 'Beer and Chili',
                date:'February',
                timeOfYear: 'Winter',
                distance:'5k/10k',
                location:'Newport, NY',
                description: "The Beer and Chili is an annual run starting in Newport where, naturally, beer and chili are available at the end.                The 5k and 10k courses go through the village of Newport with a challenging hill as part of the 10k course.All proceeds from the race go to local food pantries and other charitable organizations."
            },
            {
                title: 'Fireman\'s Field Days',
                date:'July',
                timeOfYear: 'Summer',
                distance:'5k/10k',
                location:'Newport, NY',
                description: "The Newport Fireman's Field Days Run"
            },
            {
                title: 'Boilermaker',
                date:'July',
                timeOfYear: 'Summer',
                distance:'15k',
                location:'Newport, NY',
                website: 'http://www.boilermaker.com/',
                description: "The Boilermaker"
            }
        ];

        $scope.setCurrentEvent = function(idx) {
            var currentIdx = $scope.events.indexOf($scope.currentEvent);

            if (idx == currentIdx) {
                $scope.currentEvent = null;
            } else {
                $scope.currentEvent = $scope.events[idx];
            }
        };

    }]);

})();
