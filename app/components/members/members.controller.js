angular
    .module('members.controller', [])
    .controller('membersController', function($scope) {
        $scope.title='members';
        $scope.memberX=[
            {
                name:'John Doe',
                about:"i like web dev and dogs",
                image:"../../assets/img/fancySponsor.JPG",
                link:"https://placekitten.com/"
            },
            {
                name:"Jane Doe",
                about:"i only program in bash",
                image: "../../assets/img/table.JPG",
                link:"https://www.amazon.com/Melissa-Doug-Wooden-Table-Chairs/dp/B00CE69IGA/ref=sr_1_11?ie=UTF8&qid=1476554374&sr=8-11&keywords=table"
            }



    ];
    $scope.members = [
        {
            name:'John Doe',
            about:"i like web dev and dogs",
            image:"../../assets/img/fancySponsor.JPG",
            link:"https://placekitten.com/"
        },
        {
            name:"Jane Doe",
            about:"i only program in bash",
            image: "../../assets/img/table.JPG",
            link:"https://www.amazon.com/Melissa-Doug-Wooden-Table-Chairs/dp/B00CE69IGA/ref=sr_1_11?ie=UTF8&qid=1476554374&sr=8-11&keywords=table"
        }
  ];


});
