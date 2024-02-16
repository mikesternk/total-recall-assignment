/* 1. Q + A
    1. How do we assign a value to a variable?
        By using the assignment operator (=)
    2. How do we change the value of a variable?
        By reinitializing the variable to a new value.
    3. How do we assign an existing variable to a new variable?
        By using the assignment operator and calling the new variable to the existing variable.
    4. Remind me, what are declare, assign and define?
        Declare - Creating a variable 
        Assign - Involves giving a variable a specific value.
        Define - This uses both declaration and assignment in a single step.
    5. What is pseudocoding and why should you do it?
        Pseudocoding is like sketching out your ideas for a program in plain language before diving into the technical details, helping you understand and organize your thoughts before actual coding.
    6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
        I believe you should spend more of your time coding. However planning and brainstorming is aslo important and should not be overlooked. */

// B. STRINGS
// 1. Create a variable called firstVariable
let firstVariable;

// 2. Assign it the value of the string "Hello World"
firstVariable = "Hello World";

// 3. Change the value of this variable to some number
firstVariable = 42;

// 4. Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;

// 5. Change the value of secondVariableto any string.
secondVariable = "Howdy";

// 6. What is the value of firstVariable?
// The value of firstVariable is 42

// 7. Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourNameand = "Michael Kimani";
let sentence = `Hello, my name is ${yourNameand}`;

// C. BOOLEANS
// All console logs should return true
const a = 4; const b = 5; const c = 57; const d = 16; const e = 'Kevin';
console.log(a <= b);
console.log(c > d);
console.log('Name' === 'Name');

// for the next two lines, use only && or ||
console.log(true || false);
console.log(false || false || false || false || false || true);

console.log(false == false);
console.log(e == 'Kevin');
console.log(a + b !== c);
console.log(a * a === d);
console.log(48 == '48');

// D. THE FARM
// 1. Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";

// 2. Write code that will print out "mooooo" if the it is equal to cow
if (animal == "cow") {
    console.log("mooooo")
}

// 3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
if (animal == "cow") {
    console.log("mooooo")
} else {
    console.log("Hey! You're not a cow.")
}

// 4. Commit