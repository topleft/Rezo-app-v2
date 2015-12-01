process.env.NODE_ENV = 'test';

var server = require('../src/server/app');
var config = require('../_config')
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



describe('google auth route', function() {
    var test1User;

    beforeEach(function(done){
        console.log('___________This Happens Before Each _____________');
        models.User.destroy({truncate: true})
        .then(function(){
            done()
        });

        
        // models.User.create({
        //     email: 'test1@test.com',
        //     password: 'test1'
        //     }).then(function(user){
        //         test1User = user;
        //         models.Todo.create({
        //             title: 'Test 1 Todo',
        //             text: '1111111. This is a test todo. I am writing a program with the MEAN Stack, but using postres instead of mongoDB.',
        //                 UserId: test1User.id
        //         }).then(function(todo){
        //             test1Todo = todo;
        //             console.log('_____________________________________________________________');
        //             console.log('\n');
        //             done();
        //     });
        // }); 
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

    describe('*** POST /auth/google', function(){
        it('should create a user object', function(done){
            chai.request(server)
            .post('/auth/google')
            .send({
               code: '',
               client_id: '633292235461-i4544m3kiiis6qsltkpiiu314br179v5.apps.googleusercontent.com',
               client_secret: config.GOOGLE_SECRET,
               redirect_uri: 'http://localhost:3000',
               grant_type: 'authorization_code'
             })
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('email');
                res.body.should.have.property('googleProfileID');
                res.body.should.have.property('username');
                done();
            });
            
        });
       
    });


});

