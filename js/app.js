(function() {
    'use strict';

    var app = angular.module('kuyahoora.kickers', [
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
                controllerAs: 'home'
            })
            .state('events', {
                url: "/events",
                templateUrl: "partials/events.html"
            })
            .state('calendar', {
               url: "/calendar",
                templateUrl: "partials/calendar.html"
            });
    });
})();