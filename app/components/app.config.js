//Routes and config information is to be stored here
angular
    .module('app.config', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/intro/login')

        $stateProvider
            .state('teams', {
                url: '/teams',
                templateUrl: '/components/teams/teams.tpl.html',
                controller: 'TeamsController'
            })
            .state('login', {
                url: '/intro/login',
                templateUrl: '/components/intro/signin/loginPage.html',
                controller: 'UserController'
            })

    })
