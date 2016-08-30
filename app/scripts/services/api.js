'use strict';

angular.module('swiggy2App')
    .service('API', function() {

        this.getAllLeaveRequests = function() {
            return [{
                "id": "EMP1",
                "name": "bibin",
                "requests": [{
                    "from": "8/4/16",
                    "to": "8/6/16",
                    "type": "CL",
                    "reason": "helath"
                }, {
                    "from": "8/4/16",
                    "to": "8/4/16",
                    "type": "SL",
                    "reason": "helath2"
                }]
            }, {
                "id": "EMP2",
                "name": "aibin",
                "requests": [{
                    "from": "8/4/16",
                    "to": "8/4/16",
                    "type": "CL",
                    "reason": "helath"
                }, {
                    "from": "8/4/16",
                    "to": "8/4/16",
                    "type": "SL",
                    "reason": "helath2"
                }]
            }]

        }

        this.getLeaves = function() {
            return [{
                "from": "8/4/16",
                "to": "8/4/16",
                "type": "CL",
                "reason": "helath"
            }, {
                "from": "8/4/16",
                "to": "8/4/16",
                "type": "SL",
                "reason": "helath2"
            }];
        }

        this.login = function(u, p) {
            if (isManger(u, p)) {
                return {
                    id: "1",
                    role: "manager",
                    name: "Manager"
                };
            } else if (isEmp(u, p)) {
                return {
                    id: "2",
                    role: "employee",
                    name: "Employee"
                };
            } else {
                return null;
            }
        }

        function isManger(u, p) {
            if (u == "m" && p == "m") {
                return true;
            } else {
                return false;
            }
        }

        function isEmp(u, p) {
            if (u == "e" && p == "e") {
                return true;
            } else {
                return false;
            }
        }
    });
