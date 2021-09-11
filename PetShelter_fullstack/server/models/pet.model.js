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
      "Pitbull",
      "Husky",
      "Bulldog",
      "Poodle",
      "Golden Retriever",
      "German Shepherd",
      "Beagle",
      "German Shepherd",
      "Border Collie"
    ]
  },
  description:{
    type: String,
    required: [true, "A pet description is required"],
    minlength: [3, "A pet description must be atleast three characters long"],
  },
  skills:{
    type: String,
    minlength: [0, "Pet skills needed"],
    minlength: [3, "no more than 3 skills per pet"]
  }
}, {timestamps: true})

const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;