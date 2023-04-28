//Creating a node server

const http = require('http')  //Importing http module using require
const server = http.createServer((req,res)=>{  //Using createServer method of http module, it takes requestlistener function,anonymous function, as argument which takes 2 arguments request and response
                                               // Saved the server returned by the method in a const variable
    // console.log(req)                        // Will give all info related to request like type, headers, etc. including metadata                         
    // process.exit()                          // Closes the program
})
server.listen(3000)     //listen takes port and local host by default
//listen method starts process where node js doesn't directly exit the server and continue running the file execution as long as we don't process.exit
//Event loop keeps running as long as there are still event listeners registered that are not deregistered, in this case "req"