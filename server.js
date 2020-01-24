var express = require("express");
var path = require('path');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(express.static(__dirname));
app.get("/",function(req,res){
	res.sendFile(path.join(__dirname, 'test/test.html'));
})
app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!')
})
