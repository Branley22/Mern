const mongoose = require("mongoose");

const CartoonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A cartooon name is required"],
    minlength: [5, "A cartoon name must be atleast five characters long!"]
  },
  image: {
    type: String,
    required: [true, "Because we love pics, you must add one"]
  },
  genre: {
    type: String,
    required: [true, "Cartoon genre is required"],
    // enumeration allows us to limit the answers to specific string...
    //if we dont have one of these, it wont work
    enum: [
      "Anime",
      "Comedy",
      "Drama",
      "Action",
      "Children"
    ]
  },
  era: {
    type: Number,
    required: [true, "A cartoon era is required"],
    enum: [
      1960,
      1970,
      1980,
      1990,
      2000,
      2010
    ]
  },
  rating: {
    type: Number
  },
  suitableForKids: {
    type: Boolean
  }
}, {timestamps: true})
// timestamps auto create "createAt" and "updatedAt" date and time info for each document

// model is combo of collectionName and Schema
// name will be collection thats held in db
    const Cartoon = mongoose.model("Cartoon", CartoonSchema);

// returns a cartoon model with the collection name and the Schema

    module.exports = Cartoon;