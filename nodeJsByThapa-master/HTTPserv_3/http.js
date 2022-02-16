const http = require("http");


const server = http.createServer((req, res) => {
    // if we write only res.write the page will keep on loading 
    //we have to write res.end to stop loading the page
    
    res.write("heyyyyyy")
    res.end ("helloooo from the others side");
});


// 8k port no 
// 127.0.0.1 host address
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port 8k")
})