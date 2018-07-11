const chai = require('chai');
const chaiHttp = require('chai-http');

const {app} = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);


describe('users', function(){
    it("should be the employee page", function() {
        return chai
          .request('http://localhost:8080')
          .get("/employee")
          .then(function(res) {
            expect(res).to.have.status(200); 
            
          });
      });

      
      it("should be the manager page", function() {
        return chai
          .request('http://localhost:8080')
          .get("/manager")
          .then(function(res) {
            expect(res).to.have.status(200); 
            
          });
      });

});



/*

const assert = require('chai').assert;
const add = require('../add');



    describe('first', function() {
        it('should add 5 and return 10', function(){
            let result = add(5);
            assert.equal(result, 10)
        });

        it('should return typof number', function(){
            let result = add(5);
            assert.typeOf(result, 'number')
        });

        
  }
);

*/