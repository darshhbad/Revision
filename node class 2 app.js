//Understanding request

const http = require('http')  
const server = http.createServer((req,res)=>{ 
    console.log(req.url,req.method,req.headers)  //Accessing url, method and headers info about request, GET is default method                         
})
server.listen(3000) 