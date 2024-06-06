var express = require('express');
var router = express.Router();
const Livros = require('../controllers/livros');

router.get('/', function(req, res) {
  console.log('GET /books');
  const character = req.query.character;
  const genre = req.query.genre;
  const authors = req.query.authors;
  if (character) {
    Livros.findByCharacter(character)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  } else if (genre) {
    Livros.findByGenre(genre)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  } else if (authors) {
    Livros.findByAuthor(authors)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  } else {
    Livros.list()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
});

router.get('/genres', function(req, res) {
  console.log('GET /books/genres');
  Livros.findDistinctGenres()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

router.get('/characters', function(req, res) {
  console.log('GET /books/characters');
  Livros.findDistinctCharacters()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
}); 

router.get('/:id', function(req, res) {
  console.log('GET /books/' + req.params.id);
  Livros.findById(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

router.post('/', function(req, res) {
console.log('POST /books');
Livros.insert(req.body)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro));
});

router.put('/:id', function(req, res) {
console.log('PUT /books/' + req.params.id);
Livros.edit(req.params.id, req.body)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro));
});

router.delete('/:id', function(req, res) {
console.log('DELETE /books/' + req.params.id);
Livros.removeById(req.params.id)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;