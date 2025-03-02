const apiRequest = require("./ApiRequest")



const getRequest = new apiRequest();
getRequest.method = "GET" ; 
getRequest.send("https://api.example.com/users");


const postRequest = getRequest.clone();

postRequest.method = "POST";

postRequest.send("https://api.example.com/users");





