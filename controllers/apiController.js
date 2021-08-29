const PI = require('../models/PImodel');

exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
  };


  
// TODO: listar pontos de interesse da BD
exports.details = function(req, res) {
    res.send({type: 'GET'});
};

// adicionar novo ponto de interesse
exports.create = function(req, res){
    PI.create(req.body).then(function(pi) {
        res.send(pi)
    })
};

// atualizar ponto de interesse
exports.update = function(req, res) {
    res.send({type: 'PUT'});
};

// apagar ponto de interesse
exports.delete = function(req, res) {
    res.send({type: 'DELETE'});
};