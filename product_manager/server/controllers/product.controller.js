const Product = require('../models/product.model');


module.exports = {
  index: (req, res) => {
  res.json({message: "Hello World"});
  },

  createProduct: (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
      title,
      price,
      description
    })
    .then(newProduct => res.json(newProduct))
    .catch(err => res.json(err));
  },

  findAllProducts: (req,res) => {
    Product.find({})
      .then((allProducts)=> {
        res.json(allProducts)
    })
      .catch((err)=> {
        console.log("Get all products failed")
        res.status(400).json(err)
      })
    },

    findOneProduct: (req, res) => {
      Product.findOne({_id:req.params.id})
      .then((product)=>res.json(product))
      .catch((err)=> {
        console.log("finding one product failed");
        res.status(400).json(err)
      })
    }
}

