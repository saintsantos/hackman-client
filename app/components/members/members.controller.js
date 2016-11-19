 angular
    .module('members.controller',[])
    .controller('membersController', function($scope, MemberService) {

        MemberService.httpCall().then(function(hi) {
            $scope.greeting = hi.data;
        });
 });
