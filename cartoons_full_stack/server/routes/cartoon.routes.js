const cartoonController = require("../controllers/cartoon.controller");
const CartoonController = require("../controllers/cartoon.controller");

//exporting an arrow function with a parameter of app that contains five statements

module.exports = (app) => {
  app.get('/api/cartoons', CartoonController.findAllCartoons);
// if data is being sent to my server to create something use a POST request
  app.post('/api/cartoons', CartoonController.createNewCartoon);
  app.get('/api/cartoons/:id', cartoonController.findOneCartoon);
  app.put('/api/cartoons/:id', CartoonController.updateCartoon);
  app.delete('/api/cartoons/:id', CartoonController.deleteCartoon);
}