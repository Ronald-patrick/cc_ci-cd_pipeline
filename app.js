const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()

app.get("/home" , (req,res)=>{
    res.json({"message":'Hello World',"version" :"v1"})
})

app.listen(PORT,()=>{
	console.log("Server Started at port :",PORT);
})