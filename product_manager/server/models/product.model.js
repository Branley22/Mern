const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "A product title is required"],
    },
    price: { 
        type: Number,
        required: [true, "Must be a number"],
    },
    description : { type: String }
}, { timestamps: true });


module.exports = mongoose.model("Product", ProductSchema);

