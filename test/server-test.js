const chai = require('chai');
const chaiHttp = require('chai-http');

const {app} = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

let foo = "halksdjhfalsdjfh";

describe('users', function(){
    it("should be the home/first page", function() {
        return chai
          .request('http://localhost:8080')
          .get("/")
          .then(function(res) {
            expect(res).to.have.status(200); 
            
          });
      });
});