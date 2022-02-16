const express=require("express")
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("welcome to my home page")
})

app.get("/about",(req,res)=>{
    res.status(400).send("welcome to my abt page")
})

app.get("/contact",(req,res)=>{
    res.send("welcome to my contact page")
})


app.listen(port,()=>{
    console.log(`listening the port at ${port}`)
})