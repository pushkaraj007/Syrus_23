const express = require('express');
const app = express();
const cors = require('cors');
const crypto = require('crypto-js');
const User = require('./models/userModel');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
const jwt = require('jsonwebtoken');
const Product = require('./models/productModel');
mongoose.connect('mongodb+srv://shree:uNczDvUQmO2ivhSB@cluster0.qikchv4.mongodb.net/?retryWrites=true&w=majority');

app.post('/register',async (req,res)=>{
    try{
        req.body.password = crypto.AES.encrypt(JSON.stringify(req.body.password), 'my-secret-key@123').toString();
        const user = await User.create(req.body)
        res.json({ status : 'ok'})
    }catch(err){
        res.json({status: 'error',error: err})
    }
})

app.post('/login',async (req,res) => {
    const user = await User.findOne({
        email: req.body.email
    })
    var bytes = crypto.AES.decrypt(user.password, 'my-secret-key@123');
    var decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
    if(req.body.password === decryptedData){
        const token = jwt.sign({
            name: user.name,
            email: user.email
        },'secret123')
        return res.status(200).json({status:'ok',user:token})
    }
    else{
        return res.status(300).json({status:'error',user:null})
    }
});

app.post('/product/new',async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.json({ status : 'ok',id: product._id});
        console.log('created');
    }catch(err){
        console.log(err)
        res.json({status: 'error',error: err})
    }
})

app.post('/product/update',async (req,res)=>{
    try{
        const product = await Product.findOneAndUpdate({_id: req.body.id},{$set: { image: req.body.image }});
        console.log(product);
        res.json({ status : 'ok'});
    }catch(err){
        res.json({status: 'error',error: err})
    }
})


app.listen(5000,()=>{
    console.log('server started');
})