let fs = require("fs");


fs.readFile('./auctions.json', (err, data) => {
    if (err) throw err;
    
    let object = JSON.parse(data);
    let auction = object.alliance.auctions.find(a=>a.auc === 234079226);
    console.timeEnd("file");
  });
