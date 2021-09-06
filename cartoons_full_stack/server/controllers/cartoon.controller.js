const Cartoon = require("../models/cartoon.model");

//get all documents from the "cartoons" collection and return an array of "cartoon" documents
module.exports = {
  //GET call
  findAllCartoons: (req, res) => {
    console.log("All the cartoons");
    //use the model to connect to the collection and find all documents
    Cartoon.find({})
    .then((allCartoons) => {
      res.json(allCartoons)
    })    
    .catch((err) => {
      console.log("Get all cartoons failed");
      res.status(400).json(err);
    })
  },

  //GET call
  findOneCartoon: (req, res) => {
    Cartoon.findOne({_id: req.params.id})
    .then((oneCartoon)=>res.json(oneCartoon))
    .catch((err)=>{
      console.log("finding one cartoon failed");
      res.status(400).json(err)
    })
  },

  //POST call
  createNewCartoon: (req,res) => {
    Cartoon.create(req.body)
    .then((newCartoon)=>res.json({newCartoon}))
    .catch((err)=>{
      console.log("Create cartoon failed");
      res.status(400).json(err)
    })
  },

  //PUT call
  updateCartoon: (req, res) => {
    Cartoon.findOneAndUpdate(
      {_id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    )
    .then(updateCartoon =>res.json({updateCartoon}))
    .catch(err=>res.json({ message: "Something went wrong", error: err}));
  }, 
   
  //DEL call
  deleteCartoon: (req, res)=> {
    Cartoon.deleteOne({_id: req.params.id})
    .then((deletedCartoon)=>res.json({deletedCartoon}))
    .catch((err)=> res.json({message: "Errros in deleteCartoon", error:err}))
  }
}