angular.module("app.features.dashboard").factory("dashboardFactory", ["$http",function ($http) {



    var service = {};

     service.page = {};

     service.page.current = 1;

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
      service.page.current++;
      return service.page.current;
      console.log(service.page.current)
     }     

     service.prevPage = function() {
      service.page.current--;
      return service.page.current;
     }     

     service.getPage = function() {
      return service.page.current;
     }

     service.submitEvent = function () {
      $http.post('/create/event', this.eventObject)
     };

    return service;

}]);

