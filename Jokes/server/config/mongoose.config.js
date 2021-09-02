// configure connection with mongo using mongoose
const mongoose = require("mongoose");
const dbName = "jokes";

//need to install software and test that I am connected by mongo in terminal
mongoose.connect("mongodb://localhost/" + dbName, {
  // allows to use most updated way with Mongo
  useNewUrlParser: true,
  // also allows to use the latest Mongo
  useUnifiedTopology: true
})

  .then(()=> {
    console.log(`You are connected to the ${dbName} database!`);
  })
  .catch((err)=> {
    console.log(`There was an error connecting to the ${dbName} name :(`);
  })