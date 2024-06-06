var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res) {
  var d = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:17000/books')
                    .then(resposta => {
                      res.render('index', { livros: resposta.data, data: d});
                    })
                    .catch( erro => {
                      res.render('error', {error: erro, message: 'Erro ao recuperar os livros'})
                    })
});

router.get('/:id', function(req, res) {
  var d = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:17000/books/'+ req.params.id)
                    .then(resposta => {
                      res.render('livro', { livro: resposta.data, data: d});
                    })
                    .catch( erro => {
                      res.render('error', {error: erro, message: 'Erro ao recuperar o livro'})
                    })
});


function calcularQuantidadeLivros(livros, author) {
  let count = 0;
  for (const livro of livros) {
    if (livro.author.includes(author)) {
      count++;
    }
  }
  return count;
}



router.get('/authors/:id', function(req, res) {
  var d = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:17000/books?authors='+ req.params.id)
                    .then(resposta => {
                      var somatorio = calcularQuantidadeLivros(resposta.data);
                      res.render('author', { livros: resposta.data, somatorio, data: d, author: req.params.id});
                    })
                    .catch( erro => {
                      res.render('error', {error: erro, message: 'Erro ao recuperar o contrato'})
                    })
});

module.exports = router;