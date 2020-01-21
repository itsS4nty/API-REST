const express = require("express");
const app = express();
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
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});