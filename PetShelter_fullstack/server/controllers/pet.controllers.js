const Pet = require("../models/pet.model");

module.exports = {
  //GET
  findAllPets: (req,res)=> {
    Pet.find({})
    .then((allPets)=>{
      res.json(allPets);
    })
    .catch((err)=>{
      console.log("Get all pets failed");
      res.status(400).json(err);
    })
  },
  //GET(one)
  findOnePet: (req,res)=>{
    Pet.findOne({_id:req.params.id})
    .then((onePet)=>res.json(onePet))
    .catch((err)=>{
      console.log("finding one pet failed");
      res.status(400).json(err)
    })
  },
  //POST
  createNewPet: (req,res)=>{
    Pet.create(req.body)
    .then((newPet)=>res.json(newPet))
    .catch((err)=>{
      console.log("create pet failed");
      res.status(400).json(err)
    })
  },
  //PUT
  updatePet: (req,res)=>{
    Pet.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      { new: true, runValidators: true }
    )
    .then(updatePet=>res.json(updatePet))
    .catch((err)=>{
      console.log("Updating pet failed");
      res.status(400).json(err)
    })
  },
  //DEL
  deletePet: (req,res)=>{
    Pet.deleteOne({_id: req.params.id})
    .then((deletedPet)=>res.json(deletedPet))
    .catch((err=>{
      console.log("Delete pet failed");
      res.status(400).json(err)
    }))
  }
}