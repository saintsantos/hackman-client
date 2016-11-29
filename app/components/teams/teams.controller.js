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
        })
        /*var profile = JSON.parse($window.localStorage.getItem('profile'));
        var user = JSON.parse($window.localStorage.getItem('user'));
        console.log(profile);
        console.log(user);*/
        authService.getDeferredProfile().then(function(profile) {
            console.log(profile);
            UserService.login(profile.nickname, profile.email);
            UserService.getUser(profile.nickname).then(function(result) {
                    $scope.user = result.data;
                    $window.localStorage.setItem('user', JSON.stringify(result.data));
                    $window.localStorage.setItem('user_id', $scope.user._id);
                    $window.localStorage.setItem('role', $scope.user.role);
                    if ($window.localStorage.getItem('role') === "admin") {
                        $scope.admin = true;
                    } else {
                        $scope.admin = false;
                    }
            })
        });
        $scope.github = 'https://github.com';
        $scope.linkedIn = 'https://linkedin.com';
        $scope.teammateArray1 = [];
        $scope.teammateArray2 = [];

        TeamService.getAlerts().then(function(result) {
            //console.log(result.data);
            $scope.latest = result.data.slice(-1)[0];
            $scope.alerts = result.data;
        });

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
            //console.log("going to members page");
            $state.go('members');
        }

        //Olivia added this to mess around with the angular stuff on the sponsors page
        //Olivia added these to mess around with the angular stuff on the sponsors and prizes page
        $scope.addAlerts = function(alert) {
            //console.log(alert);
            TeamService.addAlert(alert);
            $scope.alerts.push(alert);
            $scope.latest = $scope.alerts.slice(-1)[0];
        }

        $scope.prize = function() {
            //console.log("Going to prizes");
            $state.go('prize');

        }

        $scope.sponsor = function() {
            //console.log("Going to sponsors");
            $state.go('sponsor');

        };

        $scope.teams = function() {
            //console.log("Going to teams");
            $state.go('teams');
            $window.location.reload();
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
            var userid = $window.localStorage.getItem('user_id');
            //call function to get array and assign here.
            //console.log(team.teammates);
            team.profiles = [];
            if (userid === team.created_by) {
                $scope.owner = true;
            } else {
                $scope.owner = false;
            }
            $scope.chosen_id = teamid;
            $scope.chosen_team = team;
            TeamService.getTeammates(team.teammates).then(function(teammate) {
                //console.log(teammate.data);
                $scope.chosen_team.profiles = teammate.data;
                //This is gross
                var set1 = [];
                var set2 = [];
                if (typeof $scope.chosen_team.profiles[0] === 'undefined') {
                    console.log("User 1 not found");
                } else {
                    console.log("User 1 found");
                    set1.push(teammate.data[0]);
                }
                if (typeof $scope.chosen_team.profiles[1] === 'undefined') {
                    console.log("User 2 not found");
                } else {
                    console.log("User 2 found");
                    set1.push(teammate.data[1]);
                }
                if (typeof $scope.chosen_team.profiles[2] === 'undefined') {
                    console.log("User 3 not found");
                } else {
                    console.log("User 3 found");
                    set2.push(teammate.data[2]);
                }
                if (typeof $scope.chosen_team.profiles[3] === 'undefined') {
                    console.log("User 4 not found");
                } else {
                    console.log("User 4 found");
                    set2.push(teammate.data[1]);
                }
                $scope.teammateArray1 = set1;
                $scope.teammateArray2 = set2;
            })

            console.log($scope.chosen_team);

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
                if(!team) {
                    console.log("Team not found");
                } else {
                    //console.log(team);
                    $scope.groups.push(team.data);
                }
            });
            //console.log(team);
        }
        $scope.pageRefresh = function() {
            $window.location.reload();
        }

        $scope.makeAdmin = function(user) {
            //Accepts a user id as an argument and sets that user to admin status on the backend
            TeamService.makeAdmin(user._id);
        }

        $scope.removeAdmin = function(user) {
            //Accepts a user id as an argument and turns the user into a normal user on the backend
            TeamService.removeAdmin(user._id);
        }
    });
