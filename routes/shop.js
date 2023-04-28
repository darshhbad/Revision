const path = require('path')

const express=require('express')

const  rootDir=require('../util/path')

const router=express.Router() 

router.get('/',(req,res,next)=>{    
    res.sendFile(path.join(rootDir,'views','shop.html'))      //dirname is location of current folder and concatenates path from following arguments
    // res.sendFile(path.join(__dirname,'..','views','shop.html'))    //We can also use just .. instead of ../
})

module.exports = router