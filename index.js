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
const ChatRoom = require('./models/chatRoomModel');
const Message = require('./models/messagesModel');
const Category = require('./models/categoryModel');
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
    if(user){
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
    }
    else{
        return res.status(300).json({status:'error',user:null})
    }
});

app.post('/product/new',async (req,res)=>{
    try{
        var ctg;
        ctg = await Category.findOne({name: req.body.category});
        if(!ctg){
            ctg = await Category.create({name: req.body.category});
        }
        const usr = await User.findOne({email: req.body.seller});
        req.body.category = ctg._id;
        req.body.seller = usr._id;
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
        console.log(await (await product.populate("category")).populate("seller"))
        res.json({ status : 'ok'});
    }catch(err){
        res.json({status: 'error',error: err})
    }
})

app.get('/categories',async(req,res)=>{
    try{
        var cat = await Category.find();
        res.json({ status : 'ok',categories: cat});
    }
    catch(err){
        console.log(err);
    }
})

// async function createCategory(n){
//     const cat1 = await Category.create({name: n})
//     console.log(cat1);
// }

// createCategory("fiction");
// createCategory("engineering");

// app.post('/chat/message',async(req,res)=>{
//     try{
//         var room;
//         room = await ChatRoom.findOne({_id:req.body.seller+req.body.user});
//         if(!room){
//             const data = JSON.stringify({
//                 chatroomid: req.body.seller+req.body.user,
//                 messages: []
//             })
//             room = await ChatRoom.create(data);
//         }
//         const msg = JSON.stringify({
//             message: req.body.message,
//             owner: req.body.owner
//         })
//         const mid = await Message.create(msg);
//         ChatRoom.updateOne({ _id: room._id }, { "$push": { "messages": mid._id } });
//     }
//     catch(err){
//         console.log(err);
//     }
// })


app.listen(5000,()=>{
    console.log('server started');
})