var express = require('express');  
var app = express();  
fs = require('fs');
app.get('/mform', function(req){  
    let myObject={name:req.query.name,email:req.query.email
      ,address:req.query.address,phone:req.query.phone,date:req.query.date,spécialité:req.query.spécialité}
    let data = fs.readFileSync('users.json');
    let users = JSON.parse(data);
    users.push(myObject);
    fs.writeFile('users.json', JSON.stringify(users), function (err) {
        if (err) return console.log(err);
      });
    
});  
app.listen(8080)