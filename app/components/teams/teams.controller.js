angular
    //This is used for dependency calls. See teams.module.js to see the dependencies in action.
    .module('teams.controller', [])
    //The exported name of the controller module, this is called in other modules and in html
    .controller('TeamsController', function($scope, $state) {
        //An example of a controller for an html file.
        //In angular, in order to make a function callable, use $scope to make the function as shown below.
        $scope.test = function() {
            //Actually define what the function is supposed to do here
            console.log("This is a function triggered in a controller");
        }

	function teamInfoPopUp(){
	    var team=prompt("Enter your team name:","teamName");
	    if(team!=null && team!="teamName"){
		alert("We were unable to create the team:\n\t"+team+"\n as our databases are not yet up and running.\n\
 Thank you for your understanding");
	    }}

        $(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip({trigger: "hover", animation: true});
	    });

        function underConstruction(){
	    document.getElementById("ConstMessage").innerHTML = "These buttons are under construction. Please chec\
k back once databases are up and running!";
        }

        function loadTeamInfo(group) {
            document.getElementById("groupName").innerHTML = group;
            document.getElementById("InfoPanel").innerHTML = "This is the information for the team";

        }
        function loadAnnouncementInfo(group,announce){
            document.getElementById("groupName").innerHTML = group;
            document.getElementById("InfoPanel").innerHTML = announce;
        }
        function loadMembers(group,num1,num2,num3){
            document.getElementById("groupName").innerHTML = group;
            document.getElementById("InfoPanel").innerHTML = "DummyMember"+num1+"\t DummyMember"+num2+"\t Dumm\
yMember"+num3;
        }






    });
