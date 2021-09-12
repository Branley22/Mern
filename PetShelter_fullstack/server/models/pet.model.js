const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "A pet name is required"],
    minlength: [3, "A pet name must be atleast three characters long"],
  },
  type:{
    type: String,
    required: [true, "A pet type is required"],
    minlength: [3, "A pet type must be atleast three characters long"],
    enum:[
      "Dog",
      "Cat",
      "Parrot",
      "Wolf",
      "Fish",
      "Fox",
      "Lion",
    ]
  },
  description:{
    type: String,
    required: [true, "A pet description is required"],
    minlength: [3, "A pet description must be atleast three characters long"],
  },
  skill1:{
    type: String
  },
  skill2:{
    type: String
  },
  skill3:{
    type: String
  }
}, {timestamps: true})

const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;