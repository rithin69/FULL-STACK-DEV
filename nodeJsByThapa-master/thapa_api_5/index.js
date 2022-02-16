const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("./UserApi/userapi.json", "utf-8");
  const objData = JSON.parse(data);

  // console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the home sides");
  } else if (req.url == "/about") {
    res.end("Hello from the AboutUS sides");
  } else if (req.url == "/contact") {
    res.end("Hello from the contactUS sides");
  } else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data)=>{
      let dt=JSON.parse(data)
      res.end(dt[0].name)
      console.log(dt[0].name)
    })


  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 error pages. Page doesn't exist </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
