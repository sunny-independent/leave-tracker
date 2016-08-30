'use strict';

/**
 * @ngdoc function
 * @name swiggy2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swiggy2App
 */
angular.module('swiggy2App')
    .controller('EmployeeDashboardCtrl', function($scope, $location, API) {

        function load() {
            var user = localStorage.getItem("user");
            if (user != null) {
                $scope.myLeaves = API.getLeaves();
                $scope.leaveFormVisible = false;
                $scope.applyError = "";
                $scope.lapply = getFreshObj();
            } else {
                $location.path("/");
            }

        }

        function getFreshObj() {
            return {
                from: "",
                to: "",
                reason: "",
                type: ""
            };
        }

        function isValid(obj) {
            var valid = true;
            angular.forEach(obj, function(v, k) {
                if (v.length == 0) {
                    valid = false;
                }
            })
            return valid;
        }

        $scope.signOut = function() {
            localStorage.removeItem("user");
            $location.path("/");
        }

        $scope.newLeave = function() {
            $scope.leaveFormVisible = true;
        }

        $scope.apply = function() {
            if (isValid($scope.lapply)) {
                $scope.myLeaves.push($scope.lapply);
                $scope.lapply = getFreshObj();
                $scope.leaveFormVisible = false;
                $scope.applyError = "";
            } else {
                $scope.applyError = "Please complete all fields";
            }
        }

        $scope.cancel = function() {
            $scope.leaveFormVisible = false;
             $scope.applyError = "";
        }

        load();

    });
