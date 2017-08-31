var express = require('express')
var app = express()

app.use(express.static("public"));
app.set('port', 3000)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(app.get('port'), function (){
    console.log('Corriendo en el puerto ' + app.get('port'));
});
