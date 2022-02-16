const express=require("express")
const app=express();

app.get("/",(req,res)=>{
    res.send("hello world from express")
})

app.listen(8000,()=>{
    console.log("listening the port at 8k")
})