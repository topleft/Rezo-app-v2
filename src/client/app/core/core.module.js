(function () {
    'use strict';
    console.log('core module')

    angular
        .module('app.core', [
            'ngAnimate',
            'ngMaterial',
            'ui.router',
            'routes'
        ]);
})();