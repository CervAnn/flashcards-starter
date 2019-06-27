const prototypeData = [{
  "id": 1,
  "question": "What allows you to define a set of related information using key-value pairs?",
  "answers": ["object", "array", "function"],
  "correctAnswer": "object"
}, {
  "id": 2,
  "question": "What is a comma-separated list of related values?",
  "answers": ["array", "object", "function"],
  "correctAnswer": "array"
}, {
  "id": 3,
  "question": "What type of prototype method directly modifies the existing array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}, {
  "id": 4,
  "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "accessor method"
}, {
  "id": 5,
  "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "iteration method"
}, {
  "id": 6,
  "question": "What is an example of a mutator method?",
  "answers": ["sort()", "map()", "join()"],
  "correctAnswer": "sort()"
}, {
  "id": 7,
  "question": "Which array prototype is not an accessor method?",
  "answers": ["join()", "slice()", "splice()"],
  "correctAnswer": "splice()"
}, {
  "id": 8,
  "question": "What do iterator methods take in as their first argument?",
  "answers": ["callback function", "current element", "an array"],
  "correctAnswer": "callback function"
}, {
  "id": 9,
  "question": "What does the callback function for find() return?",
  "answers": ["boolean", "array", "object"],
  "correctAnswer": "boolean"
}, {
  "id": 10,
  "question": "Which iteration method returns the first array element where the callback function returns true",
  "answers": ["find()", "filter()", "forEach()"],
  "correctAnswer": "find()"
}, {
  "id": 11,
  "question": "Which iteration method returns a new array with all elements that match a given condition?",
  "answers": ["filter()", "find()", "map()"],
  "correctAnswer": "filter()"
}, {
  "id": 12,
  "question": "Which iteration method returns an array of the same length as the original array?",
  "answers": ["map()", "forEach()", "reduce()"],
  "correctAnswer": "map()"
}, {
  "id": 13,
  "question": "The callback function for map() returns a modified version of the current element.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 14,
  "question": "Which iteration method can turn an array into a single value of any data type?",
  "answers": ["reduce()", "map()", "filter()"],
  "correctAnswer": "reduce()"
}, {
  "id": 15,
  "question": "The callback function for reduce() takes in an accumulator and a current element.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 16,
  "question": "What does the callback function for reduce() return?",
  "answers": ["the accumulator", "the current element", "the initializer"],
  "correctAnswer": "the accumulator"
}, {
  "id": 17,
  "question": "What does the reduce() method take in?",
  "answers": ["callback function and initializer", "callback function and current element", "callback function and accumulator"],
  "correctAnswer": "callback function and initializer"
}, {
  "id": 18,
  "question": "What does the callback function for the map() method take in?",
  "answers": ["current element", "initializer", "boolean"],
  "correctAnswer": "current element"
}, {
  "id": 19,
  "question": "What does the callback function for filter() return?",
  "answers": ["boolean", "an array of the same length", "a single value of any data type"],
  "correctAnswer": "boolean"
}, {
  "id": 20,
  "question": "forEach() returns an array",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 21,
  "question": "Which iteration method is best for DOM manipulation?",
  "answers": ["forEach()", "map()", "reduce()"],
  "correctAnswer": "forEach()"
}, {
  "id": 22,
  "question": "Which prototype method is used to iterate over each property of an object?",
  "answers": ["Object.keys()", "Object.values()", "reduce()"],
  "correctAnswer": "Object.keys()"
}, {
  "id": 23,
  "question": "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?",
  "answers": ["Object.assign()", "Object.keys()", "filter()"],
  "correctAnswer": "Object.assign()"
}, {
  "id": 24,
  "question": "Object.assign() can take in an indefinite amount of arguments",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 25,
  "question": "Arrays are specialized objects where the keys are ordered numbers.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 26,
  "question": "shift(), unshift(), pop(), and push() are examples of what type of array property method?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}, {
  "id": 27,
  "question": "Accessor methods permanently modify the original array, mutator methods do not.",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 28,
  "question": "Which prototype method returns an array of an object's property values?",
  "answers": ["Object.keys()", "Object.values()", "Object.assign()"],
  "correctAnswer": "Object.keys()"
}, {
  "id": 29,
  "question": "map() takes in two optional arguments: the index of the current element, and the array that map was called upon",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 30,
  "question": "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",
  "answers": ["prototype method", "object", "callback function"],
  "correctAnswer": "prototype method"
}];

// [{
//   "id": 31,
//   "question": "Which is not a \"Game of Thrones\" royal family name?",
//   "answers": ["Stark", "Tyrell", "Targaryen", "Baelish"],
//   "correctAnswer": "Baelish"
// },
// {
//   "id": 32,
//   "question": "Sandor Clegane is known as",
//   "answers": ["The Hound", "The Mountain", "The Kingslayer", "The Beast"],
//   "correctAnswer": "The Hound"
// },
// {
//   "id": 33,
//   "question": "Bran Stark is paralyzed following a fall, who pushed him?",
//   "answers": ["Tyrion Lannister", "Jaime Lannister", "Joffery Baratheon", "Cersei Lannister"],
//   "correctAnswer": ""
// },
// {
//   "id": 34,
//   "question": "What is the name of Arya Stark\'s sword?",
//   "answers": ["Oathkeeper", "Ice", "Needle", "Death"],
//   "correctAnswer": "Needle"
// },
// {
//   "id": 35,
//   "question": "What is House Lannister\'s motto?",
//   "answers": ["A Lannister always pays their debts", "Fire and Blood", "Hear Me Roar", "Winter is Coming"],
//   "correctAnswer": "Hear Me Roar"
// },
// {
//   "id": 36,
//   "question": "Who gave Danenerys the dragon eggs and why?",
//   "answers": ["Jorah Mormont was professing his love", "Magister Illyrio gave them to her as a wedding gift", "Tyrion Lannister as proof of his fidelity to her", "She found them in the desert as she followed her brother to the Dothraki"],
//   "correctAnswer": "Magister Illyrio gave them to her as a wedding gift"
// },
// {
//   "id": 37,
//   "question": "According to Bran, \"chaos is ...\"",
//   "answers": ["a staircase", "a ladder", "Inevitable", "a way of life"],
//   "correctAnswer": "a ladder"
// },
// {
//   "id": 38,
//   "question": "Which of the following is not one of Daenerys' original dragons?",
//   "answers": ["Drogon", "Rhaegal", "Viserion", "Khal"],
//   "correctAnswer": "Khal"
// },
// {
//   "id": 39,
//   "question": "Who are Jon Snow's parents?",
//   "answers": ["Lyanna Stark and Rhaeger Targaryen", "Lyanna Stark and King Aerys II Targaryen", "Lyanna Stark and Robert Baratheon", "Elia Martell and Rhaeger Targeryen"],
//   "correctAnswer": "Lyanna Stark and Rhaeger Targaryen"
// },
// {
//   "id": 40,
//   "question": "Bran Stark has transformed into a seer called ...",
//   "answers": ["The All Seeing", "The Three-Eyed Raven", "The Younger", "Hodor"],
//   "correctAnswer": "The Three-Eyed Raven"
// }];

module.exports = {
  prototypeData 
}