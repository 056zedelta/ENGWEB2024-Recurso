const Livros = require('../models/livros');

function compareStrings(a, b) {
  return a.localeCompare(b, undefined, { sensitivity: 'base', ignorePunctuation: true });
}

module.exports.list = async () => {
  return await Livros
    .find()
    .exec();
}

module.exports.findById = id => {
  return Livros
    .findOne({ _id: id })
    .exec();
}

module.exports.findByCharacter = character => {
    return Livros.find({ characters: character }).exec();
}
  
module.exports.findByGenre = genre => {
  return Livros.find({ genres: genre }).exec();
}

module.exports.findByAuthor = authors => {
  return Livros.find({ author: authors }).exec();
}

module.exports.findDistinctGenres = () => {
  return Livros.distinct('genres').then(genres => {
    return genres.sort(compareStrings);
  });
}

module.exports.findDistinctCharacters = () => {
  return Livros.distinct('characters').then(characters => {
    return characters.sort(compareStrings);
  });
}

module.exports.insert = livro => {
    return Livros.create(livro);
}

module.exports.edit = (id, comp) => {
  return Livros.updateOne({_id : id}, comp)
}

module.exports.removeById = id => {
    return Livros.findByIdAndDelete({ _id: id });
  }