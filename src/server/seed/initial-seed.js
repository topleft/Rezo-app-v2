( function () {

  'usestrict';

var server = require("../app");
var models = require('../models/index');
var CommonWealth;
var lunchMenu;
var dinnerMenu;

//------- CREATE SPACE -----//
  models.Space.sync({
    force: true
    }).then(function() {
        models.Space.create({
            name: 'CommonWealth',
            type: 'Restaurant/Bar',
            googlePlaceID: 'ChIJf-xTgMR4bIcRcnPIy94BeIw',
            owner: null,
            contactFirstName: "Pete" ,
            contactLastName: "Jeffryes",
            contactCellNumber: "510-289-1955",
            contactEmail: "pete.topleft@gmail.com",
            occupancy: 60
            }).then(function(space){
                console.log("Space: ", space.dataValues);
                CommonWealth = space.dataValues;
                console.log('_____________________________________________________________');
                models.Menu.sync(
                  {force: true
                  }).then(function() {
                      models.Menu.create({
                          name: 'Lunch',
                          bevItems: ['Beer', 'Soda', 'Water'],
                          foodItems: ['Hamburger', 'Fries', 'Salad'],
                          costPerPerson: 20.00,
                          SpaceId: CommonWealth.id
                      }).then(function(menu){
                          lunchMenu = menu.dataValues;
                          console.log('_____________________________________________________________');
                          console.log('\n');
                          models.Menu.create({
                              name: 'Dinner',
                              bevItems: ['Beer', 'Wine', 'Sparkling Water'],
                              foodItems: ['Steak', 'Chicken Pot Pie', 'Salad', 'Bread Pudding'],
                              costPerPerson: 40.00,
                              SpaceId: CommonWealth.id
                          }).then(function(menu){
                              dinnerMenu = menu.dataValues;
                              console.log('_____________________________________________________________');
                              console.log('\n');
                          }).catch(function(err) {
                              console.log(err);
                          });
                      }).catch(function(err) {
                          console.log(err);
                      });
                  });
            }).catch(function(err) {
                console.log(err);
            });
      });



})();             