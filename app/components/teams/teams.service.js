angular
    //Module export for dependencies
    .module('teams.service', [])
    //Service name for calls in other modules
    .factory('TeamService', function($http, $window, $q) {

        //Function definition here (Notice how there's no scope)
        //When adding this dependency to the different modules, as long as
        //the service is called in function($state, TeamService), you can call
        //any function using TeamService.<insertfunctionnamehere> ie
        //TeamService.httpCall();
        function httpCall() {
            var xhrParams = {
                method: 'GET',
                url: 'http://54.244.60.155:3000/api/user/hi',
            }

            return $http(xhrParams);

        }

        return {
            httpCall: httpCall,
        }
    })
