const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(__dirname+'/basic-react/build'))

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.listen(8080,function(){
    console.log('listening on 8080')
})