// sql------------Mongodb
// Columns-----------Fields
//Rows---------------Documents
// Tables---------------Collections
////CFRDTC

const mongoose=require("mongoose")

//connection creation and create a new db
mongoose.connect("mongodb://localhost:27017/sfit",{
    useNewUrlParser:true,useUnifiedTopology:true}
).then( ()=>console.log("connection sucessfull"))
.catch((err)=>console.log(err))
//27017 name of port
//sfit name of database if not present it will create it

//schema
//A mongoose schema defines the structure of the document,
//default values,validators etc
const playlistSchema=new mongoose.Schema({
    
        name:{
            type:String,
            required:true
        },
        ctype:String,
        videos:Number,
        author:String,
        active:Boolean,
        date:{
            type:Date,
            default:Date.now
        }
    
        
})


// //a mongoose schema defines the structure of doc.default val,
// //validaors etc..


// //collection creation
const playlist=new mongoose.model("playlist",playlistSchema)

// //create document or insert

const createdocumment=async()=>{
    try{
        const mongoPlaylist=new playlist({
            name:"nodbjkbkejs",
            ctype:"bacjbkend",
            videos:50,
            author:" technmical",
            active:true,
            
        })
        const expPlaylist=new playlist({
            name:"nodefdgfdjs",
            ctype:"backfdgend",
            videos:501,
            author:" tecfdgdfhnical",
            active:true,
            
        })
        const nodePlaylist=new playlist({
            name:"noddfgejs",
            ctype:"bacfdgkend",
            videos:60,
            author:" tecdfghnical",
            active:true,
            
        })

    // to insert multiple doc
    const result=await playlist.insertMany([mongoPlaylist,expPlaylist,nodePlaylist]);
    console.log(result);
}catch(err){ 
    console.log(err)
}

//         // to insert single doc
//     //     const result=await reactPlaylist.save();
//     //     console.log(result);
//     // }catch(err){ 
//     //     console.log(err)
//     // }
    




    

}

createdocumment();









