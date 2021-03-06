const PetController = require("../controllers/pet.controllers");

module.exports = (app)=> {
  app.get('/api/pets', PetController.findAllPets);
  app.post('/api/pets/', PetController.createNewPet);
  app.get('/api/pets/:id', PetController.findOnePet);
  app.put('/api/pets/:id', PetController.updatePet);
  app.delete('/api/pets/:id', PetController.deletePet);
}