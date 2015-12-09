( function () {

  'usestrict';

var server = require("../app");
var models = require('../models/index');
var CommonWealth;
var RamenShop;
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
            contactCellNumber: "5102891955",
            contactEmail: "pete.topleft@gmail.com",
            occupancy: 60,
            websiteUrl: "http://www.commonwealthpubs.com/visit-1-2",
            logoUrl: "http://static1.squarespace.com/static/54e0f431e4b043f1c99a55d0/t/55b6be69e4b0e4916f65839e/1438039658902/?format=300w",
            }).then(function(space){
                console.log("Space: ", space.dataValues);
                CommonWealth = space.dataValues;
                console.log('_____________________________________________________________');
                models.Menu.sync(
                  {force: true
                  }).then(function() {
                      models.Menu.create({
                          name: "Bangers & Mash",
                          bevItems: ['Beer', 'Soda', 'Water'],
                          foodItems: ['Bangers & Mash', 'Scotch Egg', 'Grapefruit Fennel Salad', 'Bread Pudding'],
                          costPerPerson: 22.00,
                          SpaceId: CommonWealth.id,
                          imageUrl: 'http://static1.squarespace.com/static/54e0f431e4b043f1c99a55d0/54f36b8ee4b05fe3d5e421f1/54f36ea3e4b02d9040e03b95/1427935340471/vjccw4.jpg?format=1000w'
                      }).then(function(menu){
                          lunchMenu = menu.dataValues;
                          console.log('_____________________________________________________________');
                          console.log('\n');
                          models.Menu.create({
                              name: 'Vegetable Curry',
                              bevItems: ['Beer', 'Wine', 'Sparkling Water'],
                              foodItems: ['Curry with Naan', 'Dahl', 'Papaya Salad', 'Veagn Apple Pie'],
                              costPerPerson: 18.00,
                              SpaceId: CommonWealth.id,
                              imageUrl: 'http://www.lotusartichoke.com/wp-content/uploads/2012/08/mutterpaneertofu_7094w_700.jpg'
                          }).then(function(menu){
                              dinnerMenu = menu.dataValues;
                              models.Event.sync({force: true}).then(function () {
                                models.Event.create({
                                SpaceId: CommonWealth.id,
                                UserId: null,
                                date: new Date(), 
                                time: "10:00pm", 
                                totalGuests: 0, 
                                cost: 0, 
                                specialRequests: null, 
                                inviteList: null, 
                                barTab: 0
                              }).catch(function(err) {
                                  console.log(err);
                              });
                            });
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


models.Space.create({
    name: 'Ramen Shop',
    type: 'Restaurant',
    googlePlaceID: 'ChIJqz4ScsN9hYARA0aiLsuEmrA',
    owner: null,
    contactFirstName: "Pete" ,
    contactLastName: "Jeffryes",
    contactCellNumber: "5102891955",
    contactEmail: "pete.topleft@gmail.com",
    occupancy: 80,
    websiteUrl: "http://www.ramenshop.com/",
    logoUrl: "https://pbs.twimg.com/profile_images/2825870211/5c2e994c25fb347543f8fe5924657274_400x400.png",
    }).then(function(space){
        RamenShop = space.dataValues;
        console.log('_____________________________________________________________');
              models.Menu.create({
                  name: "Tsukemen",
                  bevItems: ['Beer', 'Soda', 'Water'],
                  foodItems: ['Tsukemen ramen', 'Donburi', 'Pickles', 'Mochi'],
                  costPerPerson: 30.00,
                  SpaceId: RamenShop.id,
                  imageUrl: 'http://cdn-image.foodandwine.com/sites/default/files/original-201310-HD-best-ramen-shops-ramen-shop.jpg'
              }).then(function(menu){
                  lunchMenu = menu.dataValues;
                  console.log('_____________________________________________________________');
                  console.log('\n');
                  models.Menu.create({
                    name: 'Tamarind Pork Ribs',
                    bevItems: ['Beer', 'Wine', 'Sparkling Water'],
                    foodItems: ['Tamarind Pork Ribs', 'Fried Rice', 'Chicory Salad', 'Walnut Torte'],
                    costPerPerson: 34.00,
                    SpaceId: RamenShop.id,
                    imageUrl: 'http://static01.nyt.com/images/2014/05/04/fashion/05OAKLAND1/05OAKLAND1-master315.jpg'
                }).then(function(menu){
                    dinnerMenu = menu.dataValues;
                      models.Event.create({
                      SpaceId: RamenShop.id,
                      UserId: null,
                      date: new Date(), 
                      time: "6:00pm", 
                      totalGuests: 0, 
                      cost: 0, 
                      specialRequests: null, 
                      inviteList: null, 
                      barTab: 0
                    }).catch(function(err) {
                        console.log(err);
                    });
                  });
                }).catch(function(err) {
                    console.log(err);
                });
      }).catch(function(err) {
        console.log(err);
      });




})();             