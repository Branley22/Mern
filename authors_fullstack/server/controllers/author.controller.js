const Author = require("../models/author.model");

module.exports = {
  //get all
  findAllAuthors: (req,res)=>{
    Author.find({})
    .then((allAuthors)=>{
      res.json(allAuthors);
    })
    .catch((err)=>{
      console.log("Get all authors failed");
      res.status(400).json(err);
    })
  },
  //Get one
  findOneAuthor: (req,res)=>{
    Author.findOne({_id:req.params.id})
    .then((oneAuthor)=>{
      res.json(oneAuthor)
    })
    .catch((err)=>{
      console.log("finding one author failed");
      res.status(400).json(err)
    })
  },
  //Post
  createNewAuthor: (req,res)=>{
    Author.create(req.body)
    .then((newAuthor)=>{
      res.json(newAuthor)
    })
    .catch((err)=>{
      console.log("create author failed");
      res.status(400).json(err)
    })
  },
  //Put
  updateAuthor: (req,res)=>{
    Author.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      { new: true, runValidators: true }
    )
    .then((updateAuthor)=>{
      res.json(updateAuthor)
    })
    .catch((err)=>{
      console.log("update author failed");
      res.status(400).json(err)
    })
  },
  //Del
  deleteAuthor: (req,res)=>{
    Author.deleteOne({_id:req.params.id})
    .then((deletedAuthor)=>{
      res.json(deletedAuthor)
    })
    .catch((err)=>{
      console.log("Delete author failed");
      res.status(400).json(err)
    })
  }
}
