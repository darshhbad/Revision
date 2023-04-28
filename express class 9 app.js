//Adding a 404 error page

const express = require('express')

const adminRoutes = require('./routes/admin') 

const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser') 

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes)

app.use(shopRoutes) 

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')     //We can use status, setHeader, etc methods in res as long as send is last
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