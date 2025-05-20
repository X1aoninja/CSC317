// Declare a variable
const message = "Hello, JavaScript!";

// Define an arrow function that prints the message to console and to the webpage
const sayHello = () => {
    console.log(message); // Print to console
    document.getElementById("output").textContent = message; // Print to webpage
};

// Make sure the function is available globally
window.sayHello = sayHello;