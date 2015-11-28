(function () {
    'use strict';

console.log('app module')

    angular.module('app', [ 
      'app.core',
      'app.features',
      'app.layout'
    ]).run(function($state){})



})();