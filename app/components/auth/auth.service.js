(function() {
    'user strict';

    angular
        .module('auth.service', ['auth0.lock', 'user.service'])
        .service('authService', authService);

        function authService(lock, authManager, $state, $q, UserService, $window) {
            function login() {
                console.log("triggered!");
                lock.show();
            }

            function logout() {
                console.log("Logging out");
                $window.localStorage.removeItem('id_token');
                $window.localStorage.removeItem('role');
                $window.localStorage.removeItem('username');
                $window.localStorage.removeItem('email');
                $window.localStorage.removeItem('user_id');
                authManager.unauthenticate();
                $state.go('login');
            }

            // Set up the logic for when a user authenticates
            // This method is called from app.run.js
            function registerAuthenticationListener() {
                lock.on('authenticated', function (authResult) {
                    localStorage.setItem('id_token', authResult.idToken);
                    lock.getProfile(authResult.idToken, function(error, profile) {
                        if (error) {
                            return console.log(error);
                        }
                        localStorage.setItem('email', profile.email);
                        localStorage.setItem('username', profile.nickname);
                        //deferredProfile.resolve(profile);
                    });
                    authManager.authenticate();
                    UserService.login($window.localStorage.getItem('username'), $window.localStorage.getItem('email'));

                });
            }

            return {
                login: login,
                registerAuthenticationListener: registerAuthenticationListener,
                logout: logout
            }
        }

})();
