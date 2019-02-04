
var http = require('http');
let users = require("./state").users;
let products = require("./state").products;
let server = http.createServer(messageReceived);
server.listen(8080);


function messageReceived(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if(req.method === "GET" && req.url === "/users"){
      getUsers(req, res);
    }
    else if(req.method === "GET" && req.url.indexOf("/users/") > -1){
      let id = req.url.split("/");
      
    }
    else if(req.method === "POST" && req.url === "/users"){
        let body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        }).on('end', () => {
          body = Buffer.concat(body).toString();
          let user = JSON.parse(body);
          user._id = users.length + 1;
          users.push(user);
        });
    }
    else{
     res.write("Not Found");
    }
    res.end();
}

function getUsers(req, res){
    let usersJSON = JSON.stringify(users);
    res.write(usersJSON);
}
