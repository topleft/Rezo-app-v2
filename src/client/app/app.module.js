(function () {
    'use strict';

    var app = angular.module('app', [ 
      'app.core',
      'app.features',
      'app.layout'
    ])

    app.config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange')
        .backgroundPalette('grey');
    });

    app.run(function ($state) {} );





})();