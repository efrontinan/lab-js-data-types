/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

let tongueTwister = s1 + ' ' + s2 + ' ' + s3 + ' ' + s4 + ' ' + s5 +  ' ' + s3 + ' ' + s2 + ' ' + s1 + ' ' + s4 

// Print out the concatenated string

console.log(tongueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

/*const last_part1 = part1.slice(-1)
const last_part1Cap = last_part1.toUpperCase()
const remainingLetters_part1 = part1.slice(0,-1)

const last_part2 = part2.slice(-1)
const last_part2Cap = last_part2.toUpperCase()
const remainingLetters_part2 = part2.slice(0,-1)

const result = remainingLetters_part1 + last_part1Cap + remainingLetters_part2 + last_part2Cap*/

const result2 = `${part1.slice(0,-1)}${part1.charAt(part1.length -1).toUpperCase()}${part2.slice(0,-1)}${part2.charAt(part2.length -1).toUpperCase()}`


// Print the cameLtaiL-formatted string

/*console.log(result)*/
console.log(result2)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tipAmount= billTotal*0.15

// Print out the tipAmount

console.log(tipAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNumber = Math.random (10)
//const randomNumber = Math.floor (random*10)

// Print the generated random number

console.log(`${Math.floor(randomNumber*10)}`)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false

const expression2 = a || b; //true

const expression3 = !a && b; //false

const expression4 = !(a && b); //true

const expression5 = !a || !b; //true

const expression6 = !(a || b); //false

const expression7 = a && a; //true

console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)