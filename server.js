const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/api") {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({
      site: "dragonuz",
      status: "working"
    }));
  } else {
    res.end("Dragon API ishlayapti");
  }

});

server.listen(3000);