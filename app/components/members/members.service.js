angular
    //Module export for dependencies
    .module('members.service', [])
    //Service name for calls in other modules
    .factory('MemberService', function($http, $window, $q, urlConstant) {
        function httpCall() {
            var xhrParams = {
                method: 'GET',
                url: urlConstant.baseUrl + '/api/user/hi'
            }

            return $http(xhrParams);
        }

        function updateUser(user) {
            console.log(user);
            var xhrParams = {
                method: 'PUT',
                url: urlConstant.baseUrl + '/api/user/' + user._id,
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
