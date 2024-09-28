// Arrow function to add two numbers
const add = (a, b) => a + b;

// Arrow function to subtract two numbers
const subtract = (a, b) => a - b;

// Arrow function to multiply two numbers
const multiply = (a, b) => a * b;

// Arrow function to divide two numbers
const divide = (a, b) => b !== 0 ? a / b : 'Cannot divide by zero'; // Checks if denominator is zero

// Function to get the values from input fields and convert them to numbers
const getNumbers = () => {
    const number1 = parseFloat(document.getElementById('number1').value); // Get first number
    const number2 = parseFloat(document.getElementById('number2').value); // Get second number
    return { number1, number2 };
};

// Add event listeners for each button to perform the respective operation
document.getElementById('addBtn').addEventListener('click', () => {
    const { number1, number2 } = getNumbers(); // Get the numbers from input fields
    const result = add(number1, number2); // Perform addition
    document.getElementById('result').innerText = `Result: ${result}`; // Display the result
});

document.getElementById('subtractBtn').addEventListener('click', () => {
    const { number1, number2 } = getNumbers();
    const result = subtract(number1, number2); // Perform subtraction
    document.getElementById('result').innerText = `Result: ${result}`;
});

document.getElementById('multiplyBtn').addEventListener('click', () => {
    const { number1, number2 } = getNumbers();
    const result = multiply(number1, number2); // Perform multiplication
    document.getElementById('result').innerText = `Result: ${result}`;
});

document.getElementById('divideBtn').addEventListener('click', () => {
    const { number1, number2 } = getNumbers();
    const result = divide(number1, number2); // Perform division
    document.getElementById('result').innerText = `Result: ${result}`;
});

// Exercise 2
// Function to greet the user using template literals
const greetUser = (userName) => `Hello, ${userName}! Welcome to our website.`;

// Function to display product info using template literals
const showProductInfo = (userName, productName) => `${userName}, you've selected the product: ${productName}. It's a great choice!`;

// Event listener for greeting the user
document.getElementById('greetUserBtn').addEventListener('click', () => {
    const userName = document.getElementById('userName').value; // Get the user's name
    if (userName) {
        const greeting = greetUser(userName); // Call the greeting function
        document.getElementById('templateResult').innerText = greeting; // Display the greeting
    } else {
        document.getElementById('templateResult').innerText = 'Please enter your name.'; // Handle empty input
    }
});

// Event listener for displaying product information
document.getElementById('productInfoBtn').addEventListener('click', () => {
    const userName = document.getElementById('userName').value; // Get the user's name
    const productName = document.getElementById('productName').value; // Get the product's name
    if (userName && productName) {
        const productMessage = showProductInfo(userName, productName); // Call the product info function
        document.getElementById('templateResult').innerText = productMessage; // Display the product info
    } else {
        document.getElementById('templateResult').innerText = 'Please enter both your name and a product.'; // Handle empty input
    }
});
