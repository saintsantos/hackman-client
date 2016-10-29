angular
    .module('prize.controller', [])
    .controller('PrizeController', function($scope) {
        $scope.title='Prizes';
        $scope.sponsorX=[
            {
                name:'Fanciful Sponsor',
                about:"Here at Fanciful Sponsor, we believe that everything is fanciful, and strive to spread that mentality to the rest of the world. Fanciful walks in the park, fanciful flowers, fanciful poops. Fanciful everything.",
                image:"../../assets/img/fancySponsor.JPG",
                link:"https://placekitten.com/"
            },
            {
                name:"Tables",
                about:"Tables. Tables everywhere. All the tables. So many Tables.",
                image: "../../assets/img/table.JPG",
                link:"https://www.amazon.com/Melissa-Doug-Wooden-Table-Chairs/dp/B00CE69IGA/ref=sr_1_11?ie=UTF8&qid=1476554374&sr=8-11&keywords=table"
            }



    ];
    $scope.prizes = [
  	{
    	name:'Chair',
        about:'This is a chair, made for sitting in. Tis a very nice chair. Real butt luxury',
        image:'../../assets/img/chairPrize.JPG',
        sponsor:'Table '
  	},
  	{
    	name:'Liquid Fancy',
        about:'Liquified Fancy. Make everything extra fancy with a quick spray. Comes in a fancy spray bottle',
        image:'../../assets/img/fancySpray.JPG',
        sponsor:'Fanciful'
  	}
  ];


});
