const chai = require('chai');
const chaiHttp = require('chai-http');

const {app} = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

let foo = "halksdjhfalsdjfh";

describe('users', function(){
    it("should list items on GET", function() {
        return chai
          .request('http://localhost:8080')
          .get("/")
          .then(function(res) {
            expect(res).to.have.status(200); 
          });
      });
    


});