 angular
    .module('members.controller',[])
    .controller('membersController', function($scope, $window, MemberService) {

        MemberService.httpCall().then(function(hi) {
            $scope.greeting = hi.data;
        });

        $scope.user = JSON.parse($window.localStorage.getItem('user'));
        console.log($scope.user.username);

        $scope.team = function() {
            console.log("Going to teams");
            $state.go('teams');

        };

        $scope.saveUser = function(user) {
            MemberService.updateUser(user).then(function(user) {
                $window.localStorage.setItem('user', JSON.stringify(user.data));
                $scope.user = JSON.parse($window.localStorage.getItem('user'));
                //console.log(user);
            })
            //console.log(user);
        }
 });
