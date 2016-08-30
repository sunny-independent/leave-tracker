'use strict';

/**
 * @ngdoc overview
 * @name swiggy2App
 * @description
 * # swiggy2App
 *
 * Main module of the application.
 */
angular
    .module('swiggy2App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/manager', {
                templateUrl: 'views/managerdashboard.html',
                controller: 'ManagerDashboardCtrl',
                controllerAs: 'mng'
            })
            .when('/employee', {
                templateUrl: 'views/employeedashboard.html',
                controller: 'EmployeeDashboardCtrl',
                controllerAs: 'emp'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
