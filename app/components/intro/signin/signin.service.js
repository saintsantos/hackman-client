angular
    //Module export for dependencies
    .module('user.service', [])
    //Service name for calls in other modules
    .factory('UserService', function($http, $window, $q) {

        function :Login() {
            var xhrParams = {
                method: 'GET',
                url: 'http://54.244.60.155:3000/',
                params: {
                    name: 'String',
                    date: 'String'
                }
            }

            return $http(xhrParams);

        }

        return {
            httpCall: httpCall,
        }

    });
