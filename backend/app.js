const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");

if(process.env.NODE_ENV !== "production")
{
    require("dotenv").config({"path":"config/config.env"});
}


//middleswares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(cookieParser);

//importing routes 
//post 
const post = require("./routes/post");
// user
const user = require("./routes/user");

//using routes 
//post
app.use("/api",post);
app.use("/api",user);
async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",
		{
			headers: { Authorization: "Bearer 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",'Content-Type': 'application/json' },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}
app.post("/verify",async(req,res)=>{
    const {institute,ocrText} = req.body;
    const formattedText = ocrText.replace(/\s*\n\s*/g, '\n').replace(/^\s+|\s+$/g, '').replace(/\s{2,}/g, ' ');
    const firstHalf = formattedText.substring(0, Math.ceil(formattedText.length / 2));
    const response = await query({"inputs": {
		"source_sentence": firstHalf,
		"sentences": [
			institute,
		]
	}});
    console.log(response);
    if(response[0] >= 0.7)res.status(200).json({message : verified})
    else res.status(400).json({message : "not verified"})
    
})
module.exports = app;