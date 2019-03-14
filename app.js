const express = require('express');
const app = express();



app.get('/', (req, res) => {
  var query = require('url').parse(req.url,true).query;
  let name = req.query.name;
  res.send('<h1>Hola '+ name +'!</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));