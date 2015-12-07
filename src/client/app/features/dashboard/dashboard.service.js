angular.module("app.features.dashboard").factory("dashboardFactory", ["$http", "$window", function ($http, $window) {



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
        barTab: null,
        cost: null,
      };
      service.eventObject.eventMenuObjects = [];
      service.user = {}
      service.user.current = JSON.parse($window.localStorage.currentUser);

      service.createEventMenuObject = function(MenuId, quantity, cost) {
        var eventMenuObject = {
          EventId: null, 
          MenuId: MenuId,
          quantity: quantity,
          foodCost: cost
        };
        service.eventObject.eventMenuObjects.push(eventMenuObject);
      };

      service.updateEventMenuEventId = function(EventId) {
        this.menuEventObjects.forEach(function(item){
          item.EventId = id;
        });
      };


      service.calculateFoodCost = function (quantity, costPerPerson) {
        return (quantity * costPerPerson);
      }


      service.getMenusForSpace = function () {
        var SpaceId = this.eventObject.SpaceId;
        return $http.get('menus/space/'+SpaceId);
      }

      service.nextPage = function() {
        service.page.current++;
        return service.page.current;
        console.log(service.page.current);
      }     

      service.prevPage = function() {
        service.page.current--;
        return service.page.current;
      }     

      service.getPage = function() {
        return service.page.current;
      };

      service.submitEvent = function () {
        $http.post('/event/create', this.eventObject)
        .success(function(event){
          console.log("New Event:",event);
        });
        // add in .success submit eventMenus
      };

      return service;

}]);

