function fetchData(callback) 
{
    setTimeout(() => {
        const data = "Some data";
        callback(data); //calling the callback function
    }, 2000);
}

function processData(data)//callback function 
{
    console.log("Data received:", data);
}

//pass processData() as an argument
fetchData(processData);
