const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path');

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000,function(){
    console.log('server running on port 3000')
})

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/page1',(req,res)=>{
    res.render('page1.ejs')
})

app.post('/show',(req,res)=>{
    console.log(req.body)
    res.redirect('/page1')
})

