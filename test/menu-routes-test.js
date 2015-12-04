process.env.NODE_ENV = 'test';

var server = require("../src/server/app");
var mocha = require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
var request = require('request');
var should = chai.should();
chai.use(chaiHttp);

var models = require('../src/server/models/index');

console.log('\n');
console.log('=====================================================');
console.log('=================     new test   ====================');
console.log('=====================================================');



describe('menu routes', function() {
    var testMenu1;
    var testSpace1;

    beforeEach(function(done){
        console.log('___________This Happens Before Each _____________');

        models.Space.sync({
            force: true
            }).then(function() {
                models.Space.create({
                    name: 'Gather',
                    type: 'Event Space, Bar',
                    googlePlaceID: 'ChIJf-xTgMR4bIcRcnPIy94BeIw',
                    contactFirstName: "Pete" ,
                    contactLastName: "Jeffryes",
                    contactCellNumber: "510-289-1955",
                    contactEmail: "pete.topleft@gmail.com",
                    occupancy: 200
                    }).then(function(space){
                        testSpace1 = space.dataValues;
                        console.log("Test Space: ", testSpace1);
                        models.Menu.sync(
                            {force: true
                            }).then(function() {
                                models.Menu.create({
                                    bevItems: ['Beer', 'Soda', 'Water'],
                                    foodItems: ['Hamburger', 'Fries', 'Salad'],
                                    costPerPerson: 20.00,
                                    SpaceId: testSpace1.id
                                }).then(function(menu){
                                    testMenu1 = menu.dataValues;
                                    console.log('_____________________________________________________________');
                                    console.log('\n');
                                    done()  
                                }).catch(function(err) {
                                    console.log(err)
                                    done()
                                });              
                        })
                    })
        })
    }); 



    describe('*** /', function(){
        
        it('should return 200', function(done){
            chai.request(server)
            .get('/')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });       
        });
    });

    describe('*** POST /menu/create', function(){
        it('should return a user object', function(done){
            chai.request(server)
            .post('/menu/create')
            .send({
                bevItems: ['Pale', 'Buffalo Trace', 'Sparkling'],
                foodItems: ['Pizza', 'Pesto Chip', 'Hummus'],
                costPerPerson: 25.00,
                SpaceId: testSpace1.id
            })
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('bevItems');
                res.body.bevItems.should.be.a('array');
                res.body.bevItems.length.should.eql(3);
                res.body.should.have.property('foodItems');
                res.body.bevItems.should.be.a('array');
                res.body.bevItems.length.should.eql(3);
                res.body.should.have.property('id');
                res.body.should.have.property('costPerPerson');
                res.body.costPerPerson.should.eql(25.00);
                done();
            });
            
        });
   });

    describe('*** PUT /menu/update/:menuId', function(){

        // beforeEach(function(done){
        //     models.Menu.create({
        //                 bevItems: ['Beer', 'Soda', 'Water'],
        //                 foodItems: ['Hamburger', 'Fries', 'Salad'],
        //                 costPerPerson: 20.00,
        //                 SpaceId: testSpace1.id,
        //                 spaceId: null
        //         }).then(function(menu){
        //             console.log(menu)
        //             testMenu1 = menu.dataValues;
        //             console.log('_____________________________________________________________');
        //             console.log('\n');
        //             done()  
        //         }).catch(function(err) {
        //             console.log(err)
        //             done()
        //         });
        //     });

        it('should return a user object', function(done){
            chai.request(server)
            .put('/menu/update/'+testMenu1.id)
            .send({
                bevItems: ['Stout', 'Pale', 'Buffalo Trace', 'Sparkling'],
                foodItems: ['Wings', 'Pizza', 'Pesto Chip', 'Hummus'],
                costPerPerson: 30.00
            })
            .end(function(err, res){                
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('bevItems');
                res.body.bevItems.should.be.a('array');
                res.body.bevItems.length.should.eql(4);
                res.body.should.have.property('foodItems');
                res.body.bevItems.should.be.a('array');
                res.body.bevItems.length.should.eql(4);
                res.body.should.have.property('id');
                res.body.should.have.property('costPerPerson');
                res.body.costPerPerson.should.eql(30.00);
                done();
            });
            
        });
    });

    describe('*** GET /menu/:menuId', function(done){
        
        it('should get all menus with space name', function(done){
            chai.request(server)
            .get('/menu/'+testMenu1.id)
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('bevItems');
                res.body.bevItems.should.be.a('array');
                res.body.bevItems.length.should.eql(3);
                res.body.should.have.property('foodItems');
                res.body.bevItems.should.be.a('array');
                res.body.bevItems.length.should.eql(3);
                res.body.should.have.property('id');
                res.body.should.have.property('costPerPerson');
                res.body.costPerPerson.should.eql(20.00);
                done();
            });
        });
    });



    describe('*** DELETE /menu/delete/:menuId', function(){

        it('should delete item from DB', function(done){
            chai.request(server)
            .delete('/menu/delete/'+testMenu1.id)
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.msg.should.equal('Menu deleted.');
                done();
            }); 
        });
    });

});


