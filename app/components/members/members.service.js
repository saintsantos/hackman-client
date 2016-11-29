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

        function updateUser(user) {
            console.log(user);
            var xhrParams = {
                method: 'PUT',
                url: 'http://localhost:3000/api/user/' + user._id,
                params: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    github: user.github,
                    linkedin: user.linkedIn,
                    resume: user.resume
                }
            }
            return $http(xhrParams);
        }

        return {
            httpCall: httpCall,
            updateUser: updateUser,
        }
    })
