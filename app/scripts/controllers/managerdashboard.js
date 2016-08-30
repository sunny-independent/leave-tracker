'use strict';

/**
 * @ngdoc function
 * @name swiggy2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swiggy2App
 */
angular.module('swiggy2App')
    .controller('ManagerDashboardCtrl', function($scope, $location, API) {

        function load() {
            var user = localStorage.getItem("user");
            if (user != null) {
                $scope.data = API.getAllLeaveRequests();
                console.log($scope.data);
            } else {
                $location.path("/");
            }

        }

        $scope.signOut = function() {
            localStorage.removeItem("user");
            $location.path("/");
        }

        $scope.approve = function() {

        }

        $scope.reject = function() {

        }

        load();

    });
