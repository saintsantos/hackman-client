 angular
    .module('members.controller',[])
    .controller('membersController', function($scope, MemberService) {

        MemberService.httpCall().then(function(hi) {
            $scope.greeting = hi.data;
        });

        $scope.team = function() {
            console.log("Going to teams");
            $state.go('teams');

        };
 });
