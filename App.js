const express = require('express')

const app = express()
app.get('/api/main',function(req,res){
    res.send('Hello Everyone.....I am Smily')
    res.end()
})

app.listen(4000 , function(){
    console.log('Running successfully');
})