function greetUserAsync(name, callback) 
{
    setTimeout(() => {
        console.log(`Hello, ${name}!`); // asynchronus operation
        callback(); //callback function executed after the asynchronus operation
    }, 2000); //simulates a 2 second delay
}

//callback function
function displayMessage() 
{
    console.log("Welcome to Node.js!");
}


greetUserAsync("Ram Menon", displayMessage);
console.log("This message is printed immediately."); //sync function