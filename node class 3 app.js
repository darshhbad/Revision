//Sending Responses

const http = require('http')  
const server = http.createServer((req,res)=>{ 
    console.log(req.url,req.method,req.headers)  
    res.setHeader('Content-Type','text/html')   //Adding meta information
    res.write('<html>') //allows to write data to response in multiple chunks/lines
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my Node.js server</h1></body>')
    res.write('</html>')
    res.end()              
})
server.listen(3000)