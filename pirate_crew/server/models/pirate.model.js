const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
    required:[true, "A pirate name is required"],
    minlength: [3, "A pirate name must be atleast three characters long"]
  },
  age: {
    type: Number,
    required:[true, "A pirate age is required"]
  }
}, {timestamps: true})

const Pirate = mongoose.model('Pirate', PirateSchema);
module.exports = Pirate;