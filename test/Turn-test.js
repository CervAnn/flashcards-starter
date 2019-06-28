const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  let card;
  let turn;
  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('pug', card);
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should return the guess a user selects', function() {
    expect(turn.returnGuess()).to.equal('pug');
  }); 

  it('should return the card information', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.deep.eql({ id: 1, question: 'What is Robbie\'s favorite animal', 
      answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter' });
  }); 

  it('should evaluate the user guess against the correctAnswer', function() {
    expect(turn.evaluateGuess()).to.equal(false);
  }); 

  it('should give feedback based on whether the guess is correct', function() {
    expect(turn.giveFeedback()).to.equal('incorrect!');
  }); 

});