(function() {
    'use strict';

    var app = angular.module('kuyahooraKickers', [
        'ngRoute',
        'ui.router', 'ui.bootstrap',
        'kickers.directives',
        'kickers.controllers'
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/home.html",
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            })
            .state('events', {
                url: "/events",
                templateUrl: 'partials/events.html',
                controller: 'EventsController',
                controllerAs: 'eventsCtrl'
            })
            .state('calendar', {
                url: "/calendar",
                templateUrl: "partials/calendar.html"
            });
    });
})();