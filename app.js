const express = require('express');
const app = express();



app.use(express.urlencoded());
app.get('/', function(req, res) {  
    console.log(req.headers);    
    res.send(req.headers['user-agent'])
});

app.listen(3000, () => console.log('Listening on port 3000!'));