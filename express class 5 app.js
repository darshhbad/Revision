//Handling different routes


const express = require('express')

const app = express()

// app.use((req,res,next)=>{   // We don't need dummy middleware       
//     console.log("In middleware") 
//     next()
// })

app.use('/',(req,res,next)=>{      //We can put a middleware we need to run everytime we use program on every page
    console.log("This always runs")
    next()  
})

app.use('/add-product',(req,res,next)=>{      //We need to make path before '/' path so that it doesn't execute the '/' as long as we don't use next in this middle ware  
    console.log("In another middleware")
    res.send('<h1>The ADD Product Page</h1>')     
})

app.use('/',(req,res,next)=>{       //use fn takes another argument "path" and As every routes, starts with slash it will execute in all cases
    console.log("In another middleware")
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