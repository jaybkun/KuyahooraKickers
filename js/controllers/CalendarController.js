(function() {
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

