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
            .state('t&c', {
                url: '/intro/terms',
                templateUrl: '/components/intro/signin/termsAndConditions.html',
                controller: 'UserController'
            })
            .state('sponsor', {
                url: '/sponsors',
                templateUrl: '/components/sponsors/sponsorPage.html',
                controller: 'SponsorController'
            })
            .state('members', {
                url: '/members',
                templateUrl: '/components/members/members.tpl.html',
                controller: 'membersController'
            })

    })
