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

     service.nextPage = function() {
      service.currentPage++
     }     

     service.prevPage = function() {
      service.currentPage--
     }

     service.submitEvent = function () {
      $http.post('/create/event', this.eventObject)
     };

    return service;



}]);

