angular
    //Module export for dependencies
    .module('user.service', [])
    //Service name for calls in other modules
    .factory('UserService', function($http, $window, $q) {

        function login(username, email) {
            var xhrParams = {
                method: 'GET',
                url: 'http://localhost:3000/api/user/login',
                params: {
                    username: username,
                    email: email
                }
            }

            return $http(xhrParams);

        }

        function getUser() {
            var xhrParams = {
                method: 'GET',
                url: 'http://localhost:3000/api/user/'
            }
            return $http(xhrParams);
        }

        function signup(username, email, first_name, last_name, role, skills) {
            var xhrParams = {
                method: 'POST',
                url: 'http://localhost:3000/api/user/signup',
                params: {
                    username: username,
                    email: email,
                    first_name: first_name,
                    last_name: last_name,
                    role: role,
                    skills: skills
                }
            }

            return $http(xhrParams);

        }



        return {
            signup: signup,
            login: login,
            getUser: getUser
        }

    });
