//Routing Request

const http = require('http')  
const server = http.createServer((req,res)=>{ 
    // console.log(req.url,req.method,req.headers) //doesn't do much for us
    const url = req.url     //storing the url of request in const to use it later
    if (url=='/'){          //routing the form 
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method=""POST"><input type="text" name="message"><button type ="submit">Send</button></form></body>')  //a request of type POST will be sent to /message
        res.write('</html>')
        return res.end()    //return is required so it exits the rqlistener function and doesn't go on with below code  
    }  
    res.setHeader('Content-Type','text/html')   //In the next phase, it executes if condition and begins to perform this phase
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my Node.js server</h1></body>')
    res.write('</html>')
    res.end()              
})
server.listen(3000) 