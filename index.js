
var http = require('http');
let server = http.createServer(messageReceived);
server.listen(8080);

let {create,find,findAll} = require("./database");


function messageReceived(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if(req.method === "GET" && req.url === "/users"){
      let users = findAll("users");
      res.write(JSON.stringify(users));
      res.end();
    }
    else if(req.method === "GET" && req.url === "/students"){
      let users = findAll("students");
      res.write(JSON.stringify(users));
      res.end();
    }
    else if(req.method === "GET" && req.url.indexOf("/users/") > -1){
      let id = req.url.split("/");
      id = Number(id[2]);
      let user = find("users",id);
      res.write(JSON.stringify(user));
      res.end();
    }
    else if(req.method === "POST" && req.url === "/users"){
        let body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        }).on('end', () => {
          body = Buffer.concat(body).toString();
          let user = JSON.parse(body);
          let savedUser = create("users",user);
          res.write(JSON.stringify(savedUser));
          res.end()
         
        });
    }
    else{
     res.write("Not Found");
     res.end();
    }
    
}

