angular
    //This is used for dependency calls. See teams.module.js to see the dependencies in action.
    .module('teams.controller', ['ui.materialize'])
    //The exported name of the controller module, this is called in other modules and in html
    .controller('TeamsController', function($scope, $state, TeamService) {
        //An example of a controller for an html file.
        //In angular, in order to make a function callable, use $scope to make the function as shown below.
        $scope.groups = [{
          "X":"Magic Cam"},{
          "X":"Super Freezer 5000"},{
          "X":"Random Group"},{
          "X":"HoloGen"},{
          "X":"Super Freezer 5000"},{
          "X":"Random Group"},{
          "X":"Super Freezer 5000"},{
          "X":"Random Group"},{
          "X":"Super Freezer 5000"},{
          "X":"Random Group"},{
          "X":"Super Freezer 5000"},{
          "X":"Random Group"
        }]



        $scope.test = function() {
            //Actually define what the function is supposed to do here
            console.log("This is a function triggered in a controller");
        }

        $scope.underConstruction = function() {
            document.getElementById("ConstMessage").innerHTML = "These buttons are under construction. Please check back once databases are up and running!";
        }

        $scope.loadTeamInfo = function(group) {
            document.getElementById("groupName").innerHTML = group;
            document.getElementById("InfoPanel").innerHTML = "This is the information for the team";
        }

        $scope.loadAnnouncementInfo = function(group, announce) {
            document.getElementById("groupName").innerHTML = group;
            document.getElementById("InfoPanel").innerHTML = announce;
        }

        $scope.loadMembers = function(group, num1, num2, num3) {
            document.getElementById("groupName").innerHTML = group;
            document.getElementById("InfoPanel").innerHTML = "DummyMember"+num1+"\t DummyMember"+num2+"\t DummyMember"+num3;
        }

        $scope.teamInfoPopUp = function() {
            var team=prompt("Enter your team name:","teamName");
            if(team!=null && team!="teamName"){
            alert("We were unable to create the team:\n\t"+team+"\n as our databases are not yet up and running.\n Thank you for your understanding");
            }
        }
    })
