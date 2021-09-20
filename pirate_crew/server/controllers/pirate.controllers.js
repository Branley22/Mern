const Pirate = require('../models/pirate.model');

module.exports = {

  findAllPirate:(req,res)=>{
    Pirate.find({}).sort({name: 1})
    .then((allPirates)=>{
      res.json(allPirates)
    })
    .catch((err)=>{
      console.log("Get all pirates failed");
      res.status(400).json(err)
    })
  },
  findOnePirate:(req,res)=>{
    Pirate.findOne({_id:req.params.id})
    .then((onePirate)=>{
      res.json(onePirate)
    })
    .catch((err)=>{
      console.log('get one pirate failed');
      res.status(400).json(err)
    })
  },
  createNewPirate:(req,res)=>{
    Pirate.create(req.body)
    .then((newPirate)=>{
      res.json(newPirate)
    })
    .catch((err)=>{
      console.log('create new pirate failed');
      res.status(400).json(err)
    })
  },
  updatePirate:(req,res)=>{
    Pirate.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      {new: true, runValidators: true}
    )
    .then((updatePirate)=>{
      res.json(updatePirate)
    })
    .catch((err)=>{
      console.log('update pirate failed');
      res.status(400).json(err)
    })
  },
  deletePirate:(req,res)=>{
    Pirate.deleteOne({_id:req.params.id})
    .then((deletedPirate)=>{
      res.json(deletedPirate)
    })
    .catch((err)=>{
      console.log('delete pirate failed');
      res.status(400).json(err)
    })
  }}