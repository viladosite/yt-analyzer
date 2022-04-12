const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// ROUTE CREATION
app.get("/", function(req, res){
	res.sendFile(__dirname + "/site/index.html");
});


// DATA MODELS
app.get("/channel", function(req, res){
	res.sendFile(__dirname + "/data/channel.json");
});
app.get("/playlist", function(req, res){
	res.sendFile(__dirname + "/data/playlist.json");
});
app.get("/video", function(req, res){
	res.sendFile(__dirname + "/data/video.json");
});


// JS FUNCTIONS
app.get("/js/datafunctions.js", function(req, res){
	res.sendFile(__dirname + "/js/datafunctions.js");
});
app.get("/js/langfunctions.js", function(req, res){
	res.sendFile(__dirname + "/js/langfunctions.js");
});


// LANGUAGE FILES
app.get("/translations/en-us.json", function(req, res){
	res.sendFile(__dirname + "/translations/en-us.json");
});
app.get("/translations/pt-br.json", function(req, res){
	res.sendFile(__dirname + "/translations/pt-br.json");
});


// SERVER START
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});


// Expõe as pastas publicamente
app.use(express.static(__dirname + '/site'))
app.use(express.static(__dirname + '/data'))
app.use(express.static(__dirname + '/js'))
app.use(express.static(__dirname + '/translations'))