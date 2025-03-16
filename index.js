const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');

const app = express();

app.use(express.json());


// Get all products
app.get('/api/products', async (req,res)=>{
    try{

        const products = await Product.find({});
        res.status(200).json(products);

    }catch(err){
        res.status(500).json({"message":err.message});
    }
})

// Get product using ID

app.get('/api/product/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    }catch(err){
        res.status(500).json({"message":err.message});
    }
})

// update a product

app.put('/api/product/:id',async(req,res) => {
    try{

        const {id} = req.params;

        const product = await Product.findByIdAndUpdate(id,req.body);

        if(!product){
            return res.status(404).json({message:"Product not found"});
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);

    }catch(err){
        res.status(500).json({"message":err.message});
    }
})

// delete a product

app.delete('/api/product/:id', async(req,res)=>{
    try{

        const {id} = req.params;

        const product = await Product.findByIdAndDelete(id);

        if(!product){
            res.status(404).json({message:"Product not found"});
        }

        res.status(200).json({message: "Product deleted successfully"});

    }catch(err){
        res.status(500).json({"message" :err.message});
    }
})

// Add product

app.post('/api/products', async (req,res)=>{
    try{

        const product = await Product.create(req.body);
        res.status(200).json(product);

    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})



mongoose.connect("mongodb+srv://kartikkey0414:t7I8ba2AlJUt7W7M@databsedb.4id3r.mongodb.net/Node-API?retryWrites=true&w=majority&appName=DatabseDB")
.then(()=>{console.log("DB connected");
    app.listen(3000,()=>{
        console.log("server is running.....")
    })
})
.catch(()=>{console.log("Connection failed!!!")});