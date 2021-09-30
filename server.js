'use strict'

var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();



app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/downloads', express.static(__dirname + '/downloads'));
app.use('/facultydeputation', express.static(__dirname + '/facultydeputation'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/json', express.static(__dirname + '/json'));


app.get('/', function(req, res){
    res.sendFile('home.html', {root : path.join(__dirname, './files')});
});

app.get(/^(.+)$/, function(req, res){
    try{
        if(fs.statSync(path.join(__dirname, './files', req.params[0] + '.html')).isFile()){
            res.sendFile(req.params[0] + '.html', {root: path.join(__dirname, './files')})
        }
    }
    catch(err){
        console.log(err);
        res.sendFile('404.html', {root: path.join(__dirname, './files')});
    }
});

const portNumber = 3000 ;

app.listen(portNumber, function(){
    console.log("Server running..");
    console.log("Running on localhost:" + portNumber);
});
