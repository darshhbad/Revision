const express=require('express')

const path=require('path')  //imported path core module and created views folder and created html files for both add product and shop

const  rootDir=require('../util/path')  //created a util/path folder cleaner way to directly point to folder and file name

const router=express.Router()   

router.get('/add-product',(req,res,next)=>{    
    res.sendFile(path.join(rootDir,'views','add-product.html'))      //sendFile is used to connct file and dirname is location of current folder and concatenates path from following arguments
})

router.post('/add-product',(req,res,next)=>{  
    console.log(req.body)  
    res.redirect('/')
})

module.exports = router