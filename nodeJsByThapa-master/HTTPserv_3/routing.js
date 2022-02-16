const http = require("http");


const server = http.createServer((req, res) => {
    // if we write only res.write the page will keep on loading 
    //we have to write res.end to stop loading the page
    // console.log(req.url);
  if (req.url == "/") {
    res.write("heyuyuyio")
    res.end("Hello from the home sides");
  } 
  else if (req.url == "/about") {
    res.end("Hello from the AboutUS sides");
  } 
  else if (req.url == "/contact") {
    res.end("Hello from the contactUS sides");
  } 
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 error pages. Page doesn't exist </h1>");
  }
});

  

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port 8k")
})