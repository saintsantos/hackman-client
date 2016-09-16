//Routes and config information is to be stored here
angular
    .module('app.config', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/teams')

        $stateProvider
            .state('teams', {
                url: '/teams',
                templateUrl: '/components/teams/teams.tpl.html',
                controller: 'TeamsController'
            })

    })
