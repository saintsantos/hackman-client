angular
    //This is used for dependency calls. See teams.module.js to see the dependencies in action.
    .module('user.controller', ['auth.service'])
    //The exported name of the controller module, this is called in other modules and in html
    .controller('UserController', function($scope, $state, $window,UserService, authService) {

        /*if($window.localStorage.getItem('id_token')) {
			//UserService.login($window.localStorage.getItem('username'), $window.localStorage.getItem('email'));
            $state.go('teams')
        } else {
            $state.go('login');
        }*/

        var authenticate = this;
        authenticate.authService = authService;

        console.log("Controller works");
        $scope.termsAndConditions=function() {
            $state.go('t&c');
        }

        $scope.loggingIn = function() {
            authenticate.authService.login();
        }

        $scope.signUp = function() {
            console.log("Sign Up Here!");
            username = 'saintsantos';
            email = 'saintsantos1341@gmail.com'; //This will be grabbed from auth profile
            first_name = 'Edwin';
            last_name = 'Santos';
            role = 'admin';
            skills = 'coding';
            authenticate.authService.login(),then(function() {
                console.log("testing");
                //UserService.signup(username, email, first_name, last_name, role, skills);
            })
        }

    })
