const mongoose = require('mongoose');
const dbName = "products";

mongoose.connect("mongodb://localhost/" + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => {
    console.log(`Connecting to the ${dbName} database`);
  })
  .catch((err) => {
     console.log(`Something went wrong connecting to the ${dbName}`);
     console.log(err);
  })