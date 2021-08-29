exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
  };


  
// TODO: listar pontos de interesse da BD
exports.details = function(req, res) {
    res.send({type: 'GET'});
};

// adicionar novo ponto de interesse
exports.create = function(req, res){
    console.log('you made a POST request: ', req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
};

// atualizar ponto de interesse
exports.update = function(req, res) {
    res.send({type: 'PUT'});
};

// apagar ponto de interesse
exports.delete = function(req, res) {
    res.send({type: 'DELETE'});
};