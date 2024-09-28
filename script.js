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

// Exercise 3
// Arrow function to handle event booking with default parameter for eventType
const bookEvent = (userName, eventType = 'General Admission') => {
    return `${userName}, you have successfully booked the ${eventType} event.`;
};

// Function to get the values from input fields and dropdown
const getEventDetails = () => {
    const userName = document.getElementById('eventUserName').value; // Get the user's name
    const eventType = document.getElementById('eventType').value; // Get the selected event
    return { userName, eventType };
};

// Event listener for the booking button
document.getElementById('bookEventBtn').addEventListener('click', () => {
    const { userName, eventType } = getEventDetails(); // Get user and event details
    if (userName) {
        const bookingMessage = bookEvent(userName, eventType || undefined); // Call the booking function
        document.getElementById('eventResult').innerText = bookingMessage; // Display the booking result
    } else {
        document.getElementById('eventResult').innerText = 'Please enter your name to book an event.'; // Handle empty name input
    }
});

// Exercise 4
// Arrow function to destructure user details from an object
const showUserDetails = ({ name, age, email }) => {
    return `User Name: ${name}, Age: ${age}, Email: ${email}`;
};

// Arrow function to destructure product details from an array
const showProductDetails = ([productName, price, quantity]) => {
    return `Product: ${productName}, Price: $${price}, Quantity: ${quantity}`;
};

// Event listener for showing user details
document.getElementById('showUserDetailsBtn').addEventListener('click', () => {
    const userName = document.getElementById('destructUserName').value;
    const userAge = document.getElementById('destructUserAge').value;
    const userEmail = document.getElementById('destructUserEmail').value;
    
    // Create an object representing the user
    const user = { name: userName, age: userAge, email: userEmail };
    
    if (userName && userAge && userEmail) {
        const userDetailsMessage = showUserDetails(user); // Destructure and display user details
        document.getElementById('destructuringResult').innerText = userDetailsMessage;
    } else {
        document.getElementById('destructuringResult').innerText = 'Please fill in all user details.';
    }
});

// Event listener for showing product details
document.getElementById('showProductDetailsBtn').addEventListener('click', () => {
    const productString = document.getElementById('productDetails').value;
    
    if (productString) {
        const productArray = productString.split(','); // Split the string into an array
        const productDetailsMessage = showProductDetails(productArray); // Destructure and display product details
        document.getElementById('destructuringResult').innerText = productDetailsMessage;
    } else {
        document.getElementById('destructuringResult').innerText = 'Please enter product details in the correct format.';
    }
});
