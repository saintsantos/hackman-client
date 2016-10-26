angular
    //Module export for dependencies
    .module('user.service', [])
    //Service name for calls in other modules
    .factory('UserService', function($http, $window, $q) {

        function login(username, password) {
            var xhrParams = {
                method: 'GET',
                url: 'http://54.244.170.44:3000/api/user/login',
                params: {
                    username: username,
                    password: password
                }
            }

            return $http(xhrParams);

        }

        function register(username, email, password) {
            var xhrParams = {
                method: 'POST',
                url: 'http://54.244.170.44:3000/api/user/register',
                params: {
                    username: username,
                    email: email,
                    password: password
                }
            }
            return $http(xhrParams);
        }

        return {
            login: login,
            register: register,
        }


    });
