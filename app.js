const express = require('express');
const app = express();



app.get('/', (req, res) => {
  let name = req.query.nombre ? req.query.nombre : "desconocido";
  res.send('<h1>Hola '+ name +'!</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));