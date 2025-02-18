

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


///CALL SIGNATURES
