// var generateName = require("sillyname");
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);

import generateName from "sillyname";
import {randomSuperhero} from 'superheroes';

var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

var heroName = randomSuperhero();
console.log(`My Heroic name is ${heroName}.`);
