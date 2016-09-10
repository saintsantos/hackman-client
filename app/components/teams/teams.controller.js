angular
    //This is used for dependency calls. See teams.module.js to see the dependencies in action.
    .module('teams.controller', [])
    //The exported name of the controller module, this is called in other modules and in html
    .controller('TeamsController', function($scope, $state) {
        //An example of a controller for an html file.
        //In angular, in order to make a function callable, use $scope to make the function as shown below.
        $scope.test = function() {
            //Actually define what the function is supposed to do here
            console.log("This is a function triggered in a controller");
        }
    });
