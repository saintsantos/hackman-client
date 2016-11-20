angular
    //This is used for dependency calls. See teams.module.js to see the dependencies in action.
    .module('teams.controller', ['ui.materialize'])
    //The exported name of the controller module, this is called in other modules and in html
    .controller('TeamsController', function($scope, $state, $window, $filter, TeamService, authService, UserService) {
        //An example of a controller for an html file.
        //In angular, in order to make a function callable, use $scope to make the function as shown below.
        var authenticate = this;
        authenticate.authService = authService;
        $scope.groups = []
        TeamService.getAllTeams().then(function(teams) {
            $scope.groups = teams.data;
            console.log(teams.data);
        })
        UserService.login($window.localStorage.getItem('username'), $window.localStorage.getItem('email')).then(function(result) {
            $scope.user = result.data;
            $window.localStorage.setItem('user_id', $scope.user.id);
            $window.localStorage.setItem('role', $scope.user.role);
            if ($scope.user.role === "admin") {
                $scope.role = true;
            } else {
                $scope.role = false;
            }

            console.log($scope.role);

        });


        /*$scope.groups = [{
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
      }]*/

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

        $scope.members = function() {
            console.log("going to members page");
            $state.go('members');
        }

        //Olivia added this to mess around with the angular stuff on the sponsors page
        //Olivia added these to mess around with the angular stuff on the sponsors and prizes page
        $scope.prize = function() {
            console.log("Going to prizes");
            $state.go('prize');

        }

        $scope.sponsor = function() {
            console.log("Going to sponsors");
            $state.go('sponsor');

        };

        $scope.loggingOut = function() {
            authenticate.authService.logout();

        }

        $scope.saveTeam = function(team) {
            $scope.groups[$scope.chosen_id].teamname = team.teamname;
            $scope.groups[$scope.chosen_id].proj_desc = team.proj_desc;
            $scope.groups[$scope.chosen_id].status = team.status;
            $scope.groups[$scope.chosen_id].location = team.location;
            var id = $scope.groups[$scope.chosen_id]._id;
            TeamService.editTeam(id, team);
            console.log(team);
        }

        $scope.addTeammate = function(teammate) {
            //console.log(teammate);
        }

        $scope.deleteTeam = function(team) {
            console.log(team);
            TeamService.delTeam(team)
            $scope.groups.splice($scope.chosen_id, 1);
        }

        $scope.selectTeam = function(team, teamid) {
            $scope.chosen_id = teamid;
            $scope.chosen_team = team;
        }

        $scope.newTeam = function() {
            team = {
                teamname: 'New Team',
                created_by: $window.localStorage.getItem('user_id'),
                proj_desc: 'Making a new team',
                'status': 'generic status',
                'location': '1',
                teammates: [$window.localStorage.getItem('username')]
            }
            console.log("sending team");
            TeamService.newTeam(team).then(function(team) {
                //console.log(team);
                $scope.groups.push(team.data);
            });
            //console.log(team);
        }
    });
