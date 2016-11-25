angular
    .module('prizes.controller', ['ui.materialize'])
    .controller('PrizeController', function($scope, $state, $window, PrizeService) {

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

        $scope.createPrize = function() {
            PrizeService.newPrize().then(function(result) {
                $scope.prizes.push(result.data);
            });

        }
});
