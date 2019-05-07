
var http = require('http');
let server = http.createServer(messageReceived);
server.listen(8080);


function messageReceived(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if(req.method === "GET" && req.url === "/users"){
      res.end();
    }
    else if(req.method === "GET" && req.url.indexOf("/users/") > -1){
      let id = req.url.split("/");
      id = Number(id[2]);
      res.end();
    }
    else if(req.method === "POST" && req.url === "/users"){
        let body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        }).on('end', () => {
          body = Buffer.concat(body).toString();
          let user = JSON.parse(body);
          
         
          res.end();
        });
    }
    else{
     res.write("Not Found");
     res.end();
    }
    
}

