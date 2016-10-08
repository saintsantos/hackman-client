angular
    //Module export for dependencies
    .module('user.service', [])
    //Service name for calls in other modules
    .factory('UserService', function($http, $window, $q) {

        function login(username, email) {
            var xhrParams = {
                method: 'GET',
                url: 'http://54.244.60.155:3000/api/user/login',
                params: {
                    username: username,
                    email: email
                }
            }

            return $http(xhrParams);

        }

        return {
            login: login,
        }

    });
