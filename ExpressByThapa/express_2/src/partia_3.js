//to modify name of view as templates

//nodemon index.js -e js,hbs  //not working
//to refresh every pg during nodemon 
//operation


const express=require("express")
const path=require("path")
const app=express()
const port=8000;
const hbs =require("hbs")  //to use partials 



const templatePath=path.join(__dirname,"../templates")

const partialspath=path.join(__dirname,"../templates/partials")
//instead of views 
//the name of folder is templates  



//to set view engine
app.set("view engine","hbs")

//if you dont want to name 
// the folder as views
app.set("views",templatePath)

hbs.registerPartials(partialspath) //to register partials




app.get("/",(req,res)=>{
    res.render("index",{
        channelname:"Rithin Menezes Home pg",

    })

})

app.get("/about",(req,res)=>{
    res.render("about")
}
)
app.get("*",(req,res)=>
{
    res.render("404error",{
        errorcom:"ooooops 404 error"
    })
})

app.listen(port,()=>{
    console.log("listening to port 8000")
})