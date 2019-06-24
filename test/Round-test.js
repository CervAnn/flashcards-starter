const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

});