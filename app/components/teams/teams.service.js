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
            method: 'POST',
            url: 'http://url.com',
            params: {
                name: 'String',
                date: 'String'
            }
        };
    });
