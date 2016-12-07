angular
    .module('sponsor.controller', ['ui.materialize'])
    .controller('SponsorController', function($scope, $state, authService, $window, SponsorService) {

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


});
