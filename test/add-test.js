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