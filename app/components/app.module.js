// Declare app level module which depends on views, and components
// This model is ripped off of from this site : https://blog.mariusschulz.com/2014/10/22/asynchronously-bootstrapping-angularjs-applications-with-server-side-data

angular
    .module('hackman', [
        'app.config',

        //moduels pertaining to hackman functionality
        'teams.module',
        'user.module'
    ]).controller('mainCtrl', function($rootScope, $state) {
        console.log("Starting");
    })
