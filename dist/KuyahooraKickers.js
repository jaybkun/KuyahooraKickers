(function() {
    'use strict';

    var app = angular.module('kuyahooraKickers', [
        'ngRoute',
        'ui.router', 'ui.bootstrap', 'ui.calendar',
        'kickers.directives',
        'kickers.controllers'
    ]);

    app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/home.html"
            })
            .state('events', {
                url: "/events",
                templateUrl: 'partials/events.html'
            })
            .state('calendar', {
                url: "/calendar",
                templateUrl: "partials/calendar.html"
            });
    }]);
})();;(function() {
    'use strict';

    var app = angular.module('kickers.controllers.CalendarController', []);

    app.controller('CalendarController', ['$scope', function($scope) {

        $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/ltn67b8qebqjmefe2jacanhnoo@group.calendar.google.com/public/basic",
            className: 'gcal-event',
            currentTimezone: 'America/New_York',
            googleCalendarApiKey: "AIzaSyBeIrsvuNpmce90044fEu_QEtzhdWzcbzs",
            googleCalendarId: "ltn67b8qebqjmefe2jacanhnoo@group.calendar.google.com"

        };

        $scope.eventSources = [$scope.eventSource];

        $scope.uiConfig = {
            calendar:{
                height: 450,
                editable: true,
                header:{
                    left: 'title',
                    center: '',
                    right: 'today prev,next'
                },
                dayClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };
    }]);


})();

;(function() {
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
;(function() {
    'use strict';

    var app = angular.module('kickers.controllers.HomeController', []);

    /**
     * Controls the home page for the site.
     * @ngdoc controller
     */
    app.controller('HomeController', ['$scope', function($scope) {
        //console.log("Home Controller Loaded");


    }]);

})();
;(function() {
    'use strict';

    angular.module('kickers.controllers', [
        'kickers.controllers.HomeController',
        'kickers.controllers.EventsController',
        'kickers.controllers.CalendarController'
    ]);

})();
;(function() {
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

})();;(function() {
    'use strict';

    angular.module('kickers.directives', [
       'kickers.directives.page-fragments',
       'kickers.directives.carousel'
    ]);

})();;(function() {
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