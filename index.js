const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.listen(3000,()=>{
    console.log("server is running.....")
})

mongoose.connect("mongodb+srv://kartikkey0414:t7I8ba2AlJUt7W7M@databsedb.4id3r.mongodb.net/Node-API?retryWrites=true&w=majority&appName=DatabseDB")
.then(()=>{console.log("DB connected")})
.catch(()=>{console.log("Connection failed!!!")});