angular
    //Module export for dependencies
    .module('user.service', [])
    //Service name for calls in other modules
    .factory('UserService', function($http, $window, $q, urlConstant) {

        function login(username, email) {
            var xhrParams = {
                method: 'GET',
                url: urlConstant.baseUrl + '/api/user/login',
                params: {
                    username: username,
                    email: email
                }
            }

            return $http(xhrParams);

        }

        function getUser(username) {
            var xhrParams = {
                method: 'GET',
                url: urlConstant.baseUrl + '/api/user/' + username
            }
            return $http(xhrParams);
        }

        function signup(username, email, first_name, last_name, role, skills) {
            var xhrParams = {
                method: 'POST',
                url: urlConstant.baseUrl + '/api/user/signup',
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

        function updateJwt(username, email) {
            var xhrParams = {
                method: 'POST',
                url: urlConstant.baseUrl + '/api/user/update',
                params: {
                    username: username,
                    email: email,
                }
            }

        }



        return {
            signup: signup,
            login: login,
            getUser: getUser
        }

    });
