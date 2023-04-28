//Parsing incoming requests

const express = require('express')

const bodyParser = require('body-parser') //installed body parser package

const app = express()

app.use(bodyParser.urlencoded({extended:false}))    //registers a middleware which will directly parse bodies

// app.use('/',(req,res,next)=>{      
//     console.log("This always runs")
//     next()  
// })

app.use('/add-product',(req,res,next)=>{        
    // console.log("In another middleware")
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>') //We need to write name in input tag for it to return a key value     
})

app.use('/product',(req,res,next)=>{
    console.log(req.body)   //req.body is another functionality of express, but gives undefined in direct use, for which we need to register parser 
    res.redirect('/')
})

app.use('/',(req,res,next)=>{       
    // console.log("In another middleware")
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