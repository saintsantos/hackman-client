//Use the module to connect everything together.

angular
    //All those modules are called here to glue them together
    .module('teams.module', [
        'teams.controller',
        'teams.service',
        'teams.timer',
        'auth.service'
    ])
