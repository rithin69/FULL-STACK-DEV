//to modify name of views as templates
// and use of partials

//nodemon index.js -e js,hbs   //doesnt work
//to refresh every pg during nodemon 
//operation

const express=require("express")
const app=express()
const hbs=require("hbs")
const path=require("path")
const port=8000;




const templatePath=path.join(__dirname,"../templates")
//instead of views 
//the name of folder is templates  

const partialspath=path.join(__dirname,"../templates/partials")
//setting partials path to use partial




//to set view engine
app.set("view engine","hbs")

//if you dont want to name 
// the folder as views
app.set("views",templatePath)


hbs.registerPartials(partialspath) //to register partials





app.get("/",(req,res)=>{
    res.render("index",{
        channelname:"thapa",

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