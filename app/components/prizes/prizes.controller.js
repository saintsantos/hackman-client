angular
    .module('prizes.controller', ['ui.materialize'])
    .controller('PrizeController', function($scope, $state, $window, PrizeService) {

        $scope.teams = function() {
            console.log("Going to teams");
            $state.go('teams');
            $window.location.reload();
        };

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
            prize = {
              	prizeName:'New Prize',
                prize_desc:'This is a new prize',
                sponsor:'Yes there is'
            }
            PrizeService.newPrize(prize);
            $scope.prizes.push(prize);
        }


        //     $scope.sponsorX=[
        //         {
        //             name:'Fanciful Sponsor',
        //             about:"Here at Fanciful Sponsor, we believe that everything is fanciful, and strive to spread that mentality to the rest of the world. Fanciful walks in the park, fanciful flowers, fanciful poops. Fanciful everything.",
        //             image:"../../assets/img/fancySponsor.JPG",
        //             link:"https://placekitten.com/"
        //         },
        //         {
        //             name:"Tables",
        //             about:"Tables. Tables everywhere. All the tables. So many Tables.",
        //             image: "../../assets/img/table.JPG",
        //             link:"https://www.amazon.com/Melissa-Doug-Wooden-Table-Chairs/dp/B00CE69IGA/ref=sr_1_11?ie=UTF8&qid=1476554374&sr=8-11&keywords=table"
        //         }
        // ];
        /*$scope.prizes = [
      	{
            id: 0,
        	name:'Chair',
            about:'This is a chair, made for sitting in. Tis a very nice chair. Real butt luxury',
            image:'../../assets/img/chairPrize.JPG',
            sponsor:'Table '
      	},
      	{
            id: 1,
        	name:'Liquid Fancy',
            about:'Liquified Fancy. Make everything extra fancy with a quick spray. Comes in a fancy spray bottle',
            image:'../../assets/img/fancySpray.JPG',
            sponsor:'Fanciful'
      	}
    ];*/
});
