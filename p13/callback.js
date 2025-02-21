function greetUser(name, callback)
{
    console.log(`Hello, ${name}!`);
    callback();
}



greetUser("Ram Menon",  ()=> //callback function
{
    console.log("Welcome to Node.js!");
}); //here, displayMessage() is passed as an argument to greetUser()
