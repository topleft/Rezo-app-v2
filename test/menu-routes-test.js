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

    beforeEach(function(done){
        console.log('___________This Happens Before Each _____________');
        models.Menu.destroy({truncate: true});
  
        models.Menu.create({
            bevItems: ['Beer', 'Soda', 'Water'],
            foodItems: ['Hamburger', 'Fries', 'Salad'],
            costPerPerson: 20.00,
            spaceId: 1
            }).then(function(menu){
                testMenu1 = menu.dataValues;
                console.log('_____________________________________________________________');
                console.log('\n');
                done();
            });
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
                spaceId: 2
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
                res.body.should.have.property('spaceId');
                res.body.spaceId.should.eql(2);
                done();
            });
            
        });
   });

    describe('*** PUT /menu/update/:menuId', function(){
        it('should return a user object', function(done){
            chai.request(server)
            .put('/menu/update/'+testMenu1.id)
            .send({
                bevItems: ['Stout', 'Pale', 'Buffalo Trace', 'Sparkling'],
                foodItems: ['Wings', 'Pizza', 'Pesto Chip', 'Hummus'],
                costPerPerson: 30.00,
                spaceId: 3
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
                res.body.should.have.property('spaceId');
                res.body.spaceId.should.eql(3);
                done();
            });
            
        });
    });

    describe('*** GET /menu/:spaceId', function(done){
        
        it('should get all menus with space name', function(done){
            chai.request(server)
            .get('/menu/'+testMenu1.spaceId)
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.length.should.eql(1);
                res.body[0].should.have.property('bevItems');
                res.body[0].bevItems.should.be.a('array');
                res.body[0].bevItems.length.should.eql(3);
                res.body[0].should.have.property('foodItems');
                res.body[0].bevItems.should.be.a('array');
                res.body[0].bevItems.length.should.eql(3);
                res.body[0].should.have.property('id');
                res.body[0].should.have.property('costPerPerson');
                res.body[0].costPerPerson.should.eql(20.00);
                res.body[0].should.have.property('spaceId');
                res.body[0].spaceId.should.eql(1);
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


