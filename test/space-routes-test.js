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



describe('space routes', function() {
    var testMenu1;

    beforeEach(function(done){
        console.log('___________This Happens Before Each _____________');
        models.Space.destroy({truncate: true});
  
        models.Space.create({
            name: 'Gather',
            type: 'Event Space, Bar',
            googlePlaceID: 'ChIJf-xTgMR4bIcRcnPIy94BeIw',
            owner: null,
            contactFirstName: "Pete" ,
            contactLastName: "Jeffryes",
            contactCellNumber: "510-289-1955",
            contactEmail: "pete.topleft@gmail.com",
            occupancy: 200
            }).then(function(Space){
                testSpace1 = Space.dataValues;
                console.log("Test Space: ", testSpace1)
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

    describe('*** POST /space/create', function(){
        it('should create and return a new space', function(done){
            chai.request(server)
            .post('/space/create')
            .send({
                name: 'Kannah',
                type: 'Restaurant, Brewery',
                googlePlaceID: 'ChIJ81qEAEwcR4cRe2NQBSo1Vww',
                owner: null,
                contactFirstName: "Pete" ,
                contactLastName: "Jeffryes",
                contactCellNumber: "510-289-1955",
                contactEmail: "pete.topleft@gmail.com",
                occupancy: 100
            })
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.name.should.eql('Kannah');
                res.body.should.have.property('type');
                res.body.type.should.be.a('string');
                res.body.should.have.property('contactFirstName');
                res.body.contactFirstName.should.eql('Pete');
                res.body.should.have.property('contactLastName');
                res.body.contactLastName.should.eql('Jeffryes');
                res.body.should.have.property('contactEmail');
                res.body.contactEmail.should.eql('pete.topleft@gmail.com');
                res.body.should.have.property('contactCellNumber');
                res.body.contactCellNumber.should.eql('510-289-1955');
                res.body.should.have.property('id');
                res.body.should.have.property('occupancy');
                res.body.occupancy.should.eql(100);
                done();
            });
            
        });
   });

    describe('*** PUT /space/update/:spaceId', function(){
        it('should update a space with given id', function(done){
            chai.request(server)
            .put('/space/update/'+testSpace1.id)
            .send({
                name: 'Dulce',
                type: 'Restaurant, Bar',
                googlePlaceId: 'ChIJiRq0hSx_bIcR80Kgl-AO_-Y',
                owner: null,
                contactFirstName: "Pete" ,
                contactLastName: "Jeffryes",
                contactCellNumber: "510-289-1955",
                contactEmail: "pete.topleft@gmail.com",
                occupancy: 100
            })
            .end(function(err, res){                
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.name.should.eql('Dulce');
                res.body.should.have.property('type');
                res.body.type.should.be.a('string');
                res.body.should.have.property('googlePlaceID');
                res.body.googlePlaceID.should.be.a('string');
                res.body.should.have.property('contactFirstName');
                res.body.contactFirstName.should.eql('Pete');
                res.body.should.have.property('contactLastName');
                res.body.contactLastName.should.eql('Jeffryes');
                res.body.should.have.property('contactEmail');
                res.body.contactEmail.should.eql('pete.topleft@gmail.com');
                res.body.should.have.property('contactCellNumber');
                res.body.contactCellNumber.should.eql('510-289-1955');
                res.body.should.have.property('id');
                res.body.should.have.property('occupancy');
                res.body.occupancy.should.eql(100);
                done();
            });
            
        });
    });

    describe('*** GET /space/:space', function(done){
        
        it('should get space with that id', function(done){
            chai.request(server)
            .get('/space/'+testSpace1.id)
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.name.should.eql('Gather');
                res.body.should.have.property('type');
                res.body.type.should.be.a('string');
                res.body.should.have.property('contactFirstName');
                res.body.contactFirstName.should.eql('Pete');
                res.body.should.have.property('contactLastName');
                res.body.contactLastName.should.eql('Jeffryes');
                res.body.should.have.property('contactEmail');
                res.body.contactEmail.should.eql('pete.topleft@gmail.com');
                res.body.should.have.property('contactCellNumber');
                res.body.contactCellNumber.should.eql('510-289-1955');
                res.body.should.have.property('id');
                res.body.should.have.property('occupancy');
                res.body.occupancy.should.eql(200);
                done();
            });
        });
    });



    describe('*** DELETE /space/delete/:spaceId', function(){

        it('should delete item from DB', function(done){
            chai.request(server)
            .delete('/space/delete/'+testSpace1.id)
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.msg.should.equal('Space deleted.');
                done();
            }); 
        });
    });

});


