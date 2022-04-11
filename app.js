const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const path = require('path');


app.get("/home" , (req,res)=>{
    res.json({"message":'Hello World',"version" :"v1"})
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(PORT,()=>{
	console.log("Server Started at port :",PORT);
})