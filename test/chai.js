const chai = require('chai');
const expect = chai.expect;

describe('chai test', () =>{
   it('should compare some values', ()=>{
      expect(1).to.equal(1);
      expect({name:'Aleks'}).to.deep.equal({name:'Aleks'});
      expect({name:'Aleks'}).to.have.property('name').to.equal('Aleks');
      expect(5 > 8).to.be.false;
      expect({}).to.be.a('object');
      expect('test').to.be.a('string');
      expect(3).to.be.a('number');
      expect('test').to.be.a('string').with.lengthOf(4);
      expect([1,2,3].length).to.equal(3);
      expect(null).to.be.null;
      expect(undefined).to.not.exist;
      expect(1).to.exist;
   });
});