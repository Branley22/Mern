const { findAllJokes, deleteJoke, updateJoke, createNewJoke } = require("../controllers/jokes.controllers");
const JokeController = require("../controllers/jokes.controllers");

//exporting arrow function with a parameter of app that contains five statments
// import in server.js like this require("./routes.jokes.routes")(app);

module.exports = (app) => {
  app.get('/api/jokes', JokeController.findAllJokes);
  app.post('/api/jokes', JokeController.createNewJoke);
  app.get('/api/jokes/:id', JokeController.findOneJoke);
  app.put('/api/jokes/:id', JokeController.updateJoke);
  app.delete('/api/jokes/:id', JokeController.deleteJoke);
}