const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Cria as rotas
app.get("/", function(req, res){
	res.sendFile(__dirname + "/site/index.html");
});

app.get("/channel", function(req, res){
	res.sendFile(__dirname + "/data/channel.json");
});

app.get("/playlist", function(req, res){
	res.sendFile(__dirname + "/data/playlist.json");
});

app.get("/video", function(req, res){
	res.sendFile(__dirname + "/data/video.json");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

// Expõe as pastas publicamente
app.use(express.static(__dirname + '/site'))
app.use(express.static(__dirname + '/data'))