(function() {
    'use strict';

    var app = angular.module('kuyahooraKickers', [
        'ngRoute',
        'ui.router', 'ui.bootstrap', 'ui.calendar',
        'kickers.directives',
        'kickers.controllers'
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {
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
    });
})();