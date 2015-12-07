(function () {
    'use strict';

    angular
        .module('app.components', [
          'app.core',
          'app.components.calendar',
          'app.components.space-selection',
          'app.components.time-guest-form',
          'app.components.menu-selection',
          'app.components.user-profile',
          'app.components.event-details',
          'app.components.rezo-confirmation'
        ]);

})();