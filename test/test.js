
const assert = require('assert');

describe('file', () =>{
    context('function', () =>{
        // before(() =>{
        //    console.log('====BEFORE');
        // });
        // after(() =>{
        //     console.log('====AFTER');
        // });
        it('should do something', () =>{
            assert.equal(1,1);
        });

        it('should do something', () =>{
            assert.deepEqual({name: 'Aleks'},{name: 'Aleks'});
        });

        it('pending test');
    });
});