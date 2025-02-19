

/* ///FUNCTION TYPES EXPRESSIONS// Define a function type called `greetingType`
    // It represents a function that takes a `string` parameter (named `message`) and returns `void` (no return value).
type greetingType = (message: string) => void;

// Define a higher-order function called `greeting`
// It takes one parameter:
// 1. `a`: A function of type `greetingType` (i.e., a function that accepts a string and returns void).
const greeting = (a: greetingType) => { 
    // Get the current hour using the `Date` object
    const currentHour = new Date().getHours();

    // Determine the greeting message based on the current hour
    let message: string;
    if (currentHour < 12) {
        message = "Good Morning!";
    } else {
        message = "Good Afternoon!";
    }

    // Call the function `a` and pass the `message` to it
    a(message);
};

// Define a function called `logMessage`
// It takes a `string` parameter (named `message`) and logs it to the console.
const logMessage = (message: string) => {
    console.log(message);
}

// Call the `greeting` function and pass `logMessage` as the function (`a`).
// This will result in `logMessage` being called with either "Good Morning!" or "Good Afternoon!".
greeting(logMessage); */


/* /////////////CALL SIGNATURES
// In JavaScript/TypeScript, functions are objects, functions can have properties
function example() { }
example.someProperty = "hello"  // This is valid!

type DescribableFunction = {
    description: string;        // A property the function must have
    (someArg: number): boolean; // The function's call signature
  };

// This function expects a function that matches our type
function doSomething(fn: DescribableFunction) {
    // Uses both the function call and its property
    // Log the function's `description` property and the result of calling the function with `6`.
    console.log(fn.description + " returned " + fn(6));
}

// Define a function `myFunc` that matches the call signature of `DescribableFunction`.

function myFunc(someArg:number) {
    return someArg > 3
}

// Add a `description` property to `myFunc`.
myFunc.description = "default description";

// Call `doSomething` with `myFunc`.
doSomething(myFunc); */

/* ///////////////CONSTRUCT SIGNATURES///////

//==SOME FUNCTIONS CAN BE INVOKED WITH THE NEW KEYWORD//    
//they are called CONSTRUCTORS because typically they create new objects/
//in TS such fns are described using construct signatures//


//define a  type 'someconstructor'
//// - It can be invoked with `new`.
// - It takes a single parameter `s` of type `string`.
// - It returns an object of type `SomeObject`.
type SomeObject = {
    message: string;
  };

type SomeConstructor = {
    new (s: string): SomeObject;
};
// Define a function `fn` that takes a constructor (`ctor`) of type `SomeConstructor`.
// The function invokes the constructor with `new` and passes the string "hello".
function func(ctor: SomeConstructor) {
    return new ctor("hello");
  }

// ==================================================
// Example 2: Combining Call and Construct Signatures
// ==================================================
interface CallOrConstruct {
    (n?: number): string; // Call signature
    new (s: string): Date; // Construct signature
  }

function fn(ctor: CallOrConstruct) {
    // Call the function without `new`:
    // - This matches the **call signature** in the `CallOrConstruct` interface.
    // - Passes the number `10` to `ctor`.
    // - Logs the result, which is a `string`.
    console.log(ctor(10));
    // Call the function with `new`:
    // - This matches the **construct signature** in the `CallOrConstruct` interface.
    // - Passes the string `"10"` to `ctor`.
    // - Logs the result, which is a `Date` object.
    console.log(new ctor("10"));
}
fn(Date);
// ==================================================
// Expected Output
// ==================================================
// When you run this code, the output will look something like this:
// 1. The result of calling `Date(10)` (a string representation of the current date):
//    "Wed Oct 18 2023 14:30:00 GMT+0000 (Coordinated Universal Time)"
// 2. The result of calling `new Date("10")` (a `Date` object):
//    2023-10-18T14:30:00.000Z

 */


//============
//Generic Functions
//=====
//In TypeScript, generics are used when we want to describe a correspondence between two values.
// // We do this by declaring a type parameter in the function signature:
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0]
}
// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);


//working with mutliple type parameters
function pair<T,U>(first: T,second: U): [T,U] {
    return [first,second]
}
const pair1 = pair(1,"hello") // [number, string]
const pair3 = pair(true,["hello",",you","r2-d2"])//[boolean,string[]]