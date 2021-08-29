Operações do CRUD
Vamos criar as operações CRUD: create, read, update, delete.
CREATE
. Criar um Ponto de Interesse (PI) na base dados
No ficheiro ‘\controllers\apiControllers.js’ atualizar a função ‘create’:

// importar modelo
const PI = require('../models/PImodel');
// adicionar novo ponto de interesse
exports.create = function (req, res) {
  // cria novo ‘pi’ na BD a partir do request, depois, devolve o
  //‘pi’ criado ao cliente
  PI.create(req.body).then(function(pi){
  res.send(pi);
  });
};