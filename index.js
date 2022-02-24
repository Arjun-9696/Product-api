const express = require('express');
const app=express();
const importData=require("./data.json");
let port=process.env.PORT || 5002;
app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.get("/products",(req,res)=>{
    res.send(importData);
})
app.listen(port,()=>{
    console.log(`App is listening on port http://localhost:${port}`);
});
