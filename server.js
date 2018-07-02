const express = require('express');
const app = express();

app.use(express.static('public'));


app.get("/", (req, res) => {
    console.log("its running")
  });



app.listen(process.env.PORT || 8080);