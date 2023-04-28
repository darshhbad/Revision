//Limiting middleware execution to POST requests

const express = require('express')

const bodyParser = require('body-parser') 

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{    
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')     
})

app.post('/product',(req,res,next)=>{    //In this case middleware will only work for post requests
    console.log(req.body)  
    res.redirect('/')
})

app.use('/',(req,res,next)=>{    
    res.send('<h1>Hello from express</h1>')     
})

app.listen(3000)    

//Steps:
// npm init on terminal
// added "start":"node app.js" script to package.json file
// "npm start" on terminal, if other than "start" script, then e.g."npm run start-server" on terminal
// npm install nodemon --save-dev on terminal
// Note: just running npm install will install all packages in package.json file
// Note: package-lock.json shows the current version of all packages running the program
// changed "start":"nodemon app.js" script to package.json file
// npm install --save express, installed express
// npm install --save body-parser 