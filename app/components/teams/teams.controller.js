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
        });

        /*var profile = JSON.parse($window.localStorage.getItem('profile'));
        var user = JSON.parse($window.localStorage.getItem('user'));
        console.log(profile);
        console.log(user);*/
        authService.getDeferredProfile().then(function(profile) {
            UserService.login(profile.nickname, profile.email);
            UserService.getUser(profile.nickname).then(function(result) {
                    $scope.user = result.data;
                    $window.localStorage.setItem('user', JSON.stringify(result.data));
                    $window.localStorage.setItem('user_id', $scope.user._id);
                    $window.localStorage.setItem('role', $scope.user.role);
            })
            console.log(profile)
        });

        if ($window.localStorage.getItem('role') === "admin") {
            $scope.admin = true;
        } else {
            $scope.admin = false;
        }
        $scope.github = 'https://github.com';
        $scope.linkedIn = 'https://linkedin.com';
        $scope.teammateArray1 = [];
        $scope.teammateArray2 = [];

        TeamService.getAlerts().then(function(result) {
            //console.log(result.data);
            $scope.latest = result.data.slice(-1)[0];
            $scope.alerts = result.data;
        });

        $scope.members = function() {
            //console.log("going to members page");
            $state.go('members');
        }

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
        }

        $scope.addTeammate = function(teammate) {
            $scope.groups[$scope.chosen_id].teammates.push("new teammate");
            var index = $scope.groups[$scope.chosen_id].teammates.indexOf("new teammate");
            if (index > -1) {
                $scope.groups[$scope.chosen_id].teammates[index] = teammate;
            }
            TeamService.addTeammate($scope.groups[$scope.chosen_id]._id, teammate);

            UserService.getUser(teammate).then(function(user) {
                $scope.groups[$scope.chosen_id].profiles.push(user);
            })
        }

        $scope.deleteTeammate = function(teammate) {
            var index = $scope.groups[$scope.chosen_id].teammates.indexOf(teammate);
            if (index > -1) {
                $scope.groups[$scope.chosen_id].teammates.splice(index, 1);
            }

            for(var i = 0; i < $scope.groups[$scope.chosen_id].profiles.length; i += 1) {
                if ($scope.groups[$scope.chosen_id].profiles[i]['username'] === teammate) {
                    $scope.groups[$scope.chosen_id].profiles.splice(i, 1);
                }
            }

            TeamService.delTeammate($scope.groups[$scope.chosen_id]._id, teammate);
        }

        $scope.deleteTeam = function(team) {
            TeamService.delTeam(team)
            $scope.groups.splice($scope.chosen_id, 1);
        }

        $scope.selectTeam = function(team, teamid) {
            var userid = $window.localStorage.getItem('user_id');
            //call function to get array and assign here.
            console.log(team);
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
                if (typeof $scope.chosen_team.profiles[0] !== 'undefined') {
                    set1.push(teammate.data[0]);
                }
                if (typeof $scope.chosen_team.profiles[1] !== 'undefined') {
                    set1.push(teammate.data[1]);
                }
                if (typeof $scope.chosen_team.profiles[2] !== 'undefined') {
                    set2.push(teammate.data[2]);
                }
                if (typeof $scope.chosen_team.profiles[3] !== 'undefined') {
                    set2.push(teammate.data[1]);
                }
                $scope.teammateArray1 = set1;
                $scope.teammateArray2 = set2;
            })

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
            //console.log(user._id)
        }

        $scope.removeAdmin = function(user) {
            //Accepts a user id as an argument and turns the user into a normal user on the backend
            TeamService.removeAdmin(user._id);
            //console.log(user._id)
        }

        $scope.askForHelp = function(team) {
            team.help = !team.help;
            $scope.groups[$scope.chosen_id].help = team.help;
            console.log(team);
            //TeamService.getHelp(team._id, team.help);
        }

        $scope.adminFunk = function(user) {
            if (user.role != 'admin') {
                user.role = 'admin'
            } else {
                user.role = 'user'
            }

            TeamService.makeAdmin(user._id, user.role);
            console.log(user.role);
        }
    });
