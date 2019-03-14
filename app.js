const express = require('express');
const app = express();



app.get('/', (req, res) => {
  out="";
  for (let i = 1; i < 51; i++) {
    if(i % 2 === 0){
      out = out + '<p>'+i+' Soy Par!</p>';
    }else{
      out = out +'<p>'+i+' Soy Impar!</p>';
    }    
  }
  res.send(out);  
});

app.listen(3000, () => console.log('Listening on port 3000!'));