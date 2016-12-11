// Declare app level module which depends on views, and components
// This model is ripped off of from this site : https://blog.mariusschulz.com/2014/10/22/asynchronously-bootstrapping-angularjs-applications-with-server-side-data
//Throwing a comment in here
angular
    .module('hackman', [
        'app.config',

        //moduels pertaining to hackman functionality
        'teams.module',
        'user.module',
        'sponsor.module',
        'prize.module',
        'auth.service',
        'members.module',
        'angular-jwt'
    ]).controller('mainCtrl', function($rootScope, $state) {
        console.log("Starting");
    })
