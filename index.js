const express = require("express");
const app = express();
app.set('port', process.env.PORT || 443);
app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });
app.get('/usuarios/819', function (req, res) {
    var us1 = {
        users: 
        {
            nombre: "pepe",
            id: "2",
            puesto: "mecanico"
        }   
}
    res.send(us1);
});
app.listen(app.get('port'));