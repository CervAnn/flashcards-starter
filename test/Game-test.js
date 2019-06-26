const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should begin with a currentRound of 0', function() {
    const game = new Game();
    expect(game.roundCount).to.equal(0);
  });
  
  it('should push cards into deck', function() {
    const game = new Game();
    game.start()
    const deck = new Deck(prototypeQuestions)
    expect(deck.cards.length).to.deep.eql(30);
  });

});