// Declare app level module which depends on views, and components
// This model is ripped off of from this site : https://blog.mariusschulz.com/2014/10/22/asynchronously-bootstrapping-angularjs-applications-with-server-side-data

(function() {

    var dependencies = [
        'app.config',
        'app.service',

        //moduels pertaining to hackman functionality
        'teams.module'
    ],
    appModule = angular.module("app.module", dependencies);
    
})
