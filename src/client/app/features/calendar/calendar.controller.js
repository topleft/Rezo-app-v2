(function () {
    'use strict';

    angular
        .module('app.features.calendar')
        .controller('calendarController', calendarController);


    calendarController.$inject = ['$scope', 'CalendarData', 'Calendar', '$rootScope'];

    function calendarController ($scope, CalendarData, Calendar, $rootScope) {
      var dataService = CalendarData;

      $scope.toggleDisabled = function (date) {
        var date =  date || dataService.getActiveDate();
        var disabledList = dataService.getDisabled();
        if (disabledList.indexOf(date) !== -1) {
          dataService.removeDisabled(date);
        }
        else {
          dataService.setDisabled(date);
        }
      }

      $scope.setDate = function (content) {
        var today = dataService.getActiveDate();
        dataService.setDayContent(today, '<span>HAPPY!!!</span>');
      }
    }
})();