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



describe('event routes', function() {
    var testEvent1;

    beforeEach(function(done){
        console.log('___________This Happens Before Each _____________');
        // models.Event.destroy({truncate: true});
  
        models.Event.sync({
            force: true
        }).then(function() {
            models.Event.create({
                date: new Date(),
                time: "10:00 PM",
                totalGuests: 10,
                cost: 500,
                specialRequests: "Special things please.",
                inviteList: null,
                barTab: 200
                }).then(function(event){
                    testEvent1 = event.dataValues;
                    console.log('_____________________________________________________________');
                    console.log('\n');
                    done();
                });
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

    describe('*** POST /event/create', function(){
        it('should return a user object', function(done){
            chai.request(server)
            .post('/event/create')
            .send({
                date: new Date(),
                time: "8:00 PM",
                totalGuests: 20,
                cost: 1000,
                specialRequests: "Special things please.",
                inviteList: null,
                barTab: 500
            })
            .end(function(err, res){
                console.log(res.body)
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('date');
                res.body.date.should.be.a('string');
                res.body.should.have.property('cost');
                res.body.cost.should.eql(1000);
                res.body.should.have.property('totalGuests');
                res.body.totalGuests.should.eql(20);
                res.body.should.have.property('inviteList');
                res.body.should.have.property('id');
                done();
            });
            
        });
   });

    describe('*** PUT /event/update/:eventId', function(){
        it('should return a user object', function(done){
            chai.request(server)
            .put('/event/update/'+testEvent1.id)
            .send({
                date: new Date(),
                time: "8:00 PM",
                totalGuests: 20,
                cost: 1000,
                specialRequests: "Special things please.",
                inviteList: null,
                barTab: 500
            })
            .end(function(err, res){ 
                console.log(err,res.body)               
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('date');
                res.body.should.have.property('cost');
                res.body.cost.should.eql(1000);
                res.body.should.have.property('totalGuests');
                res.body.totalGuests.should.eql(20);
                res.body.should.have.property('inviteList');
                res.body.should.have.property('id');
                done();
            });
            
        });
    });

    describe('*** GET /event/:eventId', function(done){
        
        it('should get event with id', function(done){
            chai.request(server)
            .get('/event/'+testEvent1.id)
            .end(function(err, res){
                console.log(err, res.body)
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('date');
                res.body.should.have.property('cost');
                res.body.cost.should.eql(500);
                res.body.should.have.property('totalGuests');
                res.body.totalGuests.should.eql(10);
                res.body.should.have.property('inviteList');
                res.body.should.have.property('id');
                done()
            });
        });
    });



    describe('*** DELETE /event/delete/:eventId', function(){

        it('should delete item from DB', function(done){
            chai.request(server)
            .delete('/event/delete/'+testEvent1.id)
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.msg.should.equal('Event deleted.');
                done();
            }); 
        });
    });

});


