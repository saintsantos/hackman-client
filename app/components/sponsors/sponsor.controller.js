angular
    .module('sponsor.controller', ['ui.materialize'])
    .controller('SponsorController', function($scope, $state, $window) {

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

        PrizeService.getPrizes().then(function(result) {
            $scope.prizes = result.data;
        })

        $scope.manage = true;

        console.log($scope.role);

        $scope.savePrize = function(prize, id) {
            //PrizeService.editPrize(prize);
            console.log(prize);
        }

        $scope.deletePrize = function(prize, id) {
            //PrizeService.deletePrize(prize._id);
            $scope.prizes.splice(id, 1);
            console.log(prize);

        }

        $scope.setPrize = function(prize, index) {
            $scope.chozen_index = index;
            $scope.chosen_prize = prize;
            console.log(prize);
        }

        $scope.createPrize = function() {
            prize = {
              	name:'New Prize',
                desc:'This is a new prize',
                sponsor:'Yes there is'
            }
            PrizeService.newPrize(prize);
            $scope.prizes.push(prize);
        }

        
        //         $scope.sponsorX=[
        //             {
        //                 name:'Fanciful Sponsor',
        //                 about:"Here at Fanciful Sponsor, we believe that everything is fanciful, and strive to spread that mentality to the rest of the world. Fanciful walks in the park, fanciful flowers, fanciful poops. Fanciful everything.",
        //                 image:"../../assets/img/fancySponsor.JPG",
        //                 link:"https://placekitten.com/"
        //             },
        //             {
        //                 name:"Tables",
        //                 about:"Tables. Tables everywhere. All the tables. So many Tables.",
        //                 image: "../../assets/img/table.JPG",
        //                 link:"https://www.amazon.com/Melissa-Doug-Wooden-Table-Chairs/dp/B00CE69IGA/ref=sr_1_11?ie=UTF8&qid=1476554374&sr=8-11&keywords=table"
        //             }
        //     ];
        //     $scope.sponsors = [
        //   	{
        //     	name:'Fanciful Sponsor',
        //         about:'Here at Fanciful Sponsor, we believe that everything is fanciful, and strive to spread that mentality to the rest of the world. Fanciful walks in the park, fanciful flowers, fanciful poops. Fanciful everything.',
        //         image:'../../assets/img/fancySponsor.JPG',
        //         link:'https://placekitten.com/'
        //   	},
        //   	{
        //     	name:'Tables',
        //         about:'Tables. Tables everywhere. All the tables. So many Tables.',
        //         image:'../../assets/img/table.JPG',
        //         link:'https://www.amazon.com/Melissa-Doug-Wooden-Table-Chairs/dp/B00CE69IGA/ref=sr_1_11?ie=UTF8&qid=1476554374&sr=8-11&keywords=table'
        //   	}
        //   ];


});
