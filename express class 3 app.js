//How middleware works

const http = require('http');

const express = require('express')

const app = express()

app.use((req,res,next)=>{        
    console.log("In middleware") 
    next()
})

app.use((req,res,next)=>{
    console.log("In another middleware")
    res.send('<h1>Hello from express</h1>')     //send method sets header as text/html by default and we can do it by just writing h1 tag 
})

const server = http.createServer(app);

server.listen(3000);

//Steps:
// npm init on terminal
// added "start":"node app.js" script to package.json file
// "npm start" on terminal, if other than "start" script, then e.g."npm run start-server" on terminal
// npm install nodemon --save-dev on terminal
// Note: just running npm install will install all packages in package.json file
// Note: package-lock.json shows the current version of all packages running the program
// changed "start":"nodemon app.js" script to package.json file
// npm install --save express, installed express 