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

        function check() {
            var xhrParams = {
                method: 'POST',
                url: 'http://localhost:3000/api/user/check',
            }

            return $http(xhrParams);

        }

        function getAllTeams() {
            var xhrParams = {
                method: 'GET',
                url: 'http://localhost:3000/api/teams'
            }

            return $http(xhrParams);
        }

        function grabUser(username, email) {
            var xhrParams = {
                method: 'GET',
                url: 'http://localhost:3000/api/user/login',
                params: {
                    username: username,
                    email: email
                }
            }
        }

        function addTeammate(id, teamname) {
            var xhrParams = {
                method: 'POST',
                url: 'http://localhost:3000/api/teams/' + teamname + '/modify/' + id,
            }
        }

        function newTeam(team) {
            var xhrParams = {
                method: 'POST',
                url: 'http://localhost:3000/api/teams/' + team.teamname,
                params: {
                    created_by: team.created_by,
                    proj_desc: team.proj_desc,
                    'status': team.status,
                    'location': team.location
                }
            }

            return $http(xhrParams)
        }

        return {
            check: check,
            httpCall: httpCall,
            getAllTeams: getAllTeams,
            newTeam: newTeam
        }
    })
