const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "A product title is required"],
    },
    price: { 
        type: String,
        required: [true, "Nothing is free, price is required"]
    },
    description : { type: String }
}, { timestamps: true });


module.exports = mongoose.model("Product", ProductSchema);

