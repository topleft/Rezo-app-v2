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
      service.space = {};
      service.space.current = null;
      service.space.menus = [];
      service.eventObject.eventMenuObjects = [];
      service.user = {};
      service.user.current = JSON.parse($window.localStorage.currentUser);
      service.bookedEvent = null;

      service.setCurrentSpace = function (spaceId) {
        $http.get('/space/'+spaceId)
        .success(function(space){
          service.space.current = space;
        })
      }

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

      service.updateUser = function (phoneNumber, email, companyName) {
        if (!companyName) {companyName = null}
        return $http.put('/user/update/'+service.user.current.id, {
          phoneNumber: phoneNumber, 
          email: email, 
          companyName: companyName
        }).success(function(user){
          service.user.current = user;
        })
      }


      service.calculateFoodCost = function (quantity, costPerPerson) {
        return (quantity * costPerPerson);
      }


      service.getMenusForSpace = function () {
        var SpaceId = this.eventObject.SpaceId;
        $http.get('menus/space/'+SpaceId)
        .success(function (menus) {
          service.space.menus = menus;
        });
      }

      service.nextPage = function() {
        service.page.current++;
        return service.page.current;
      }     

      service.prevPage = function() {
        service.page.current--;
        return service.page.current;
      }     

      service.getPage = function() {
        return service.page.current;
      };

      service.getSelectedMenusAndQuantity = function () {
        service.eventObject.eventMenuObjects.forEach( function(item) {
          item.MenuId
        })
      }

      service.submitEvent = function () {
        $http.post('/event/create', this.eventObject)
        .success(function(event){
          service.bookedEvent = event;
          console.log("New Event:",service.bookedEvent);
          service.sendText()
          service.nextPage();
          });
        // add in .success submit eventMenus
      };

      service.sendText = function ( phoneNumber, message, imageUrl ) {
        if(imageUrl) {
          $http.post('/twilio/mms', {
            phoneNumber: phoneNumber, 
            message: message, 
            imageUrl: imageUrl
          })
        } else {
          $http.post('/twilio/sms', {
            phoneNumber: phoneNumber, 
            message: message
          });
        }
      };

      return service;

}]);

