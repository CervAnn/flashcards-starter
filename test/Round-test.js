const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should accept a deck of cards as a parameter', function() {
    expect(round.deck).to.deep.eql([card1, card2, card3]);
  }); 

  it('should identify the current card as the first card in the deck', function() {
    expect(round.deck[0]).to.deep.eql({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  }); 

  it('should return the initial number of turns', function() {
  expect(round.turns).to.be.equal(0);
  }); 

  it('should return an initially empty array of incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.eql([]);
    }); 

  it('should return the card currently in play', function() {
    expect(round.returnCurrentCard()).to.deep.eql({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  }); 

  it('should identify the current card as the first card in the deck', function() {
    expect(round.returnCurrentCard()).to.deep.eql({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  }); 

  it('should provide feedback on the guess', function() {
    expect(round.takeTurn('capybara')).to.equal('incorrect!');
  }); 

  it('should push the card id for an incorrect guess into array', function() {
    round.takeTurn('capybara')
    expect(round.incorrectGuesses).to.deep.eql([1]);
  }); 

  it('should remove the guessed card from the deck', function() {
    round.takeTurn('capybara')
    expect(round.deck).to.deep.eql([card2, card3]);
    expect(round.deck[0]).to.deep.eql({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    expect(round.deck[1]).to.deep.eql({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});
  }); 

  it('should move to the next card after a turn has been taken', function() {
    round.takeTurn('capybara');
    expect(round.returnCurrentCard()).to.eql({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
  }); 

  it('should process the guess for the current card', function() {
    round.takeTurn('capybara');
    expect(round.takeTurn('gallbladder')).to.eql('correct!');
  }); 

  it('should count the number of turns', function() {
    round.takeTurn('capybara');
    round.takeTurn('gallbladder');
    expect(round.turns).to.eql(2);
  }); 

  it('should calculate the percent correct', function() {
    round.takeTurn('capybara');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap')
    expect(round.calculatePercentCorrect()).to.equal(Math.round(67));
  });
  
  
});