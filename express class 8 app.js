//Using Express Router

const express = require('express')

const adminRoutes = require('./routes/admin') //imported admin routes which is valid middleware function

const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser') 

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes)

app.use(shopRoutes)     //We can use it before adminroutes as we have used router.get and it will exact match with post request through /add-product path 

// app.use('/add-product',(req,res,next)=>{    // we made a routes folder and put them there
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')     
// })

// app.post('/product',(req,res,next)=>{  
//     console.log(req.body)  
//     res.redirect('/')
// })

// app.use('/',(req,res,next)=>{    
//     res.send('<h1>Hello from express</h1>')     
// })

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