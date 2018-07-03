const express = require('express');
const app = express();

app.use(express.static('public'));


app.get("/home", (req, res) => {
    res.sendfile('home/home.html');
    console.log("got to localhost 8080")
  });


app.get("/employee", (req, res) => {
    res.sendFile(__dirname + '/employee/employee.html');
    console.log("got to localhost 8080")
  });



app.listen(process.env.PORT || 8080);