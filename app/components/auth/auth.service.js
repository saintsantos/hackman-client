(function() {
    'user strict';

    angular
        .module('auth.service', ['auth0.lock', 'user.service'])
        .service('authService', authService);

        function authService(lock, authManager, $state, $q, UserService, $window) {

            var deferred = $q.defer();

            function login() {
                console.log("triggered!");
                lock.show();
            }

            function logout() {
                console.log("Logging out");
                $window.localStorage.removeItem('id_token');
                $window.localStorage.removeItem('profile');
                $window.localStorage.removeItem('user_id');
                $window.localStorage.removeItem('role');
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
                        localStorage.setItem('profile', JSON.stringify(profile));
                        //console.log(localStorage.getItem('id_token'))
                        //UserService.login(profile.nickname, profile.email);
                        //$state.go('teams');
                        deferred.resolve(profile);
                        //$state.go('teams');
                    });
                    console.log("made it!");
                    authManager.authenticate();

                    //console.log("trigger");
                    //UserService.login(profile.nickname, profile.email);

                    //UserService.login($window.localStorage.getItem('username'), $window.localStorage.getItem('email'));

                });
            }

            function getDeferredProfile() {
                return deferred.promise;
            }

            return {
                login: login,
                registerAuthenticationListener: registerAuthenticationListener,
                logout: logout,
                getDeferredProfile: getDeferredProfile
            }
        }

})();
