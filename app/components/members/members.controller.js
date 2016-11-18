angular.module('members.module',[])
    .controller('membersController', function($scope, $http) {
    $http.get('http://54.244.170.44:3000/api/user/hi').
        then(function(response) {
            $scope.greeting = response.data;
        });
});
