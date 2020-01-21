const request = require('request');

request('http://52.16.9.96:3000/usuarios/819', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.users.nombre);
  console.log(body.users.id);
});