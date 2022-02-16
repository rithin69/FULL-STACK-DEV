
//how to use a static pg
//public folder contain static file ie html and css file
const express=require("express")
const app=express();

const path=require("path")

// console.log(__dirname)
// console.log(path.join(__dirname,"../public"))



const staticpath=path.join(__dirname,"../public")
app.use(express.static(staticpath)); //middleware

app.get("/",(req,res)=>{
    res.status(200).send("<h1>hello from express</h1>")

    // res.send("sddsdd")
    // u cant write two res.send 
    // to send multiple html ele use 
    // res.write
})

app.get("/about",(req,res)=>{
    res.write("<h1>about page</h1>")
    res.write("<h1>thank u</h1>")
    res.send()
//if u want to send multiple html lines use res.write
//then end it with res.send()
})


app.get("/temp",(req,res)=>{
    res.send([  //instead of send we can write res.json here
        {
        name:null,
        id:1,
        },
        {
        name:"rithin",
        id:1,
        },
        {
        name:"rithin",
        id:1,
        },
            ]) 
    //to store mutiple js obj we use array of obj
    //converts js obj to json internally by stringify
    //res.json will conv non-obj such as null and undefined
    //which r not valid json to json but res.send wont
})


app.listen(8000,()=>{
    console.log("listening to port at 8000")

});