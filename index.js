'strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port',(process.env.PORT|| 5000))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',function(req,res){
	res.send("Hello World From FBChatbot")
})
app.get('webhook',function(reg,res){
	if(req.query['hub.verify_token']==="alextest"){
		res.send(req.query['hub.challenge'])
	}
	res.sen("The token is wrong")
})


app.listen(app.get('port'),function(){
	console.log("Roger am running")
})