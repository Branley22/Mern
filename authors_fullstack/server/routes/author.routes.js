const AuthorController = require("../controllers/author.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) =>{

  app.get('/api/authors', AuthorController.findAllAuthors);
  app.post('/api/authors', authenticate, AuthorController.createNewAuthor);
  app.get('/api/authors/:id', AuthorController.findOneAuthor);
  app.put('/api/authors/:id', AuthorController.updateAuthor);
  app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}