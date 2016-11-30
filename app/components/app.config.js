//Routes and config information is to be stored here
angular
    .module('app.config', ['ui.router', 'auth0.lock', 'auth.service'])

    .constant('urlConstant', {
        baseUrl: 'http://localhost:3000'
    })

    .config(function($stateProvider, $urlRouterProvider) {

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
			.state('prize', {
                url: '/prizes',
                templateUrl: '/components/prizes/prizepage.html',
                controller: 'PrizeController'
            })

            $urlRouterProvider.otherwise('/intro/login');

    })
    .config(function(lockProvider) {
        lockProvider.init({
            clientID: '0SnVXOn7KonOtQhhdrsG4emhGdajpXNO',
            domain: 'saintsantos1341.auth0.com'
        });
    })
    //interceptor - adds token XHR header to all requests
    //http://stackoverflow.com/questions/20062493/interceptor-for-all-http-requests-in-angularjs-1-0-x
    .config(function($httpProvider) {

        $httpProvider.interceptors.push(
            //anonymous function
            function($q, $window, $location) {

                return {
                    //only for the request headers

                    'request': function(config) {

                        // do this only for the API calls
                        // TODO - Some way to authenticate all requests, like images, etc.
                        if (config.url.indexOf('/api/') !== -1) {
                            config.headers['token'] = $window.localStorage.getItem('id_token');
                        }

                        return config;
                    },

                    'responseError': function(rejection) {
                        // do something on error
                        if (rejection.status === 401) {
                            $location.path('/user/login');
                        }
                        return $q.reject(rejection);
                    }


                };
            }
        );

    })
    .run(run);
    run.$inject = ['$rootScope','authService', 'lock'];
    function run($rootScope, authService, lock) {
        $rootScope.authService = authService;
        authService.registerAuthenticationListener();
        lock.interceptHash();
    }
