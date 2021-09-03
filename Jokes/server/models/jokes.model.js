const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  jokeQuestion: {
    type: String
  },
  jokeResponse: {
    type: String
  },
}, {timestamps: true})
// timestamps automatically create "createAt" and "updateAt" date and time for each document
// each time a doc is updated it will change the "updatedAt"

// model is combined of 1, the collectionName held in the db and 2, Schema
const joke = mongoose.model("joke", JokeSchema);

// returns joke model with the collection name and that Schema
module.exports = joke;