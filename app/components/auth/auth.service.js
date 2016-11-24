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
                $window.localStorage.removeItem('user');
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
                        } else {
                            localStorage.setItem('profile', JSON.stringify(profile));
                            $state.go('teams');
                        }
                        //deferredProfile.resolve(profile);
                    });
                    console.log("made it!");
                    authManager.authenticate();
                    //console.log("trigger");
                    //UserService.login(profile.nickname, profile.email);

                    //UserService.login($window.localStorage.getItem('username'), $window.localStorage.getItem('email'));

                });
            }

            return {
                login: login,
                registerAuthenticationListener: registerAuthenticationListener,
                logout: logout
            }
        }

})();
