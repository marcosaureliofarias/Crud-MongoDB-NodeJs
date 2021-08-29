// associar as dependências instaladas
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const Uri = 'mongodb+srv://marcos:Samuel%40221568@cluster0.npff2.mongodb.net/marcos?retryWrites=true&w=majority'




// Confirma conexão com mongo
mongoose.connect(Uri,{ useNewUrlParser:true}).then(()=> {
  console.log("Conectado com sucesso")
}).catch((err)=>{
  console.log("Houve um erro ao se conectar no banco"+err)
})


// este middleware deve estar acima das routes-handlers!
app.use(bodyparser.json());

let port = 5000;

// ‘END POINT INVÁLIDO!’
app.get('/', function(req, res){
  res.send('END POINT INVÁLIDO!');
});

//todo o url começado por '/api' chama as rotas em './routes/api'
const api = require('./routes/api')
app.use('/api', api);

// servidor á escuta no porto 5000
app.listen(process.env.port || port, () =>{
    console.log('Servidor em execução no porta: '+ port);
  });