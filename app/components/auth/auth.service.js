(function() {
    'user strict';

    angular
        .module('auth.service', ['auth0.lock'])
        .service('authService', authService);

        function authService(lock, authManager, $state, $q) {
            function login() {
                console.log("triggered!");
                lock.show();
            }

            function logout() {
                console.log("Logging out");
                localStorage.removeItem('id_token');
                authManager.unauthenticate();
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
                });
            }

            return {
                login: login,
                registerAuthenticationListener: registerAuthenticationListener,
                logout: logout
            }
        }

})();
