const PirateController = require('../controllers/pirate.controllers');

module.exports = (app)=>{
  app.get('/api/pirates', PirateController.findAllPirate);
  app.post('/api/pirates', PirateController.createNewPirate);
  app.get('/api/pirates/:id', PirateController.findOnePirate);
  app.put('/api/pirates/:id', PirateController.updatePirate);
  app.delete('/api/pirates/:id', PirateController.deletePirate);
}