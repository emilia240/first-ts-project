

// Assignment 0 Example : return the area of a circle
const circ = (diameter: number) => {
  return diameter * Math.PI;  // your code 
};

// console.log(area('hello'));
console.log(circ(7.5)); 




// Assignment 1 : Variable Declaration (explicitly declare types)
// Declare 2 variables to store a name and age.

// Your code here : variable declaration
const name: string = "Stitch";
const age: number = 10;


console.log(`My name is ${name} and I am ${age} years old.`);



// Assignment 2 : Type Annotation and Inference
// Infer types and explicitly annotate types for variables.
// name of variables: favoriteMovie, releaseYear

// Your code here : 1 type annotation and 1 type inference

const favoriteMovie: string = "Moana";
const releaseYear = 2019;

console.log(`My favorite movie is ${favoriteMovie} released in ${releaseYear}.`);



// Assignment 3 : Functions and Parameters
// Create a function that calculates the area of a rectangle.

// Your code here : function calculateArea() {} + add function signature

const width = 5;
const height = 10;
console.log(`The area of the rectangle is ${calculateArea(width, height)}.`);

function calculateArea(width: number, height: number): number {
    return width * height;
}

//Assignment 3.5 : Object Params, add two numbers 
//Create a function that takes an object with two number properties as arguments and prints the sum of those numbers.

// Your code here : function AddNumbers() {} // pass the obj as an argument and return the sum ( + add function signature)  

const obj = { 
    a: 1,
    b: 2 
};

function AddNumbers(obj: { a: number, b: number }): number {
    return obj.a + obj.b;
}


console.log(AddNumbers(obj));



// Assignment 4 : Arrays and Loops
// Create an array of favorite colors and print each color using a loop.

// Your code here : array declaration + add 3 colors as strings
const myFavoriteColors: string[] = ["blue", "purple", "green"];
// Your code here : for loop to print each color with console.log() 

for (let i = 0; i < myFavoriteColors.length; i++) {
    console.log(myFavoriteColors[i]);
}

for (const color of myFavoriteColors) {
    console.log(color);
} //other way


// Assignment 5 : Conditional Logic
// Create a function that checks if a number is positive.

// Your code here : function isPositive() {} + add function signature and return statement

const num: number = 1;
console.log(`Is ${num} positive? ${isPositive(num) ? 'Yes' : 'No'}`);

function isPositive(num: number): boolean {
    return num > 0;
}
//: boolean after the parentheses means the function will return either true or false.


// Assignment 6 : Objects and Interfaces
// Create an interface for a person and use it to define an object + print the person's name and age.

// Your code here : interface Person {} // define 3 properties: firstName, lastName, age
interface PersonStuff {
  firstName: string;
  lastName: string;
  age: number;
}//this is a template
// Your code here : object person with 3 properties and values :: const person = {...assign data here} 

const person: PersonStuff = {
  firstName: "Lilo",
  lastName: "Pelekai",
  age: 7
}


console.log(`Person: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

//An interface in TypeScript is a way to describe the shape of an object. 
// It tells TypeScript what properties an object should have and what types those properties are.
//It helps catch mistakes early (TypeScript will warn you if you forget a property or use the wrong type).
//Interfaces are used for objects only (not for numbers, strings, etc.).



// Assignment 7.0: Union Type
// Define a Union type that can be either a number or a string.

// Your code here : type NumberOrString
type NumberOrString= number | string;

//DO NOT use "any"

// Your code here : 2 variables with declaration and assignments, one with a number and one with a string

const value1: NumberOrString = 20;
const value2: NumberOrString = "Hello, bitches!";


console.log(value1);
console.log(value2);


//type lets you create a new name for a type.
//number | string means "can be a number OR a string". This is called a union type.




// Assignment 8 : Optional Properties
// Define an interface for a book with an optional author property.

// Your code here : interface Book with optional property author + title is required

interface Book {
  title: string;
  author?: string; // optional property
}//template


const book1: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald"
};

const book2: Book = {
  title: "To Kill a Mockingbird"
};

// One Flew Over the Cuckoo's Nest - Af Ken Kesey

console.log(book1);
console.log(book2);


//In TypeScript, an optional property is a property that may or may not be present in an object.
//You make a property optional by adding a ? after its name in the interface.





// Assignment 9 : Union Type and Intersection Types 
// Read the code and understand the output and the types used. Grasp the concept of Union and Intersection types.
// Once read&understood, try to rewrite type Person so it can be either a Person or undefined so we dont have to define a separate type for undefined.

// Define the Person type
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

// Define the Address type
type Address = {
  street: string;
  city: string;
};

// Define the UnionPerson type as a union of Person and undefined
type UnionPerson = Person | undefined;
//declaring undeefined for errors
// Define the IntersectionPerson type as an intersection of Person and Address
type IntersectionPerson = Person & Address;


// Example usage
const person1: UnionPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

const person2: UnionPerson = undefined;

const person3: IntersectionPerson = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
  street: "123 Main St",
  city: "Anytown"
};



console.log(person1); // Output: { firstName: 'John', lastName: 'Doe', age: 30 }
console.log(person2); // Output: undefined
console.log(person3); // Output: { firstName: 'Jane', lastName: 'Smith', age: 25, street: '123 Main St', city: 'Anytown' }

// console.log(`Union Person: ${unionPerson?.firstName} ${unionPerson?.lastName}, Age: ${unionPerson?.age}`);



//Intersection types (&) combine two types into one
//I have no idea what Kristian wants here:)))