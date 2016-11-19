angular
    //Module export for dependencies
    .module('members.service', [])
    //Service name for calls in other modules
    .factory('MemberService', function($http, $window, $q) {
        function httpCall() {
            var xhrParams = {
                method: 'GET',
                url: 'http://54.244.170.44:3000/api/user/hi'
            }

            return $http(xhrParams);
        }

        return {
            httpCall: httpCall,
        }
    })
