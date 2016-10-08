angular
    //This is used for dependency calls. See teams.module.js to see the dependencies in action.
    .module('user.controller', [])
    //The exported name of the controller module, this is called in other modules and in html
    .controller('UserController', function($scope, $state, UserService) {
        console.log("Controller works");

        $scope.login = function() {
            console.log("HERE!");
            var name = 'hello';
            var password = '123456789';
            UserService.login(name, password).then(function(user) {
                console.log(user);
            })
            $state.go('teams');
        }

    })
