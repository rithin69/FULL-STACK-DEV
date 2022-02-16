const express=require("express")
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.write("<h1>welcome to my home page<h1>")
    res.write("<h1>welcome to my home page<h1>")
    res.send()//to end connection
})

app.get("/about",(req,res)=>{
    res.status(400).send("welcome to my abt page")
})

app.get("/contact",(req,res)=>{
    res.send([{
        id:1,
        name:"rithin menezes",
    },
    {
        id:1,
        name:"rithin menezes",
    },{
        id:1,
        name:"rithin menezes",
    },{
        id:1,
        name:"rithin menezes",
    }])
})
//the data gets automatically converted to json (stringify )ojs
//we can also use res.json instead of res.send it will convert non obj 
//such as null and undefined which r not valid json to json

app.listen(port,()=>{
    console.log(`listening the port at ${port}`)
})

