const Product = require('../models/product.model');
module.exports.index = (req, res) => {
  response.json({
     message: "Hello World"
  });
}

module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({
    title,
    price,
    description
  })

  .then(product => res.json(product))
  .catch(err => res.json(err));
}

