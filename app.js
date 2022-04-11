const express = require('express')

const app = express()

app.get("/home" , (req,res)=>{
    res.json({"message":'Hello World',"version" :"v1"})
})

app.listen(5000,()=>{
	console.log("Server Started at port :",5000);
})