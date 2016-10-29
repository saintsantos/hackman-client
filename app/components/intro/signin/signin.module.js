angular
    //This is used for dependency calls. See teams.module.js to see the dependencies in action.
    .module('user.module', [
            'user.service',
            'user.controller',
            'auth.service'
    ])
