angular
    .module('sponsor.controller', ['ui.materialize'])
    .controller('SponsorController', function($scope, $state, $window, SponsorService) {

        $scope.teams = function() {
            console.log("Going to teams");
            $state.go('teams');
            $window.location.reload();
        };

        $scope.title='Sponsors';

        if ($window.localStorage.getItem('role') === 'admin') {
            $scope.role = true;
        } else {
            $scope.role = false;
        }

        SponsorService.getSponsors().then(function(result) {
            $scope.sponsors = result.data;
        })

        $scope.manage = true;


        $scope.saveSponsor = function(sponsor) {
            SponsorService.editSponsor(sponsor._id, sponsor);
            console.log(sponsor);
        }

        $scope.deleteSponsor = function(sponsor, id) {
            SponsorService.deleteSponsor(sponsor._id);
            $scope.sponsors.splice(id, 1);
            //console.log(sponsor);

        }

        $scope.setSponsor = function(sponsor, index) {
            $scope.chosen_index = index;
            $scope.chosen_prize = sponsor;
            console.log(sponsor);
        }

        $scope.createSponsor = function() {
            console.log("Making sponsor");
            SponsorService.newSponsor().then(function(sponsor) {
                //console.log(sponsor);
                $scope.sponsors.push(sponsor.data);
            });
        }


});
