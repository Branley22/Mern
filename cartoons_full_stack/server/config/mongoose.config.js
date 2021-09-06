const mongoose = require("mongoose");
const dbName = "cartoons";

mongoose.connect("mongodb://localhost/" + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => {
  console.log(`You're connected to the ${dbName} database`);
})
.catch((err)=> {
  console.log(`There was a error connecting to ${dbName} database...bummer`);
  console.log(err);
})