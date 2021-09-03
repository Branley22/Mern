// imports model from models file
const joke = require("../models/jokes.model");

module.exports = {

  //get all jokes from collection
  findAllJokes: (req,res) => {
    console.log("All the jokes!");
    // use model to connect to the collection to find all documents
    // finds all documents
    joke.find({})
    .then((allJokes) => {
      res.json(allJokes);
    })
    .catch((err) => {
      console.log("Getting all jokes failed!");
      res.status(400).json(err);
    })
  },

  createNewJoke: (req,res) => {
    joke.create(req.body)
    .then((newJoke)=> res.json({newJoke}))
    .catch((err)=> {
      console.log("Create jokes failed");
      res.status(400).json(err)
    })
  },

  findOneJoke: (req,res) => {
    //id will come to use from the param/url/route call
    joke.findOne({_id: req.params.id})
    .then((oneJoke)=>res.json(oneJoke))
    .catch((err)=> {
      console.log("Find one joke failed")
      res.status(400).json(err)
    })
  },

  updateJoke: (req,res) => {
    joke.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      { new: true, runValidators: true }
    )
    .then(updateJoke => res.json({Joke: updateJoke}))
    .catch(err => res.json({ message: "something is wrong", error: err}));
  },

  deleteJoke: (req,res) => {
    joke.deleteOne({_id: req.params.id})
    .then((deletedJoke)=>res.json({deleted: deletedJoke}))
    .catch((err)=> res.json({message: "erros in deleting joke", error: err}))
  }
}