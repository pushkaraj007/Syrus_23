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
const Coupon = require('./models/couponModel');
const PaytmChecksum = require("./PaytmChecksum");
const {v4:uuidv4} = require("uuid");
const formidable = require("formidable");
require("dotenv").config();

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

app.get('/products',async(req,res)=>{
    try{
        var prod = await Product.find().limit(6);
        res.json({ status : 'ok',products: prod});
    }
    catch(err){
        console.log(err);
    }
})

app.get('/products/:user',async(req,res)=>{
    try{
        var user = await User.findOne({email: req.params.user});
        var prod = await Product.find({seller: user._id});
        res.json({ status : 'ok',products: prod});
    }
    catch(err){
        console.log(err);
    }
})

app.post('/product/details',async (req,res)=>{
    try{
        const pro = await Product.findOne({_id: req.body.id}).populate("category").populate("seller");
        res.json({ status : 'ok',details: pro});
    }
    catch(err){
        res.json({status: 'error',error: err})
    }
})

app.post('/product/remove',async (req,res)=>{
    try{
        const pro = await Product.findOneAndRemove({_id: req.body.id});
        res.json({ status : 'ok',details: pro});
    }
    catch(err){
        res.json({status: 'error',error: err})
    }
})

app.post('/cart/add',async (req,res)=>{
    try{
        const pro = await User.updateOne(
            { email: req.body.user },
            { $push: { cart: req.body.id } }
         );
        res.json({ status : 'ok',details: pro});
    }
    catch(err){
        res.json({status: 'error',error: err})
    }
})

app.post('/cart/get',async (req,res)=>{
    try{
        const pro = await User.findOne({ email: req.body.user }).populate('cart');
        //  const items = await pro.populate("cart")
        res.json({ status : 'ok',items: pro});
    }
    catch(err){
        res.json({status: 'error',error: err})
    }
})

app.post('/cart/remove',async (req,res)=>{
    try{
        // const p = await Product.findOne({})
        const pro = await User.updateOne({ email: req.body.user },{ $pull: {cart: req.body.id } }).populate('cart');
        //  const items = await pro.populate("cart")
        res.json({ status : 'ok',items: pro});
    }
    catch(err){
        res.json({status: 'error',error: err})
    }
})

app.post('/coupon/new',async (req,res)=>{
    try{
        const user = await User.findOne({email: req.body.to});
        req.body.to = user._id;
        const pro = await Coupon.create(req.body);
        res.json({ status : 'ok',details: pro});
    }
    catch(err){
        res.json({status: 'error',error: err})
    }
})

app.post('/coupon/verify',async (req,res)=>{
    try{
        const user = await User.findOne({email: req.body.user});
        const coupon = await Coupon.findOne({name: req.body.coupon,to: user._id,product: req.body.id});
        if(coupon){
        res.json({ status : 'true',coupon: coupon});
        }
        else{
            res.json({status: 'false'});
        }
    }
    catch(err){
        res.json({status: 'error',error: err})
    }
})

app.post('/api/payment',async(req,res)=>{
    const {user,amount} = req.body;
    const usr = await User.findOne({email: user})
    var paytmParams = {};
    
    /* initialize an array */
    paytmParams["MID"] = process.env.Merchant_ID;
    paytmParams["WEBSITE"] = process.env.Website;
    paytmParams["CHANNEL_ID"] = process.env.Channel_ID;
    paytmParams["INDUSTRY_TYPE_ID"] = process.env.Industry_Type;
    paytmParams["CUST_ID"] = usr.email;
    paytmParams["ORDER_ID"] = uuidv4();
    paytmParams["TXN_AMOUNT"] = amount;
    paytmParams["CALLBACK_URL"] = 'http://localhost:5000/api/callback';
    paytmParams["EMAIL"] = usr.email;
    paytmParams["MOBILE_NO"] = usr.contact.toString();
    console.log(paytmParams["ORDER_ID"]);
    
    /**
    * Generate checksum by parameters we have
    * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
    */
    var paytmChecksum = PaytmChecksum.generateSignature(paytmParams, process.env.Merchant_Key);
    paytmChecksum.then(function(checksum){
        let params = {
            ...paytmParams,"CHECKSUMHASH": checksum
        }
        res.json({params: params})
    }).catch(function(error){
        console.log(error);
    });
    })
    
    app.post('/api/callback',(req,res)=>{
        const form = new formidable.IncomingForm();
        form.parse(req,(err,fields,file)=>{
            
    
            /* import checksum generation utility */
    
    var Checksum = fields.CHECKSUMHASH;
    delete fields.CHECKSUMHASH; 
    
    var isVerifySignature = PaytmChecksum.verifySignature(fields, process.env.MERCHANT_KEY, Checksum);
    if (isVerifySignature) {
        console.log("Checksum Matched");
        if(fields.STATUS === 'TXN_SUCCESS' && fields.RESPMSG==='Txn Success'){
        res.redirect('http://localhost:3000/thankyou');
        }
        else{
            res.redirect('http://localhost:3000/fail');
        }
    } else {
        console.log("Checksum Mismatched");
        res.redirect('http://localhost:3000/fail')
    }
        })
    })

    app.get('/category/:cat',async(req,res)=>{
        try{
            const cat = req.params.cat;
            const category = await Category.findOne({name: cat});
            var prod = await Product.find({category: category._id});
            res.json({ status : 'ok',products: prod, category: cat});
        }
        catch(err){
            console.log(err);
        }
    })

    app.get('/search/:key',async(req,res)=>{
        try{
            const key = req.params.key;
            var prod = await Product.find({ $text: { $search: key } });
            res.json({ status : 'ok',products: prod});
        }
        catch(err){
            console.log(err);
        }
    })


app.listen(5000,()=>{
    console.log('server started');
})