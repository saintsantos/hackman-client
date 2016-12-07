angular
    .module('prizes.controller', ['ui.materialize'])
    .controller('PrizeController', function($scope, $state, $window, authService, PrizeService) {

        $scope.teams = function() {
            $state.go('teams');
            $window.location.reload();
        };

        //Using new role system, will have to be updated.
        if ($window.localStorage.getItem('role') === 'admin') {
            $scope.role = true;
        } else {
            $scope.role = false;
        }

        PrizeService.getPrizes().then(function(result) {
            console.log(result);
            $scope.prizes = result.data;
        })

        console.log($scope.prizes);

        $scope.manage = true;

        $scope.title='Prizes';

        $scope.savePrize = function(prize, id) {
            PrizeService.editPrize(prize, prize._id);
            console.log(prize);
        }

        $scope.deletePrize = function(prize, id) {
            PrizeService.deletePrize(prize._id);
            $scope.prizes.splice(id, 1);
            console.log(prize);

        }

        $scope.setPrize = function(prize, index) {
            $scope.chosen_index = index;
            $scope.chosen_prize = prize;
            console.log($scope.chosen_prize);
        }

        var authenticate = this;
        authenticate.authService = authService;
        authService.getDeferredProfile().then(function(profile) {
            UserService.login(profile.nickname, profile.email);
            UserService.getUser(profile.nickname).then(function(result) {
                    $scope.user = result.data;
                    $window.localStorage.setItem('user', JSON.stringify(result.data));
                    $window.localStorage.setItem('user_id', $scope.user._id);
                    $window.localStorage.setItem('role', $scope.user.role);
            })
        });
        $scope.loggingOut = function() {
            authenticate.authService.logout();
        }

        $scope.prize = function() {
            //console.log("Going to prizes");
            $state.go('prize');

        }

        $scope.sponsor = function() {
            //console.log("Going to sponsors");
            $state.go('sponsor');

        };

        $scope.createPrize = function() {
            PrizeService.newPrize().then(function(result) {
                $scope.prizes.push(result.data);
            });

        }
});
