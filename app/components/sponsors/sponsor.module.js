//Use the module to connect everything together.

angular
    //All those modules are called here to glue them together
    .module('sponsor.module', [
        'sponsor.controller',
        'sponsor.service'
    ])
