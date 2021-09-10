const Product = require("../models/product.model");


module.exports = {
  findAllProducts: (req,res) => {
    console.log("all the products!");
    Product.find({})
      .then((allProducts)=> {
        res.json(allProducts);
      })
      .catch((err)=> {
        console.log("Get all products failed")
        res.status(400).json(err)
      })
    },
  
    findOneProduct: (req, res) => {
      Product.findOne({_id: req.params.id})
      .then((oneProduct)=>res.json(oneProduct))
      .catch((err)=> {
        console.log("finding one product failed");
        res.status(400).json(err)
      })
    },
  
    createNewProduct: (req, res) => {
      Product.create(req.body)
      .then(newProduct=>res.json({newProduct}))
      .catch((err) => {
        console.log("create product failed");
        res.status(400).json(err)
      })
    },

    updateProduct: (req,res) => {
      Product.findOneAndUpdate(
        { _id:req.params.id },
        req.body,
        { new: true, runValidators: true }
      )
        .then(updateProduct => res.json({ updateProduct }))
        .catch((err)=> res.json({message: "error updating Product", error: err}));
      },

      deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        .then((deletedProduct)=>res.json({ deletedProduct }))
        .catch((err)=>res.json({message: "error deleting Product", error:err}))
      }}
