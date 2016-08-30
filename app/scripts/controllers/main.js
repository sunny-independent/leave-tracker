'use strict';

/**
 * @ngdoc function
 * @name swiggy2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swiggy2App
 */
angular.module('swiggy2App')
    .controller('MainCtrl', function($scope, $location, API) {

        function load(){
             $scope.error =  "";
        }

        $scope.login = function() {
            $scope.error =  "";
            var user = API.login($scope.userName, $scope.password);
            if (user == null) {
                $scope.error = "Please provide valid credentials";
            } else if (user.role == "manager") {
                localStorage.setItem("user", JSON.stringify(user));
                $location.path("/manager");
            } else if (user.role == "employee") {
                localStorage.setItem("user", JSON.stringify(user));
                $location.path("/employee");
            }
        }

        load();

    });
