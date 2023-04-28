//Filtering paths

const express = require('express')

const path = require('path')

const  rootDir=require('./util/path')

const adminRoutes = require('./routes/admin') 

const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser') 

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))     //Takes all request for css file will directly take it to public folder so we don't need to write public in address in html, head, files

app.use('/admin',adminRoutes) 

app.use(shopRoutes) 

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','error.html')) 
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