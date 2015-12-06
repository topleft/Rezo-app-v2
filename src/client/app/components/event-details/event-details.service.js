angular.module("app.components.event-details").factory("eventFactory", ["$http",function ($http) {



    var service = {};

     service.currentPage = 1;

     service.eventObject = {
      UserId: null,
      SpaceId: null,
      date: null,
      time: null,
      totalGuests: null,
      specialRequests: null,
      barTab: null
     };

     service.submitEvent = function () {
      $http.post('/create/event', this.eventObject)
     };

    return service;



}]);

