function fetchData() 
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Some data";
            resolve(data); // Resolve the promise with the data
        }, 2000);
    });
}

function processData(data) 
{
    console.log("Data received:", data);
}

// Using .then() to handle the resolved promise
fetchData().then(processData).catch((err) => console.error(err));
